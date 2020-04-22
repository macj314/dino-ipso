const fetch = require("node-fetch");
export class Dino{
  constructor(paragraphs){
    this.paragraphs = paragraphs
  }

  async dinoRequest() {
    console.log("dinoRequest() started")
    try {
      console.log("Start of try block")
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
}