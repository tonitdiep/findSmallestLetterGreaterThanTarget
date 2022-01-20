/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    // return letters.find(ansLetter => ansLetter > target ) || letters[0];

      //   for(let i = 0; i < letters.length; i++) {
      //   if (target < letters[i]) {

      //       return letters[i]
      //   }
        
      //   if(i === letters.length - 1) {{
         
      //       return letters[0];
      //   }}
      // }  
       let left = 0, right = letters.length -1;
        while (left <= right) {
          let mid = Math.floor((left+right)/2);
          if(letters[mid] > target){
              right = mid - 1;
          } else {
              left = mid + 1
          }
          }
        if(letters.length === left) return letters[0];
        else return letters[left]
};

/*
letters[i] is lowercase English letter
letters is osrted non-decreasing order
letters contains at least 2 different characters
target is a lowercase English letter

Question: Given a characters array letters that is sorted in non-decreasing order and a character target, return the smallest character in the array that is larger than target

Note that the letters wrap around.
For example, if target == 'z' and letters == ['a', 'b'], the answer is 'a'.
 

Example 1:
Input: letters = ["c","f","j"], target = "a"
Output: "c"
*/

