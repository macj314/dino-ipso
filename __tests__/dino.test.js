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
      request = await dino.dinoRequestTest();
      expect(request).toEqual(true);
    })();
  });

  test('Should get a request from dino ipsum with the user params of: 2 paragraphs, 10 words.', () => {
    url = 'http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=2&words=10';
    (async () => {
      request = await dino.dinoRequest(url);
      expect(request).toEqual(true);
    })();
  });
});