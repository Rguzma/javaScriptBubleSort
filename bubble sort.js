// let arr = [];
// let higherNumber = arr[0];
// let lowerNumber = arr[0];
// function bubbleSort (arr, higherNumber, lowerNumber){
//     for (i=0; i<arr.length; 1++){
//         if (arr[i]<= higherNumber);
//         higherNumber= arr[i];
//         return 
//     }

// }


function bubble(arr) {
    var len = arr.length;
  
    for (var i = 0; i < len ; i++) {
      for(var j = 0 ; j < len - i - 1; j++){ // this was missing
      if (arr[j] > arr[j + 1]) {
        // swap
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j + 1] = temp;
      }
     }
    }
    return arr;
  }

console.log (bubble([1,9,2,3,7,6,4,5,5]));