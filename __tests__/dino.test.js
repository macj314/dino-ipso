import {Dino} from '../src/dino.js'

describe('Initial Dino-Ipsum Calls', () => {
  let dino;
  let promise;
  let request;
  let url;

  beforeEach(() => {
    dino = new Dino();

  });

  test('Should get a successful request from dino-ipsum api', () => {
    (async () => {
      let result = await dino.dinoRequest();
      expect(result).toEqual(true);
    })();
  });
});
