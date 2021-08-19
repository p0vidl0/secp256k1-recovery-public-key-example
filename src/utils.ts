interface ISignature {
  r: Buffer;
  s: Buffer;
  v: Buffer;
}

export const decodeSignature = (signature: string): ISignature => {
  const buffer = Buffer.from(signature.slice(2), 'hex');
  return {
    r: buffer.slice(0, 32),
    s: buffer.slice(32, 64),
    v: buffer.slice(64, buffer.length),
  };
};

export const getRecoveryParam = ({ v }: ISignature) => {
  const value = v.readUInt8();

  if (value < 2) return value;

  return 1 - (value % 2);
};
