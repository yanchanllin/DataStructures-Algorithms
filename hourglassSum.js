/* 
2D Array-DS - Maximum hourglass

- Loop through length of an hourglass (3)
- Add the values in an hrglass to get sum 
- push sum into sums = [ ] an arr
- Return Math.max(...sums)

a b c
  d          =>Hourglass 
e f g

Input:

1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0      => Hourglass with the maximum sum is 7 
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0

*/
function hourglassSum(arr) {
    let sums = [];
        for(let row = 0; row <= 3; row++) {
        for(let col = 0; col <= 3; col++) {
            let sum = 0;
            sum = arr[row][col] + arr[row][col+1] + arr[row][col+2] 
                + arr[row+1][col+1] 
                + arr[row+2][col] + arr[row+2][col+1] + arr[row+2][col+2]
            sums.push(sum);
        }
    }
    return Math.max(...sums)
}
