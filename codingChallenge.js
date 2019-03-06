alert("hello");

function reverseString (str){
//convert string to array using dot split
var strArr = str.split("");
var reverseStrArray = strArr.reverse();
//convert array to a string using dot join method
var reversedString = reverseStrArray.join("");

return reversedString;
}

console.log(reverseString ("hello"));

//a horter way to write this is by chaining methods

function reversedShortStrArr(str){
    return str.split("").reverse().join("");
}
console.log(reversedShortStrArr("hello you"));

//writing from scratch
function original(str){
    var final = "";
    for (var i=str.length - 1; i >= 0; i--){
        final += str [i];
    }
    return final;
}
console.log(original("hello")); 



// challenge 2
//factorialize  
function factorialize(num){
    var result = 1;
    for (var i=1; i<=num; i++){
        result *= i;
        }
    console.log(result);
    return result;
    
}
factorialize(5);

//challenge 3
//function will work in browser
 function palindrome (str){
     //regular expression
     var reg =  /[\W_]/g;
     var smallStr = str.toLowerCase().replace(reg, "");
 var reversed = str.split("").reversed().join("");
    if (reversed === str){
        return true;
    }
    return false;
 }
 palindrome("eye");


 //challenge 4
 //longest word in string

 function findLongestWord(str){
     //convert into array of words
        var words = str.split();
        var longest = "";
        for (var word of words){
            console.log(word);
            if(word.length>longest.length)
            longest=word;
        }
        //return longest.length;


        //a shorted method
        return str.split("").sort(function(a,b){
            return b.length - a.length
        });
 }
findLongestWord("The quick fox jumped over the lazy dog");


//challenge 5
//titlecase
function titleCase(str){
    var words = str.split();
}
titleCase("I'm a little tea pot");

//challenge 6
/** 
function largestOfFour(arr){
    var maxes =[];
    //loop over parsed array
    for(let i =0; i<arr.length;i++){
        //console.log(arr[i]);
        var tempMax = arr[i][0];
        for (let j =0; j<arr[i].length;j++){
            var currentElement = arr[i][j];
            if (currentElement >= tempMax){
                tempMax = currentElement;
            }
             //console.log(arr[i][j]);
        }
        maxes.push(tempMax);
    }
    console.log(maxes);
    return maxes;
    
}
*/

function findMax(arr){
    var max = arr[0];
    for (let i =0; i<arr.length;i++){
        if (arr[i] > max){
            max = arr[i];        }
    }
    return max;
}

function largestOfFour(arr){
    var maxes = [];
    for(let i =0; i<arr.length;i++){
        //console.log(arr[i]);
         var innerMax = findMax (arr[i]);
         maxes.push(innerMax);
    }
    console.log(maxes);
        return maxes;
}





largestOfFour([[4,5,-1,3],[13,35,37,39],[1000,357,1]]);























