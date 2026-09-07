import { S3Client, PutObjectCommand, GetObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
require('dotenv').config();

const R2_ACCOUNT_ID = process.env.R2_ACCOUNT_ID as string;
const R2_ACCESS_KEY_ID = process.env.R2_ACCESS_KEY_ID as string;
const R2_SECRET_ACCESS_KEY = process.env.R2_SECRET_ACCESS_KEY as string;
export const R2_BUCKET_NAME = process.env.R2_BUCKET_NAME as string;

const s3 = new S3Client({
    region: "auto",
    endpoint: `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: {
        accessKeyId: R2_ACCESS_KEY_ID,
        secretAccessKey: R2_SECRET_ACCESS_KEY,
    },
});

// URL prefirmada para SUBIR una foto directo desde la app (PUT), sin pasar por este servidor.
exports.getUploadUrl = async (objectKey: string, contentType: string) => {
    const command = new PutObjectCommand({
        Bucket: R2_BUCKET_NAME,
        Key: objectKey,
        ContentType: contentType,
    });
    return await getSignedUrl(s3, command, { expiresIn: 3600 });
};

// URL prefirmada para VER una foto (bucket privado, no hay acceso público directo).
exports.getViewUrl = async (objectKey: string) => {
    const command = new GetObjectCommand({
        Bucket: R2_BUCKET_NAME,
        Key: objectKey,
    });
    return await getSignedUrl(s3, command, { expiresIn: 3600 });
};

exports.deleteObject = async (objectKey: string) => {
    const command = new DeleteObjectCommand({
        Bucket: R2_BUCKET_NAME,
        Key: objectKey,
    });
    return await s3.send(command);
};
