
import fetch from 'node-fetch'
import { GetObjectCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { s3 } from '../util/s3.js';
import { s3Client } from '../util/s3Client.js'
import { __dirname } from '../util/dirname.js';

// const getImage = async (bucket, key) => {
//   const params = {
//     Bucket: bucket,
//     Key: key
//   };

//   let img = null;
//   try {
//       data = await s3.getObject(params).promise();

//   } catch(err) {
//       console.log('Error', err);
//   }

//   if (!data.Body){
//     img = data.Body;
//   } else {
//     throw new Error('an error occured after retrieving the image!');
//   }

//   // const filepath = path.join(__dirname, 'downloads/image.jpg');
//   // await fs.writeFileSync(filepath, img);
//   return img;
  
  
// };


const getImage = async (bucket, key) => {
    const params = {
      Bucket: bucket,
      Key: key,
    };

    let response = null;
    try {
        // data = await s3Client.send(new GetObjectCommand(params));

        // Create the command.
        const command = new GetObjectCommand(params);

        // Create the presigned URL.
        const signedUrl = await getSignedUrl(s3Client, command, {
            expiresIn: 3600,
        });
        console.log(
            `\nGetting "${params.Key}" using signedUrl`
        );
        console.log(signedUrl);
        response = await fetch(signedUrl);
        // console.log(response);

    } catch(err) {
        console.log('Error', err);
    }
    return response.url;
};

const putImage = async () => {
    const params = {
        Bucket: process.env.BUCKET_NAME,
        Key: 'hello_world.txt',
        Body: 'Hello World!'
    };

    try {
        const results = await s3Client.send(new PutObjectCommand(params));
        console.log("Successfully uploaded data to " + process.env.BUCKET_NAME + "/" + 'hello_world.txt');
      } catch (err) {
        console.log("Error", err);
      }

};

export { getImage, putImage };