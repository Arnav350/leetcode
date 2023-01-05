/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let str = x.toString();
  for (let i = 0; i < str.length; i++) {
    if (str[i] != str[str.length - i - 1]) {
      return false;
    }
  }
  return true;
};
// @lc code=end
