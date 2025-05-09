uppg8()

function uppg8(){

// skapa en array med fem person obkjet
// varje person objekt ska ha två properties, name och age

// skapa en fuktion som tar in en array som argument
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen

// anropa funktionen och skicka med arrayen som argument
const listofPersons = [
    {name: "Adam", age: 20},
    {name: "Bertil", age: 25},
    {name: "Carl", age: 25},
    {name: "David", age: 35},
    {name: "Erik", age: 35}
]

sortPerson(listofPersons);

}

function sortPerson(listofPersons){
for (person of listofPersons) {
    if (person.age > 30) {
        console.log(person.name);
    }
}

}

module.exports = { uppg8 };
