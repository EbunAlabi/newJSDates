let i = 0; // while
while (i < 3) { // shows 0, then 1, then 2
  alert( i );
  i++;
}
let u = 0; //do loop
do {
  alert( u );
  u++;
} while (u < 3);

for (let v = 0; v < 3; v++) { // shows 0, then 1, then 2
    alert(v);
  }
  //nested for loop
  outer : for (let x = 0; x < 3; x++) {

    for (let y = 0; y < 3; y++) {
  
      let input = prompt(`Value at coords (${x},${y})`, '');
  
      // what if I want to exit from here to Done (below)?
        break outer;
    }
  }
  
  alert('Done!');