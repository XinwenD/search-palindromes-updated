import sortPalinArr from "./sortPalinArr.js";
import { LENGTH } from "./constants.js";

/* After sorting all the substrings, we can remove nested srubtrings
 * by comparing the start and end position
 * because after
 * For example, after sorting we get the array of start and end position pairs as below
 * [5, 30], [5, 20], [5, 10], [7, 20], [8, 25], [10, 40]
 * in this case, 30 is greater than 20, 10, 20, 25,
 * so [5, 20], [5, 10], [7, 20], [8, 25] are nested and will be removed
 */
const removeNestedSubstring = (arr) => {
  const size = arr.length;
  let start = 0;
  let filteredArr = [];
  for (let i = 1; i < size; i++) {
    if (
      arr[start].position <= arr[i].position &&
      arr[start].end >= arr[i].end
    ) {
      arr[i] = "";
    } else {
      start = i;
    }
  }
  filteredArr = arr.filter((ele) => ele !== "");
  return sortPalinArr(filteredArr, LENGTH);
};

export default removeNestedSubstring;
