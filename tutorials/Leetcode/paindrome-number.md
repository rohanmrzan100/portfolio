---
title: Palindrome Number
---

Leet code problem link (https://leetcode.com/problems/palindrome-number/description/)

## Description

Given an integer x, return true if x is a palindrome, and false otherwise.

**Example 1:**

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

**Example 2:**

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

**Example 3:**

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

## Solution

```js
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  let reversed = 0;
  let n = x;
  while (n > 0) {
    reversed = reversed * 10 + (n % 10);
    // must use Math.floor(n / 10) instead of n/10 to
    // ensure integer division else code  will fail
    n = Math.floor(n / 10);
  }
  if (reversed == x) {
    return true;
  }
  return false;
};
```
