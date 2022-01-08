// Date: Dec 20 2021
// Author: Xinwen Dong
//
// Introduction:
//
//    This function sorts the palindrome array according to:
//        1) the primary sort key/secondary sort key
//        2) ascend/descend
//
// Methodology:
//
//    Take the primary sort key "length" as an example:
//        1) Use quick sort to sort the palindrome array by "length", ascending or descending
//        2) Loop over the sorted array, find each "length" group
//        3) Use quick sort to sort each group by the secondary sort key "position"
//
//    Time complexity:
//        O(nlogn) for quick sort
//
//    Space complexity:
//        Since the output is an array containing all results, the space complexity is O(n)
//
// Function sortPalinArr(arr, order) {
//
//    return sortedArr;
//
// }
//
//    Input/Arguments:
//
//      -- arr: the palindrome array
//         arr = [
//            {
//                palindrome: String, the substring,
//                length: Integer, the length of substring,
//                position: Interger, the start position of substring
//            },
//            ...
//         ]
//
//      -- order: the order options
//         order = {
//             sortKey: LENGTH/POSITION, // to sort the arr according to length/position column
//             length: ASCEND/DESCEND,   // to sort the length column in an ascending/descending order
//             position: ASCEND/DESCEND, // to sort the position column in an ascending/descending order
//         }
//
//    Output/Return:
//
//      -- sortedArr: Array. Same data schema as the initial arr but sorted.
//
//    Variables:
//
//      -- size: Interger, arr length
//
//      -- start: Integer, a pointer to set the start position for each group
//

import { LENGTH, POSITION, END, ASCEND, DESCEND } from "./constants.js";
import quickSort from "./quickSort.js";

const sortPalinArr = (arr, key) => {
  const size = arr.length;
  if (size === 1) {
    return arr;
  }
  let sortedArr = [];
  let start = 0; // The start index for each secondary key group

  if (key === POSITION) {
    quickSort(arr, 0, arr.length - 1, ASCEND, key);
    for (let i = 1; i < size; i++) {
      if (arr[i][key] !== arr[i - 1][key]) {
        sortedArr.push(
          ...quickSort(arr.slice(start, i), 0, i - start - 1, DESCEND, END)
        );
        start = i; // start the next group
      }

      if (i === size - 1 && i >= start) {
        sortedArr.push(
          ...quickSort(
            arr.slice(start, size),
            0,
            size - start - 1,
            DESCEND,
            END
          )
        );
      }
    }
    return sortedArr;
  } else {
    quickSort(arr, 0, arr.length - 1, DESCEND, key);
    for (let i = 1; i < size; i++) {
      if (arr[i][key] !== arr[i - 1][key]) {
        sortedArr.push(
          ...quickSort(arr.slice(start, i), 0, i - start - 1, ASCEND, POSITION)
        );
        start = i; // start the next group
      }

      if (i === size - 1 && i >= start) {
        sortedArr.push(
          ...quickSort(
            arr.slice(start, size),
            0,
            size - start - 1,
            ASCEND,
            POSITION
          )
        );
      }
    }
    return sortedArr;
  }
};

// export the function
export default sortPalinArr;
