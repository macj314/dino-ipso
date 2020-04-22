const fetch = require("node-fetch");
export class Dino{
  constructor(paragraphs){
    this.paragraphs = [paragraphs]
  }

  async dinoRequestTest() {
    try {
      let response = await fetch('http://dinoipsum.herokuapp.com/api/?format=json');
      if (response.ok && response.status == 200) {
        response = true;
      } else {
        response = false;
      }
      return response;
    } catch(error) {
      return false;
    }
  }

  async dinoRequest(url) {
    try {
      let response = await fetch(url);
      if (response.ok && response.status == 200) {
        await console.log(response);
        response = true;
      } else {
        response = false;
      }
      return response;
    } catch(error) {
      return false;
    }
  }
}