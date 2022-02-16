function merge_array(Array1, Array2)
{
    let result_Array=[];
    let arr=Array1.concat(Array2);
    let ln=arr.length;
    var Associate={};

    while(ln--){
        var item=arr[ln];

        if(!Associate[item])
        {
            result_Array.unshift(item);
            Associate[item]=true;
        }
    }
    return result_Array;
}
var Array1=[2,3,4,5,6];
var Array2=[3,7,8,4,9];
console.log(merge_array(Array1,Array2));


//Output:[2, 5, 6, 3, 7, 8, 4, 9]