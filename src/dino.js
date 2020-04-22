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
        result = true;
      } else {
        result = false;
      }
      return result;
    } catch {
      return false;
    }
  }
}