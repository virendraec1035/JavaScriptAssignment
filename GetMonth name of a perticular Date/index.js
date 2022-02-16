var month_name=function(date){
    month_list=["January","February","March","April","May","June","July","August","September","October", "November","December"];
    return month_list[date.getMonth()];
}
console.log(month_name(new Date("10/11/2009")));  //October
console.log(month_name(new Date("11/13/2014")));  //November