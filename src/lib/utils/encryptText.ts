import CryptoJS from 'crypto-js';

export const encryptText = (unencryptedText: string) =>
  CryptoJS.AES.encrypt(unencryptedText, process.env.SECRET_PASSPHRASE ?? '')
    .toString()
    .replace(/\+/g, 'xMl3Jk')
    .replace(/\//g, 'Por21Ld')
    .replace(/=/g, 'Ml32');
