import { recoverPublicKey } from './main';

describe('Main test container', () => {
  test('Public key recovery with odd V', () => {
    const digest = '0x55e85b4de09377626481f421928ac4da09e7e6873ed315b6fef1abbfb56f4890';
    const signature = '0xee22da2f7098a87094194af43dde9bd021f6b4c2526c54d213c73efdab38c7f866b96ee8851dc4716e1273b43ded112ba300a5ff8b2105a242ebd94cd5b15d3f1b';
    const expected = '0xadb298d4ade1580a7a36799a83d503c7235f3b2817e714b44da98edc44e1523b044263efff7a5a2ba7576be42ed70ec753df645443dc7e1ff99a46147e1f1424';

    expect(recoverPublicKey(digest, signature)).toEqual(expected);
  });
  test('Public key recovery with even V', () => {
    const digest = '0x8bb7db4cb096cff1d5fbc6ae395e701008730a9a1f616c437538e770b2f3b1fc';
    const signature = '0xaf3410c9528fc4817fda513c70018df01087ab8c9f99baf4d2006d5b68fec1bf4b5d120bd1a2d70523aa696d422100fd089a1c01e11642cdb70c9d821bae52e61c';
    const expected = '0xadb298d4ade1580a7a36799a83d503c7235f3b2817e714b44da98edc44e1523b044263efff7a5a2ba7576be42ed70ec753df645443dc7e1ff99a46147e1f1424';

    expect(recoverPublicKey(digest, signature)).toEqual(expected);
  });
});
