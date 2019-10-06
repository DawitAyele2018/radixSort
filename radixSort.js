function getDigit(number, place){
   return  Math.floor(Math.abs(number/Math.pow(10,place))) % 10;

};

console.log(getDigit(234,2))


function getNumberOfDigit(num){
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num)))+1;
}
function mostDigit(arr){
    var maxDigit = 0
    for(let x of arr){
        maxDigit = Math.max(maxDigit, getNumberOfDigit(x));
    }
    return maxDigit;
}
console.log(getNumberOfDigit(1234));
console.log(mostDigit([12,1,123,1234,123456,12,12345678]));

/* 
    # create a function that accepts an array
    # Calculate the largest Digit (x)
    # loop through each array X times
    # for each loop
         # Create a bucket (0-9)
         # place each number to the corrosponding bucket based on its kth digit
         #replace the existing array with the nubers in the bucket starting from 0 to 9th bucket;
    # return the arrray


*/

function radixSort(arr){
    let max = mostDigit(arr);
    for(let i = 0; i< max; i++){
        let bucket = Array.from({length:10},()=>[]);
        for(let k = 0; k<arr.length; k++){
            bucket[getDigit(arr[k],i)].push(arr[k]);
        }
        arr = [].concat(...bucket);
    }
    return arr;
}

console.log(radixSort([12,1,123,1234,123456,12,12345678]))