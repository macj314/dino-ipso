export class Dino{
  constructor(paragraphs){
    this.paragraphs = paragraphs
  }
  
  async dinoRequest() {
    console.log("dinoRequest() started")
    try {
      console.log("Start of try block")
      let result;
      let response = await fetch('http://dinoipsum.herokuapp.com/api/?format=json');
      if (response.ok && response.status == 200) {
        console.log("response.ok")
        result = true;
      } else {
        console.log("else")
        result = false;
      }
      return result;
    } catch {
      console.log("Catch")
      return false;
    }
  }
}