/*function checkPrime(start, end){


for (start = 0; start < end; start++ ){

    let modus = start/start
    let modusTwo = start%(start++)

    
    if (modus == 1 && modusTwo > 0){
        alert (`${start} is a prime number`);
    }else{
        alert (`${start} is not a prime number`);
    }

}


}

checkPrime(0,10);
*/

let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // for each i...

  for (let j = 2; j < i; j++) { // look for a divisor..
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }

  alert( i ); // a prime
}

function checkPrime (i, n){

    nextPrime:
for (let i = 2; i <= n; i++) { // for each i...

  for (let j = 2; j < i; j++) { // look for a divisor..
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }

  alert( i ); // a prime
}
}

checkPrime(3,10);

