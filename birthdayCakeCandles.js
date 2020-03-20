/*
find out how many candles she can successfully blow out.
For example, if your niece is turning  years old, and the cake will have 4candles of height 4,4,1,3, 
she will be able to blow out 2 candles successfully, since the tallest candles are of height 4 and there are 2 such candles.
*/

function birthdayCakeCandles(ar) {
          let maxHeight = Math.max(...ar); 
          let count = 0; 
            for(let i = 0;i < ar.length; i++){
                if(ar[i] == maxHeight)
                 count +=1
            }   
            return count      
}
