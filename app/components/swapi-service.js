export default class SwapiService {

  getStarships(draw, drawError) {
   console.log("HELLO FROM SWAPISERVICE")
   fetch('https://swapi.co/api/starships')
     .then(res => res.json())
     .then(draw)
     .catch(drawError)
    console.log("HERE I AM")
 }

getPeople(draw, drawError) {
  fetch('https://swapi.co/api/people')
  .then(res => res.json())
  .then(draw)
  .catch(drawError)
}

getPlanets(draw, drawError) {
  fetch('https://swapi.co/api/planets')
  .then(res => res.json())
  .then(draw)
  .catch(drawError)
}
} 

