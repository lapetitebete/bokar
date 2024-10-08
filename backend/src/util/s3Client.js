import { S3Client } from '@aws-sdk/client-s3';

const s3Client = new S3Client({ 
    region: "us-east-1",
    maxAttempts: 3,
    credentials: {
        accessKeyId: process.env.ACCESS_KEY_ID,
        secretAccessKey: process.env.SECRET_ACCESS_KEY,
    },
});

export { s3Client };