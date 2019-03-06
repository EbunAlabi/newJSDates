/* Stacks!*/
//using arrays as stacks
//functions: push, pop, peek, length
var letters = []; //this is our stack
var word = "racecar"
var rword = "";

//put letters of word into stack
for (var i=0; i<word.length; i++){
    letters.push(word[i]);
}
//pop off the stack in reverse order
for (var i=0; i<word.length; i++){
    rword += letters.pop();
}
if(rword===word){
    console.log(word + " is a palindrome.");
}
else{
    console.log(word + " is not a palindrome")
}


//using JS to create stacks
var Stack = function(){
    this.count = 0;
    this.storage = {};

    //Adds a value onto the end of the stack
    this.push = function(value){
        this.storage[this.count] = value;
        this.count++;
    }

    //Removes and returns the value at the end of the stack
    this.pop = function(){
        if (this.count === 0){
        return undefined;
    }

    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
}
this.size = function(){
    return this.count;
}  
//returns the value at the end of the stack
this.peek = function(value){
    return this.storage[this.count - 1];
}

}

var myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());


/*Sets*/
function mySet(){
    //the var collection will hold the set
    var collection = [];
    //this method will check for the presence of an element and return true or false
    this.has = function (element){
        return (collection.indexOf(element) !== -1);
    };
    //this method will return all the values in the set
    this.values = function(){
        return collection;
    };
    //this methd will add an element to the set
    this.add = function(element){
        if(!this.has(element)){
            collection.push(element);
            return true;
        }
        return false;
    };
    //this method will remove an element from a set
    this.remove = function (element){
        if (this.has(element)){
            index = collection.indexOf(element);
            collection.splice(index,1);
            return true;
        }
        return false;
    };
    //this methid will return the size o the collection
    this.size =  function(){
return collection.length;
    };
    //this method will return the union of two sets
    this.union = function(otherSet){
        
    }
} 