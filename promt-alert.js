let age = prompt("How old are you?",  );
alert (`your are ${age} years old`);

if (age < 100){
    alert(`you are younger`);
}
else{
    alert(`you are older`);
}
//ternary  conditional statement
let accessAllowed = (age > 18) ? alert(true ): alert(false);
//multiple ?
let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

alert( message );
if ("0") {
    alert( 'Hello' );
  }

let ques = prompt (`What is the "official" name of JS`, '');
if (ques =="ECMAScript"){
    alert( 'Right!' );
}else{
    alert( `Didn't know? ECMAScript!` );
}


let access = prompt(`Kindly enter your login username`, '');
let mess = (access =="Admin" )? prompt( `Enter password`, ''):
alert (`Access granted`);
(access =="" )? alert(`Cancelled`):
alert(`I dont Know you`);
