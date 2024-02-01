---
title: Longest Common Prefix
---

Leet code problem link (https://leetcode.com/problems/longest-common-prefix/)

## Description

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

**Example 1:**

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

**Example 2:**

Input: strs = ["flower","flow","flight"]
Output: "fl"

## Solution

```js
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return "";
  }
  let longestPrefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    let prevLongestPrefix = longestPrefix; //aa
    for (let j = 0; j < prevLongestPrefix.length; j++) {
      if (longestPrefix[j] == strs[i][j]) {
        longestPrefix += strs[i][j];
      } else {
        break;
      }
    }
    longestPrefix = longestPrefix.replace(prevLongestPrefix, "");
    if (longestPrefix === "") {
      return "";
    }
  }
  return longestPrefix;
};
```
