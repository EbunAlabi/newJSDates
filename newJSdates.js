//date manipulation
var now = new Date(2019,2,25);
console.log(now);
var future = new Date(2019,3,28);
var daysOfYear =[];
var weekendCount = 0;
var end = +future;
var start = +now;
var diff = end - start;
//console.log(diff);
var noDays = (diff/(60*60*24*1000))%365;
//console.log(noDays);

for  (var d =now; d<= future; d.setDate(d.getDate()+1)){
    daysOfYear.push(new Date(d));
   //console.log(now.getDay());
    if (now.getDay()=== 0 || now.getDay()===6){
        weekendCount = weekendCount+1;
    }

}
console.log(daysOfYear);

console.log("ths is the weekend count; ", weekendCount);
//add no of weekends to extend holiday
//future = new Date (future.setDate(future.getDate()+weekendCount));
console.log(future);
if (future.getDay()=== 0 ){
    weekendCount = weekendCount+1;
    var newResumption =  new Date (future.setDate(future.getDate()+1+weekendCount));
    //var resDay= (newResumption/(60*60*24*1000))%365;
    console.log("your new resumption date is " + newResumption);

}
if ( future.getDay()===6){
    weekendCount = weekendCount+2;
    var newResumption =  new Date (future.setDate(future.getDate()+2+weekendCount));
    //var resDay= (newResumption/(60*60*24*1000))%365;
    console.log("your new resumption date is " + newResumption);
}

console.log(weekendCount);
