export default class Planet{
    constructor(reqData){
        this.name = reqData.name
        this.rotationPeriod = reqData.rotation_period
        this.orbitalPeriod = reqData.orbital_period
        this.diameter = reqData.diameter
        this.climate = reqData.climate
        this.gravity = reqData.gravity
        this.terrain = reqData.terrain
        this.surfaceWater = reqData.surface_water
        this.population = reqData.population
        this.residents = reqData.residents
        this.films = reqData.films
    
    }
}