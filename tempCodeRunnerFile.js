let age = prompt('enter your age', '');
function checkAge (age){
    if (age > 18) {
        return true;
      } 
      else {
        // ...
        return confirm('Did parents allow you?');
      }
}

checkAge();