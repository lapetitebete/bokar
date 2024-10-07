import express from 'express';
import bodyParser from 'body-parser';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql'
import { makeExecutableSchema } from 'graphql-tools';
import { ListBucketsCommand } from '@aws-sdk/client-s3';


import { envConfig } from './util/dotenv.js'; // must be first user defined import
import { get404 } from './controllers/error.js';
import { sequelize } from './util/sequelize.js';
import { s3Client } from './util/s3Client.js';
import queryResolvers from './resolvers/queries/queryResolvers.js';
import typeDefs from './schemas/TypeDefs.js';


const schema = makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: queryResolvers,
});

const app = express();

// app.use(bodyParser.urlencoded({ extended: false }));

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
    context: {
        sequelize
    }
}));


app.use(get404);


const start = async () => {
    try {
        // connect to RDS
        await sequelize.authenticate();

        console.log('Connection with the database has been established successfully.');
        // console.log(sequelize.models);
    
    } catch(err) {
        console.error('Unable to connect to the database:', err);
    }

    try {
        // connect to S3
        const result = await s3Client.send(new ListBucketsCommand({
            Bucket: process.env.BUCKET_NAME
        }));

        if (result.$metadata.httpStatusCode == 200){
            console.log('Connection with the data storage has been established successfully.');
        } else {
            console.error('Unable to connect to the data storage');
            console.log(result);
        }
        
    } catch(err) {
        console.error('Unable to connect to the data storage:', err);
    }

    try {
        // sync sequelize with database
        const result = await sequelize.sync({ force: false, alter: false });
        console.log('Models succefully synced with the database');
        // console.log(result);

        // start server
        const port = 3000;
        const server = app.listen(port);
        server.setTimeout(5000000);
        console.log("listening on port", port);

    } catch (err) {
        console.error('An occurred while syncing with the database:', err);
    }
    
}

start();
