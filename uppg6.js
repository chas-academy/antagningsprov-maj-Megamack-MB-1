uppg6();

function uppg6(){

    // Skapa en array med namn som du döper till names
    // Loopa igenom arrayen och skriv ut alla namn i konsolen
  let listofNames = [
        {name: "Adam"},
        {name: "Bertil"}, 
        {name: "Carl"}, 
        {name: "David"},
        {name: "Erik"}
    ]
    
    for (person of listofNames){
        console.log(person.name)
    }

}

module.exports = { uppg6 };
