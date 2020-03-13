function reverseArray(a) {

     var arr = [1,2,3,4];
     var string = '';
  for (var i=arr.length-1; i>=0; i--) {
   string = string.concat(arr[i]) + ' '
 }
console.log(string.trim()); 
}

//Another way:
function reverseArray(a) {

    let arr = [1,2,3,4];
    let string = '';
  arr.reverse().forEach(item => string = `${string} ${item}`)

 console.log(string.trim());
}
