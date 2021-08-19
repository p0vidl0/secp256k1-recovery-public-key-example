import { ec as Elliptic } from 'elliptic';
import { decodeSignature, getRecoveryParam } from './utils';

const ec = new Elliptic('secp256k1');

export const recoverPublicKey = (digest: string, signatureString: string): string => {
  const data = Buffer.from(digest.slice(2), 'hex');
  const signature = decodeSignature(signatureString);
  const recoveryParam = getRecoveryParam(signature);

  console.log('recoveryParam', recoveryParam);

  const result = ec.recoverPubKey(data, signature, recoveryParam);

  return `0x${result.encode('hex', false).slice(2)}`;
};
