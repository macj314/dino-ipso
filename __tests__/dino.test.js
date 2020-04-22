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
      expect(getElements(result)).toEqual(true);
    })();
    function getElements(result){
      if (result){
        console.log("We got the Dino Ipsum!")
        return true;
      } else {
        console.log("There was an error getting your response")
        return false;
      }
    }
  });
});