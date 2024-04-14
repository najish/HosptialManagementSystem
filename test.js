const model = {name: "sujeet kuarm", age: 25}
const person = {}
function updateObject(person, model) {
    person.name = model.name
    person.age = model.age
}
console.log(person)

updateObject(person,model)

console.log(person)