import {Dino} from '../src/dino.js'

describe('Initial Dino-Ipsum Calls', () => {
  let dino;
  let promise;
  let response;
  let url;
  let answer;

  beforeEach(() => {
    dino = new Dino();
  });

  test('Should get a successful request from dino-ipsum api', () => {
    (async () => {
      response = await dino.dinoRequestTest();
      
      expect(response).toEqual(true);
    })();
  });

  // test('Should get a request from dino ipsum with the user params of: 2 paragraphs, 10 words.', async() => {
  //   url = 'http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=2&words=10';   
  //   (async () => {
  //     response = await dino.dinoRequest();
  //     expect(response).toEqual(true);
  //   })();
  //   function getElements(response) {
  //     if (response) {
  //       answer = true;
  //     } else {
  //       answer = false;
  //     }
  //     return answer;
  //   }
  // });

  
});