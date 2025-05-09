uppg10();

function uppg10(){
    const numbers = [5, 12, 7, 10, 20, 9, 11];
  
    // skapa tre arrayer - bigEven, smallOdd, other
    // loopa igenom numbers och placera talen i respektive array
    // bigEven ska innehålla tal större än 10 och jämnt delbara med 2
    // smallOdd ska innehålla tal mindre än 10 och udda
    // other ska innehålla alla andra tal
    // returnera ett objekt med de tre arrayerna
let bigEven = [];
let smallOdd =[];
let other =[];

sort(numbers, bigEven, smallOdd, other)

console.log(sortList);

  }

function sort(numbers, bigEven, smallOdd, other){
    for (i = 0; i < numbers.length; i++)
    {
        if (number[i] > 10 && number % [i] === 0){
            bigEven.add(number[i])
        }
        else if (number[i] < 10 && !number % [i] === 0)
        {
            smallOdd.add(number[i])
        }
        else {
            other.add(number[i])
        }
    }
    let sortList = {
        bigEven : [numbers],
        smallOdd : [numbers],
        other : [numbers]
    }
    return sortList;
}
  
  module.exports = { uppg10 };
  
