import {Dino} from '../src/dino.js'

describe('Initial Dino-Ipsum Calls', () => {
  let dino;
  let promise;
  let request;
  let url;

  beforeEach(() => {

  });

  test('Should get a successful request from dino-ipsum api', () => {
    (async () => {
      dino = new Dino();
      let result = await dino.dinoRequest();
      expect(result).toEqual(true);
    })();
  });
});