alert("hello");

function isEmpty(obj){
    // check for a key in object 
    for (let key in obj){
    return false;
    }
    return true;
}

let schedule = {
    wake: "8:30"
};
alert (isEmpty(schedule));


//task to sum salaries
let salaries ={
    john: 100,
    ann: 160,
    pete: 130
};

//function to some values in obj
let sum = 0;

for (let key in salaries){
    sum += salaries[key];
}
alert(sum);

// function to multiply numeric objects
let menu = {
    width: 200,
    height:300,
    title: "My menu"
};
function multipyNumeric (obj){
    for (let key in obj){
        if (typeof obj[key] === 'number')   {
            obj[key] *= 2;
        }    c

    }
    console.log(menu);  
    alert(menu);
};
multipyNumeric(menu);


//alert(multipyNumeric);






let ebz = {
    keys: "values"
    
    
    };
    
    ebz.name = "ebun";
    ebz.color = "blue";
    console.log(ebz);
    delete ebz.name;
    console.log(ebz);
    ebz.name = "pete";
    console.log(ebz);
    