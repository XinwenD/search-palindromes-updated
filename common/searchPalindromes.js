/* Date: Dec 20 2021
// Author: Xinwen Dong
//
// Introduction:
//
//    This function finds all palindromes in a given string,
//    as well as their lengths and start positions in the original string
//
// Methodology:
//
//    1) Enumerate all possible palindromic center
//    2) Use two pointers to extend on the left and right separately of this center
//    3) Continue to extend these two pointers if the pointers are pointing at the same charachter
//    4) Stop extending if pointing at different characters
//
//    Time complexity:
//        1) O(n) for enumerating all possible palindromic center
//        2) O(n) for extending two pointers
//        The total time complexity is O(n^2)
//
//    Space complexity:
//        Since the output is an array containing all results, the space complexity is O(n)
//
// Function searchPalindrome (str) {
//
//    return palinArr;
//
// }
//
//    Input/Arguments:
//
//    -- str: String. Function will take this str as input and return all palindromes it contains.
//
//    Output/Return:
//
//    -- palinArr: Array. Contains all palindromic substrings from the given string.
//       palinArr = [
//         {
//            palin: String. A single palindromic substring
//            position: Integer. The start position of this substring
//            length: Integer. The length of this substring
//         },
//         ...
//       ]
//
//    Variables:
//
//    -- size: Integer. Length of the input string
//
//    -- count: Integer. Count how many palindromes found in the string. Also works for the index in the palinArr
//
//    -- left: Integer. Left start pointer of the palindromic center.
//
//    -- right: Integer. Right start pointer of the palindromic center.
*/

import quickSort from "./quickSort.js";
import sortPalinArr from "./sortPalinArr.js";
import removeNestedSubstring from "./removeNestedSubstring.js";
import { ASCEND, DESCEND, POSITION, END } from "./constants.js";

const searchPalindrome = (str) => {
  str = str.trim().replace(/\s+/g, "");
  const size = str.length;
  const palinArr = [];
  if (size <= 1) {
    return palinArr;
  }
  let count = 0;

  // loop over all palindromic centers
  for (let i = 0; i < 2 * size - 1; i++) {
    // find the left/right start positions for two pointers
    let left = Math.floor(i / 2);
    let right = Math.floor(i / 2) + (i % 2);

    // while left pointer has not gone across the lower bound
    // and tight pointer has not gone across the upper bound
    // and the characters they are pointing at are equal
    while (
      left >= 0 &&
      right < size &&
      str.charAt(left) === str.charAt(right)
    ) {
      // left !== right excludes the case of a single character
      if (left !== right) {
        palinArr[count] = {
          palin: str.slice(left, right + 1),
          position: left,
          end: right,
          length: right - left + 1,
        };
        count++;
      }
      left--;
      right++;
    }
  }

  // Up to this step we have got all the possible substrings
  // Next step is to remove the nested substrings
  let sortedArr = [];

  // First we need to sort the substrings
  // by their starting position as primary key in an ascending order
  // by their end position as secondary key in a desencing order
  sortedArr = sortPalinArr(palinArr, POSITION);
  return removeNestedSubstring(sortedArr);
};

export default searchPalindrome;
