import {Dino} from '../src/dino'

describe('Dino-Ipsum Calls', () => {
  let dino;

  beforeEach(() => {
    dino = new Dino();
  });

  test('Should receive a paragraph from dino-ipsum API', () => {});
  dino.requestTest();
});
