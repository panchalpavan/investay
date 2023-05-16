// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import S3 from "aws-sdk/clients/s3";
import { randomUUID } from "crypto";

const s3 = new S3({
    apiVersion: '2006-03-01',
    accessKeyId: process.env.AWS_ACCESSKEY,
    secretAccessKey: process.env.AWS_SECRETKEY,
    region: process.env.AWS_REGION,
    signatureVersion: 'v4'
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const ex = (req.query.fileType as string).split("/")[1];

  const Key = `${randomUUID()}.${ex}`;

  const s3Params = {
    Bucket: process.env.AWS_BUCKETNAME,
    Key,
    Expires: 60,
    ContentType: ex === 'pdf' ? `application/${ex}` : `image/${ex}`,
  };

  const uploadUrl = await s3.getSignedUrl("putObject", s3Params);

  res.status(200).json({
    uploadUrl,
    key: Key,
  });
}