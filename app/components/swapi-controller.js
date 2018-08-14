import SwapiService from "./swapi-service.js";
 const swapiService = new SwapiService
let app = document.getElementById('app')
 function draw(data) {
  console.log(data)
  app.innerHTML = `
  <div id="error"></div>
  <button onclick="app.controllers.swapi.getStarships()">
  Get Starships
  </button>
  <div id="starships"></div>`
}
 function drawStarships(data) {
  let starshipsElem = document.getElementById('starships')
  let template = ''
  data.results.forEach(starship => {
    template += `<div>
    ${starship.name}
    </div>`
  })
   starshipsElem.innerHTML = template
 }
 function drawError(error) {
  console.log(error)
  document.getElementById('error').innerHTML = error.message
}
 export default class SwapiController {
  constructor() {
    draw()
  }
   getStarships() {
    console.log("HELLO FROM CONTROLLER")
    swapiService.getStarships("{}", drawError)
  }
 } 