//date manipulation
var now = new Date(2019,2,25);
var future = new Date(2019,3,28);
var daysOfYear =[];
var weekendCount = 0;
//var noDays = dateDiff("day",now,future);
var end = +future;
var start = +now;
var diff = end - start;
//console.log(diff);
var noDays = (diff/(60*60*24*1000))%365;
console.log(noDays);
for  (var d =now; d<= future; d.setDate(d.getDate()+1)){
    daysOfYear.push(new Date(d));
   console.log(now.getDay());
    if (now.getDay()=== 0 || now.getDay()===6){
        weekendCount = weekendCount+1;
    }
   
}
    var pubHol = new Date (2019,3,28)
    console.log(daysOfYear);
for (var i = 0 ; i<=daysOfYear.length; i++){
    if(pubHol==daysOfYear[i]){
        console.log ("This is a public holiday")
        var newResumption =  new Date (future.setDate(future.getDate()+1));
        //var resDay= (newResumption/(60*60*24*1000))%365;
        console.log("your new resumption date is " + newResumption);
    
    }else{
    console.log ("This is a not public holiday")}
}

if (future.getDay()=== 0 ){
    weekendCount = weekendCount+1;
    var newResumption =  new Date (future.setDate(future.getDate()+1));
    //var resDay= (newResumption/(60*60*24*1000))%365;
    console.log("your new resumption date is " + newResumption);

}
if ( future.getDay()===6){
    weekendCount = weekendCount+2;
    var newResumption =  new Date (future.setDate(future.getDate()+2));
    //var resDay= (newResumption/(60*60*24*1000))%365;
    console.log("your new resumption date is " + resDay);
}

console.log(weekendCount);



/** 
 * 
 * 
 * 
 * var weekendCount = 0;
var a = 9;
var b = 0;
for  (var d =now; d<= future; d.setDate(d.getDate()+1)){
    console.log(now.getDay());
    if (b=== 0 || a===6){
        weekendCount = weekendCount+1;
    }
    return weekendCount;
}
console.log(weekendCount);function calculateWeekendDays(now, future){
    var weekendCount = 0;
    while(now<future){
        now.setDate(now.getDate()+1);
        if (now.getDay()=== 0 || now.getDay()===6){
            ++weekendCount;
        }
    }
    
    return weekendCount;
    console.log(weekendCount);
}

calculateWeekendDays();
*/
