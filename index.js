/*

Given a string s, reverse the string according to the following rules:

All the characters that are not English letters remain in the same position.
All the English letters (lowercase or uppercase) should be reversed.
Return s after reversing it.


Example 1:

Input: s = "ab-cd"
Output: "dc-ba"


Example 2:

Input: s = "a-bC-dEf-ghIj"
Output: "j-Ih-gfE-dCba"


Example 3:

Input: s = "Test1ng-Leet=code-Q!"
Output: "Qedo1ct-eeLg=ntse-T!"
 

Constraints:

1 <= s.length <= 100
s consists of characters with ASCII values in the range [33, 122].
s does not contain '\"' or '\\'.

*/

var reverseOnlyLetters = function (s) {
  const array = [...s];

  let left = 0;
  let right = array.length - 1;

  const swap = (left, right) => {
    const temp = array[left];
    array[left] = array[right];
    array[right] = temp;
  };

  const isLetter = (item) => {
    const regex = /[a-zA-Z]/i;
    return regex.test(item);
  };

  while (left <= right) {
    if (isLetter(array[left]) && isLetter(array[right])) {
      swap(left, right);
      left++;
      right--;
    } 
    else if (isLetter(array[right])) {
      left++;
    } 
    else {
      right--;
    }
  }

  return array.join('');
};

const res1 = reverseOnlyLetters('ab-cd'); /// "dc-ba"
console.log('1:', res1 === 'dc-ba');

const res2 = reverseOnlyLetters('a-bC-dEf-ghIj'); /// "j-Ih-gfE-dCba"
console.log('2:', res2 === 'j-Ih-gfE-dCba');

const res3 = reverseOnlyLetters('Test1ng-Leet=code-Q!'); /// "Qedo1ct-eeLg=ntse-T!"
console.log('3:', res3 === 'Qedo1ct-eeLg=ntse-T!');

const res4 = reverseOnlyLetters('Test-1-ng-Leet=code-Q!'); /// "Qedo1ct-eeLg=ntse-T!"
console.log('4:', res4 === 'Qedo-1-ct-eeLg=ntse-T!');
