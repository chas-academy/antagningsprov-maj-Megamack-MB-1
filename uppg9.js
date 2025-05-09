uppg9();

function uppg9 (){
    // skapa en funktion som heter sort och tar in en array av siffror som argument
    // i funktionen du loopa igenom arrayen och kolla med en if-sats om  talet är jämt eller udda
    // i if-sattsen skriv ut i konsolen resultatet
    // resultatet ska loggas i formatet: talet och sen ordet "jämt" eller "udda"

    // anropa funktionen och skicka med en array som argument
    
let listofNumbers = [1, 2, 3, 4, 5]
    
sort(listofNumbers);
  
}

function sort(listofNumbers){
for (i = 0; i < listofNumbers.length; i++) {
    if (!listofNumbers % [i] === 0) {
        console.log(listofNumbers[i]+" udda");
    }
    else {
        console.log(listofNumbers[i]+" jämnt");
    }
}
 
}

module.exports = { uppg9 };
