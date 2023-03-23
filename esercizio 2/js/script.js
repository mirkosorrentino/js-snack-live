/**
 * Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.
Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.
 */

const peopleArray = [
    {
        name: "Mirko",
        lastName: "Sorrentino",
        age: 17,
    },
    {
        name: "Anna",
        lastName: "Rossiello",
        age: 47,
    },
    {
        name: "Franco",
        lastName: "Sorrentino",
        age: 51,
    }
]

const personeAbilitate = peopleArray.map(element => {
    if(element.age >= 18) {
        return `${element.name} ${element.lastName} è abilitato alla guida`
    } else {
        return `${element.name} ${element.lastName} non è abilitato alla guida`
    }
})

console.log(personeAbilitate);