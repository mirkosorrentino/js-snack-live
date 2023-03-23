/**
Crea un array composto da 5 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
 
Infine stampa separatamente i 3 array.
*/

const carArray = [
    {
        brand: "Ferrari",
        model: "Roma",
        energy: "Benzina",
    }, 
    {
        brand: "Mercedes",
        model: "Slk",
        energy: "Diesel",
    },
    {
        brand: "Lamborghini",
        model: "Urus",
        energy: "Benzina",
    },
    {
        brand: "Fiat",
        model: "Panda",
        energy: "GPL",
    },
    {
        brand: "Porsche",
        model: "Panamera",
        energy: "Elettrico",
    }
]

const benzinaCars = carArray.filter(autoB => autoB.energy ==="Benzina");
console.log(benzinaCars);

const dieselCars = carArray.filter(autoD => autoD.energy ==="Diesel");
console.log(dieselCars);