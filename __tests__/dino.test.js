import {Dino} from '../src/dino'

describe('Initial Dino-Ipsum Calls', () => {
  let dino;
  // let promise;
  let request;
  // let url;

  beforeEach(() => {
    dino = new Dino();

  });

  test('Should receive a paragraph from dino-ipsum API', () => {
    let result;
    request = new XMLHttpRequest();
    request.open('GET', 'http://dinoipsum.herokuapp.com/api/?format=json&words=15&paragraphs=1');
    request.onload = function(){
      if (this.status === 200){
        result = "Request Successful";
      } else {
        result = "Request Failed";
      }     
    }
    expect(result).toEqual("Request Successful");
  });

});
