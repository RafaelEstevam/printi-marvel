import md5 from "md5";

interface Md5GenerationProps {
  privateKey: string;
  publicKey: string;
}

export const md5Generate = ({ privateKey, publicKey }: Md5GenerationProps) => {
  const hash: string = md5(`1${privateKey}${publicKey}`);
  return hash;
};
