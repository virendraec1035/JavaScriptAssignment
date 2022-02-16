var weekend= function(date1){
 var dt= new Date(date1);

 if(dt.getDay()==6 || dt.getDay()==0)
 {
     return "Weekend";
   }   
}

console.log(weekend('Nov 15,2014'));
console.log(weekend('nov 16, 2014'));
console.log(weekend('Nov 17, 2014'));
console.log(weekend('Nov 20,2021'));