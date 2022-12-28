import { NextApiRequest, NextApiResponse } from "next";

import { encryptText } from "lib/utils/encryptText";

const encrpyt = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { text },
  } = req;

  const encryptedText = encryptText(text as string);

  res.status(200);
  res.json(encryptedText);
};

export default encrpyt;
