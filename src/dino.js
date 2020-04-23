const fetch = require("node-fetch");
export class Dino{
  constructor(paragraphs){
    this.paragraphs = [paragraphs]
  }

 
  async dinoRequestTest() {
    try {
      let response = await fetch('http://dinoipsum.herokuapp.com/api/?format=json');
      console.log(response);
      if (response.ok && response.status == 200) {
        
        response = true;
      } else {
        response = false;
      }
      return response;
    } catch(err) {
      console.log(err.name);
      return false;
    }
  }

  async dinoRequest() {
    try {
      let response = await fetch('http://dinoipsum.herokuapp.com/api');
      let jsonifiedResponse;
      if (response.ok && response.status == 200) {        
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
      }
      return jsonifiedResponse
    } catch(error) {
      return false;
    }
  }

  async getWeatherByCity(city) {
    try {
      let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`);
      let jsonifiedResponse;
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
      }
      return jsonifiedResponse;
    } catch {
      return false;
    }
  }
}