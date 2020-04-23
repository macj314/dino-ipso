import {Dino} from '../src/dino.js'

describe('Initial Dino-Ipsum Calls', () => {
  let dino;
  let response;
  let url;
  let text;

  beforeEach(() => {
    dino = new Dino();
    url = 'http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=2&words=10'; 
  });

  test('Should get a successful request from dino-ipsum api (which is an array of 10 arrays)', async () => {
    response = await dino.dinoRequestTest();
    expect(response).toHaveLength(10);
  });

  test('Should get a request from dino ipsum with the user params of: 2 paragraphs, 10 words.', async () => { 
    response = await dino.dinoRequest(url);
    expect(response).toHaveLength(2); 
    expect(response[0]).toHaveLength(10);
  });  

  test('Should ', async () => {    
    response = await dino.dinoRequest(url);
    let responseL = response.length;
    for(let i = 0; i < responseL; i++){
      let paragraphArrayL = response[i].length;
      for(let j = 0; j < paragraphArrayL; j++){
        text += response[i][j];
      }
    }
    console.log(text);
    expect(response).toHaveLength(2);
  });
});