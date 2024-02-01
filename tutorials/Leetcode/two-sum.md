---
title: Two Sum
---

Leet code problem link (https://leetcode.com/problems/two-sum/)

## Description

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

**Example 1 :**

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

**Example 2 :**

Input: nums = [3,2,4], target = 6
Output: [1,2]

**Example 3 :**

Input: nums = [3,3], target = 6
Output: [0,1]

## Solution

```js
var twoSum = function (nums, target) {
  //create a map
  const numToIndexMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (numToIndexMap.has(complement)) {
      // if complement is already present in the map then
      // return value of complement and current i as answer
      return [numToIndexMap.get(complement), i];
    }
    // insert current number and it's index in
    // the map{number=>index}
    numToIndexMap.set(nums[i], i);
  }
  return []; // No solution found!
};
```
