import { NextApiRequest, NextApiResponse } from "next";
import CryptoJS from "crypto-js";

const decrypt = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { text },
  } = req;

  const decryptedText = CryptoJS.AES.decrypt(
    unescape(text as string)
      .replace("xMl3Jk", "+")
      .replace("Por21Ld", "/")
      .replace("Ml32", "="),
    process.env.SECRET_PASSPHRASE
  ).toString(CryptoJS.enc.Utf8);

  res.status(200);
  res.json(decryptedText);
};

export default decrypt;
