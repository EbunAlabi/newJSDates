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

 
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
  ); 