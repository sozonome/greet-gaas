import { NextApiRequest, NextApiResponse } from "next";
import CryptoJS from "crypto-js";

const encrpyt = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { text },
  } = req;

  const encryptedText = CryptoJS.AES.encrypt(
    text as string,
    process.env.SECRET_PASSPHRASE
  )
    .toString()
    .replace(/\+/g, "xMl3Jk")
    .replace(/\//g, "Por21Ld")
    .replace(/\=/g, "Ml32");

  res.status(200);
  res.json(encryptedText);
};

export default encrpyt;
