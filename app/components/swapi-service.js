import Person from "../models/Person.js";

let people = {}
let starships = {}

export default class SwapiService {

  getPeople(draw, drawError) {
    console.log("HELLO FROM SWAPISERVICE")
    fetch('https://swapi.co/api/people')
      .then(res => res.json())
      .then(res => {
        let myPeople = res.results.map(rawPerson => {
          let person = new Person(rawPerson)
          people[person.id] = person
          return person
        })
        draw(myPeople)
      })
      .catch(drawError)

    console.log("HERE I AM")
  }

  getPerson(url) {
    if (people[url]) {
      return
    }
    people[url] = {}
    fetch(url)
      .then(res => res.json())
      .then(res => {
        let person = new Person(res)
        people[url] = person
      })
      .catch(err => {
        delete people[url]
      })
  }

  get people() {
    return people
  }


  getStarships(draw, drawError, url) {
    url = url || 'https://swapi.co/api/starships'
    fetch(url)
      .then(res => res.json())
      .then(data => {
        data.results.map(starship => {
          starships[starship.url] = starship
          starship.pilots.forEach(url =>
            this.getPerson(url))
        })
        if (data.next) {
          this.getStarships(draw, drawError, data.next)
        }
        draw(starships)
      })
      .catch(drawError)

    console.log("HERE I AM")
  }

}