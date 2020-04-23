const fetch = require("node-fetch");
export class Dino{
  constructor(paragraphs){
    this.paragraphs = [paragraphs]
  }

 
  async dinoRequestTest() {
    try {
      // console.log("1");
      let response = await fetch('http://dinoipsum.herokuapp.com/api/?format=json');
      // console.log(response);
      if (response.ok && response.status == 200) {
        // console.log(response);
        response = await response.json();
        // console.log("3");
      } else {
        // console.log("4");
        response = false;
      }
      // console.log("5");
      return response;
    } catch(err) {
      // console.log(err.name);
      return false;
    }
  }

  // async dinoRequest() {
  //   try {
  //     let response = await fetch('http://dinoipsum.herokuapp.com/api');
  //     let jsonifiedResponse;
  //     if (response.ok && response.status == 200) {        
  //       jsonifiedResponse = await response.json();
  //     } else {
  //       jsonifiedResponse = false;
  //     }
  //     return jsonifiedResponse
  //   } catch(error) {
  //     return false;
  //   }
  // }
}