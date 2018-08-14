export default class Person {
  constructor(reqData) {
    this.name = reqData.name
    this.height = reqData.height
    this.mass = reqData.mass
    this.hairColor = reqData.hair_color
    this.skinColor = reqData.skin_color
    this.eyeColor = reqData.eye_color
    this.creationDate = reqData.birth_year
    this.gender = reqData.gender
    this.homeworld = reqData.homeworld
    this.films = reqData.films
    this.species = reqData.species
    this.starships = reqData.starships
    this.url = reqData.url
  }
   // get filmsData() {
   // }
 } 