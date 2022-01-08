import searchPalindrome from "./common/searchPalindromes.js";

const listSubstrings = (arr, id, title, str) => {
  let h1 = document.getElementById(title);
  h1.innerText += `: ${str}`;
  let ul = document.getElementById(id);
  for (let i = 0; i < arr.length; i++) {
    let ele = arr[i];
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(JSON.stringify(ele)));
    ul.appendChild(li);
  }
};

const str1 = "ABCBAHELLOHOWRACECARAREYOUILOVEUEVOLIIAMAIDOINGGOOD";
const str2 = "aaaaaaaaaaa";
const str3 = "asfdkfufffssssasdf";

const arr1 = searchPalindrome(str1);
const arr2 = searchPalindrome(str2);
const arr3 = searchPalindrome(str3);

listSubstrings(arr1, "example-case", "example-1", str1);
listSubstrings(arr2, "same-character", "example-2", str2);
listSubstrings(arr3, "random-string", "example-3", str3);
