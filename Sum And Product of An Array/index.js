var array=[2,3,4,5,6,7];
var sum=0;
var product=1;
for(var i=0; i<array.length;i++){
    sum+=array[i];
    product*=array[i];
}
console.log(`Sum of Array is :${sum}`);  
console.log(`Product of array is :${product}`);    


// Output: sum of Array:27
// Output: product of Array :5040