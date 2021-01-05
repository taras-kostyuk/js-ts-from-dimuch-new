export type ManyType = {
    name: string
    age: number
}
const people: Array<ManyType> = [
    {name: "Andrew Ivanov", age: 33},
    {name: "Alexander Petrov", age: 24},
    {name: "Dmitry Sidorov", age: 18}
]
const dimychTransformator = (man: ManyType) => ({
    stack: ["css,html", "js", "tdd", "react"],
    firstName: man.name.split(" ")[0],
    lastName: man.name.split(" ")[1]
})
const devs2 = [
    dimychTransformator(people[0]),
    dimychTransformator(people[1]),
    dimychTransformator(people[2])
]
const devs4 = people.map(dimychTransformator)
const devs5 = people.map(man => ({
    stack: ["css,html", "js", "tdd", "react"],
    firstName: man.name.split(" ")[0],
    lastName: man.name.split(" ")[1]
}))

const messages = people.map( man => `Hello ${man.name.split(" ") [0]}. Welcome to It-Incubator`)
 export const createGratingMessage = (people:Array<ManyType>)  =>  {
    return people.map( man => `Hello ${man.name.split(" ") [0]}. Welcome to It-Incubator`)
 }