// Date: Dec 20 2021
// Author: Xinwen Dong
//
// Introduction:
//
//    This function uses quick sort to sort the input arr
//
// Methodology:
//
//    1) Set a pivot/mid value to separate the arr into two sections
//    2) If ascending, move arr[]<pivot to the left side of pivot; move arr[]>pivot to the right side of pivot
//    3) Recurse this process on both side of pivot
//
//    Time complexity:
//        Time complexity for quick sort is O(nlogn)
//
//    Space complexity:
//        Since the output is a new array containing all results, the space complexity is O(n)
//
// Function quickSort (arr, left, right, order, key) {
//
//      return arr;
//
// }
//
//    Input/Arguments:
//
//    -- arr: the array that needs to be sorted
//    -- left: left index
//    -- right: right index
//    -- order: ascend/desend (by order.length/order.position)
//    -- key: "length"/"position" (to reference length/position)
//
//    Output/Return:
//
//    -- arr: Array. Contains sorted arr.
//         arr = [
//            {
//                palindrome: String, the substring,
//                length: Integer, the length of substring,
//                position: Interger, the start position of substring
//            },
//            ...
//         ]
//
//    Variables:
//
//    -- pivot: Object/Array element. The mid value
//
//    -- temp: Object/Array element. Tempararily store the value
//
//    -- l: Integer. Left pointer.
//
//    -- r: Integer. Right pointer.
//

import { ASCEND, DESCEND } from "./constants.js";

const quickSort = (arr, left, right, order, key) => {
  let l = left;
  let r = right;
  let temp = null;
  let pivot = arr[Math.floor((l + r) / 2)];

  // sort according to order
  if (order === ASCEND) {
    // while loop move arr[]<pivot to the left side of pivot
    // move arr[]>pivot to the right side of pivot
    while (l < r) {
      // looking for arr[l] > pivot on pivot's left side
      while (arr[l][key] < pivot[key]) {
        l++;
      }
      // looking for arr[r] < pivot on pivot's right side
      while (arr[r][key] > pivot[key]) {
        r--;
      }
      // if l>=r, means the arr[] are all less than pivot on pivot's left side
      // arr[] are all greater than pivot on pivot's right side
      if (l >= r) {
        break;
      }
      // switch the value
      temp = arr[l];
      arr[l] = arr[r];
      arr[r] = temp;
      // move right or left pointer in case they are pointing at arr[]s with the same value as pivot
      // after switch, if arr[l] === pivot, r--
      if (arr[l][key] === pivot[key]) {
        r--;
      }
      // after switch, if arr[r] === pivot, l++
      if (arr[r][key] === pivot[key]) {
        l++;
      }
    }
  } else {
    // while loop move arr[]>pivot to the left side of pivot
    // move arr[]<pivot to the right side of pivot
    while (l < r) {
      // looking for arr[l] < pivot on pivot's left side
      while (arr[l][key] > pivot[key]) {
        l++;
      }
      // looking for arr[r] > pivot on pivot's right side
      while (arr[r][key] < pivot[key]) {
        r--;
      }
      // if l>=r, means the arr[] are all greater than pivot on pivot's left side
      // arr[] are all less than pivot on pivot's right side
      if (l >= r) {
        break;
      }
      // switch the value
      temp = arr[l];
      arr[l] = arr[r];
      arr[r] = temp;
      // move right or left pointer in case they are pointing at arr[]s with the same value as pivot
      // after switch, if arr[l] === pivot, r--
      if (arr[l][key] === pivot[key]) {
        r--;
      }
      // after switch, if arr[r] === pivot, l++
      if (arr[r][key] === pivot[key]) {
        l++;
      }
    }
  }
  // if l === r, must l++ r-- in case stack overflow
  if (l === r) {
    l++;
    r--;
  }
  // recurse to the left
  if (left < r) {
    quickSort(arr, left, r, order, key);
  }
  //recurse to the right
  if (right > l) {
    quickSort(arr, l, right, order, key);
  }
  return arr;
};

export default quickSort;
