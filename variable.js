//1. Declare variables called 'country', 'continent', and 'population' and assign their values according to your own country (population in millions)
//2. Log their values to the console

const country = 'Armenia'
const continent = 'Europe'
let population = 2963000

//console.log(country, continent, population)


let capitalName = 'Yerevan'
let percentRate = .4

function percentOfPeople (population,percentRate){
    return (population*percentRate)
}

console.log(percentOfPeople(population,percentRate), 'Or 40 percent of the population of Armenia in 2021 lives inside the capital') 



