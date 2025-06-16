export const practiceProblems = {
    "Two Sum": {
      problem: `Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

Example:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: nums[0] + nums[1] = 2 + 7 = 9`,
      hint: "Use a hash map to store numbers you've seen and their indices",
      approach: "Single pass with hash map - for each number, check if its complement exists",
      concepts: ["Hash Map"]
    },
    "Best Time to Buy and Sell Stock": {
      problem: `You are given an array prices where prices[i] is the price of a stock on day i.
You want to maximize profit by choosing a single day to buy and a single day to sell.

Example:
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.`,
      hint: "Keep track of minimum price seen so far and maximum profit",
      approach: "One pass tracking min price and max profit at each step",
      concepts: ["Dynamic programming"]
    },
    "Contains Duplicate": {
      problem: `Given an integer array nums, return true if any value appears at least twice.

Example:
Input: nums = [1,2,3,1]
Output: true`,
      hint: "Use a set to track seen elements",
      approach: "Either use a set to track seen elements or compare array length with set length",
      concepts: ["Hash Set"]
    },
    "Product of Array Except Self": {
      problem: `Given array nums, return array where answer[i] equals product of all elements except nums[i].
Must run in O(n) time without using division.

Example:
Input: nums = [1,2,3,4]
Output: [24,12,8,6]`,
      hint: "Use left and right pass to calculate prefix and suffix products",
      approach: "Two passes - first for left products, second for right products while building result",
      concepts: ["Prefix sums"]
    },
    "Maximum Subarray": {
      problem: `Given an integer array nums, find the contiguous subarray with largest sum and return its sum.

Example:
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.`,
      hint: "Use Kadane's algorithm - keep track of current sum and max sum",
      approach: "At each position, decide whether to continue current subarray or start new one",
      concepts: ["Kadane's Algorithm", "Dynamic programming"]
    },
    "Container With Most Water": {
      problem: `You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
Find two such lines that together with the x-axis form a container, such that the container contains the most water.
Return the maximum amount of water a container can store.

Example:
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water the container can contain is 49.`,
      hint: "Use two pointers, one at each end, and move the pointer of the shorter line inwards.",
      approach: "Initialize two pointers, left and right. Calculate area. Move the pointer pointing to the shorter line to potentially find a larger height.",
      concepts: ["Two pointers technique"]
    },
    "3Sum": {
      problem: `Given array nums, return all unique triplets that sum to zero.

Example:
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]`,
      hint: "Sort array, then use two pointers for each element",
      approach: "Sort first, then for each element use two pointers to find complementary pair",
      concepts: ["Two pointers technique"]
    },
    "Search in Rotated Sorted Array": {
      problem: `There is an integer array nums sorted in ascending order (with distinct values).
Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k.
Given the array nums after the rotation and an integer target, return the index of target if it is in nums, or -1 otherwise.

Example:
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4`,
      hint: "Apply a modified binary search. One half of the array will always be sorted.",
      approach: "Modified binary search: determine which half is sorted, and check if target falls into that range. If so, search in that range; otherwise, search in the other half.",
      concepts: ["Binary search"]
    },
    "Find First and Last Position in Sorted Array": {
      problem: `Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
If target is not found in the array, return [-1, -1].
You must write an algorithm with O(log n) runtime complexity.

Example:
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]`,
      hint: "Use binary search twice: once for the first occurrence and once for the last.",
      approach: "Implement two binary searches: one to find the leftmost occurrence of the target and another to find the rightmost occurrence. Handle edge cases where the target is not found.",
      concepts: ["Binary search"]
    },
    "Search a 2D Matrix": {
      problem: `You are given an m x n integer matrix with the following two properties:
1. Each row is sorted in non-decreasing order.
2. The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in the matrix or false otherwise.

Example:
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true`,
      hint: "Treat the 2D matrix as a single sorted 1D array and apply binary search.",
      approach: "Perform binary search on the flattened matrix. Calculate the row and column indices from the mid index. This works because the matrix is sorted across rows.",
      concepts: ["Binary search"]
    },
    "Koko Eating Bananas": {
      problem: `Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. Each hour, Koko chooses a pile and eats k bananas from it. If the pile has less than k bananas, she eats all of them instead.
Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return in h hours.
Return the minimum integer k such that she can eat all the bananas within h hours.

Example:
Input: piles = [3,6,7,11], h = 8
Output: 4`,
      hint: "The possible values for k range from 1 to the maximum number of bananas in a pile. This range can be searched using binary search.",
      approach: "Binary search on the possible values of 'k' (eating speed). For a given 'k', calculate the total time required to eat all bananas. Adjust the search range (low/high) based on whether the time is within 'h' hours.",
      concepts: ["Binary search"]
    },
    "4Sum": {
      problem: `Given an array nums of n integers, return an array of all unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that 0 <= a, b, c, d < n, a, b, c, and d are distinct, and nums[a] + nums[b] + nums[c] + nums[d] == target.
You may return the answer in any order.

Example:
Input: nums = [1,0,-1,0,-2,2], target = 0
Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]`,
      hint: "Similar to 3Sum, but with an outer loop for the fourth element. Remember to sort and handle duplicates.",
      approach: "Sort the array. Use nested loops for the first two elements. Then, apply the two-pointer technique for the remaining two elements to find the target sum. Skip duplicates to ensure unique quadruplets.",
      concepts: ["Two pointers technique"]
    },
    "Remove Duplicates from Sorted Array": {
      problem: `Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.
Return k after placing the final result in the first k slots of nums.

Example:
Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively. It does not matter what you leave beyond the returned k (hence they are underscores).`,
      hint: "Use the two-pointer approach, one to iterate and one to place unique elements.",
      approach: "Use two pointers: `i` to iterate through the array and `j` to place the next unique element. If `nums[i]` is different from `nums[j-1]`, move `nums[i]` to `nums[j]` and increment `j`.",
      concepts: ["Two pointers technique"]
    },
    "Trapping Rain Water": {
      problem: `Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

Example:
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6`,
      hint: "For each bar, the trapped water depends on the maximum height to its left and right. Consider a two-pointer approach or dynamic programming.",
      approach: "Two-pointer approach: maintain `left_max` and `right_max` from both ends. Move the pointer of the shorter height inwards, calculating trapped water at each step.",
      concepts: ["Two pointers technique"]
    },
    "Longest Repeating Character Replacement": {
      problem: `You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character any number of times.
You can perform this operation at most k times.
Return the length of the longest substring containing the same letter you can get after performing the above operations.

Example:
Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.`,
      hint: "Use a sliding window. The window is valid if `window_length - max_frequency <= k`.",
      approach: "Sliding window with frequency map. Expand the window from the right. If the number of characters to change (`current window length - max frequency in window`) exceeds `k`, shrink the window from the left.",
      concepts: ["Sliding window"]
    },
    "Longest Palindromic Substring": {
      problem: `Given a string s, return the longest palindromic substring in s.

Example:
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.`,
      hint: "Expand around center. A palindrome can be odd length (center character) or even length (center between two characters).",
      approach: "Iterate through each character and each pair of adjacent characters as potential centers. Expand outwards to find the longest palindrome centered at that point. Keep track of the overall longest palindrome found.",
      concepts: ["String operations"]
    },
    "Palindromic Substrings": {
      problem: `Given a string s, return the number of palindromic substrings in it.
A string is a palindrome when it reads the same backward as forward.
A substring is a contiguous sequence of characters within the string.

Example:
Input: s = "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".`,
      hint: "Similar to finding the longest palindromic substring, you can expand around each possible center.",
      approach: "Iterate through each character and each pair of adjacent characters as potential centers. Expand outwards from each center, incrementing a counter for every valid palindrome found.",
      concepts: ["String operations"]
    },
    "Encode and Decode Strings": {
      problem: `Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.
Implement the 'encode' and 'decode' methods.

Example:
Input: ["lint","code","love","you"]
Output: ["lint","code","love","you"]`,
      hint: "Consider how to delimit strings and handle special characters within the strings themselves. Length prefixing is a common solution.",
      approach: "Encode: Prepend each string with its length followed by a delimiter (e.g., '#'). Decode: Read the length, then read that many characters to get the string, and repeat.",
      concepts: ["String operations", "String design"]
    },
    "String to Integer (atoi)": {
      problem: `Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.
The algorithm for myAtoi(string s) is as follows:
1. Read in and ignore any leading whitespace.
2. Check if the next character is '-' or '+'. Read this character in if it is either. This determines the sign.
3. Read in next the digits until the next non-digit character or the end of the input is reached. The digits should be interpreted as a numerical value.
4. If no digits were read, then the integer is 0.
5. If the integer is out of the 32-bit signed integer range, then clamp the integer to be in the range.
6. Return the integer.

Example:
Input: s = "42"
Output: 42`,
      hint: "Handle leading whitespace, sign, digit parsing, and overflow conditions carefully.",
      approach: "Iterate through the string, handling whitespace, sign, and then collecting digits. During digit collection, check for overflow before multiplying by 10 and adding the next digit.",
      concepts: ["String operations", "String parsing"]
    },
    "Minimum Window Substring": {
      problem: `Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

Example:
Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from t.`,
      hint: "Use a sliding window with a frequency map for characters in 't'. Keep track of how many characters from 't' are currently matched in the window.",
      approach: "Sliding window. Use two hash maps: one for target frequencies in 't' and one for current window frequencies. Expand the window from the right. When a valid window is found, try to shrink it from the left, updating counts and tracking the minimum window.",
      concepts: ["Sliding window", "Hash Map"]
    },
    "Remove Nth Node From End": {
      problem: `Given the head of a linked list, remove the nth node from the end of the list and return its head.

Example:
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]`,
      hint: "Use two pointers, one leading the other by 'n' steps. When the leading pointer reaches the end, the trailing pointer is at the node to be removed (or its predecessor).",
      approach: "Create a dummy node to handle edge cases. Use two pointers, `fast` and `slow`. Move `fast` `n` steps ahead. Then move both pointers until `fast` reaches the end. `slow` will be at the node *before* the one to be removed. Adjust links.",
      concepts: ["Linked List", "Two pointers technique"]
    },
    "Reorder List": {
      problem: `You are given the head of a singly linked list L = L0 → L1 → ... → Ln-1 → Ln.
Reorder the list to be L0 → Ln → L1 → Ln-1 → L2 → Ln-2 → ...
You may not modify the values in the list's nodes. Only nodes themselves may be changed.

Example:
Input: head = [1,2,3,4]
Output: [1,4,2,3]`,
      hint: "Find the middle, reverse the second half, then merge the two halves.",
      approach: "1. Find the middle of the linked list using fast/slow pointers. 2. Split the list into two halves. 3. Reverse the second half. 4. Merge the two halves alternately.",
      concepts: ["Linked List", "Two pointers technique", "Reversal"]
    },
    "Add Two Numbers": {
      problem: `You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.`,
      hint: "Iterate through both lists simultaneously, handling carries. Create a new list for the sum.",
      approach: "Use a dummy head for the result list. Iterate through both lists, adding corresponding digits and any carry from the previous step. Create new nodes for the sum's digits and update the carry. Continue until both lists are exhausted and carry is zero.",
      concepts: ["Linked List", "Simulation"]
    },
    "Copy List with Random Pointer": {
      problem: `A linked list of length n is given such that each node contains an additional random pointer, which could point to any node in the list, or null.
Construct a deep copy of the list. The deep copy should consist of exactly n new nodes, where each new node has its value set to the value of its corresponding original node. The new nodes should be linked together in the same way as the original list (next pointers), and the random pointers should point to the same nodes in the new list as they pointed to in the original list.

Example:
Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
Output: [[7,null],[13,0],[11,4],[10,2],[1,0]]`,
      hint: "Use a hash map to store the mapping from original nodes to copied nodes. Alternatively, interweave copied nodes with original nodes.",
      approach: "Method 1 (Hash Map): Iterate through the original list to create copies and store them in a hash map (`original_node -> copied_node`). Then iterate again to assign `next` and `random` pointers using the map. Method 2 (Weaving): Create copies and interweave them (e.g., `original1 -> copy1 -> original2 -> copy2`). Then assign random pointers. Finally, separate the original and copied lists.",
      concepts: ["Linked List", "Hash Map", "Weaving"]
    },
    "Find Duplicate Number": {
      problem: `Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
There is only one repeated number in nums, return this repeated number.
You must solve the problem without modifying the array nums and uses only constant extra space.

Example:
Input: nums = [1,3,4,2,2]
Output: 2`,
      hint: "This problem can be solved using the fast and slow pointer technique, similar to detecting a cycle in a linked list.",
      approach: "Treat the array indices as pointers in a linked list. If `nums[i]` points to `i`, imagine `i` points to `nums[i]`. A duplicate creates a cycle. Use Floyd's Cycle-Finding Algorithm (tortoise and hare) to find the start of the cycle, which will be the duplicate number.",
      concepts: ["Linked List", "Two pointers technique", "Floyd's Algorithm"]
    },
    "Remove Duplicates from Sorted List": {
      problem: `Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

Example:
Input: head = [1,1,2,3,3]
Output: [1,2,3]`,
      hint: "Iterate through the list and skip nodes with the same value as the current node.",
      approach: "Traverse the linked list. If the current node's value is the same as the next node's value, skip the next node (i.e., `current.next = current.next.next`). Otherwise, move to the next distinct node.",
      concepts: ["Linked List", "Traversal"]
    },
    "Palindrome Linked List": {
      problem: `Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

Example:
Input: head = [1,2,2,1]
Output: true`,
      hint: "Find the middle of the list, reverse the second half, then compare the two halves.",
      approach: "1. Find the middle of the linked list using fast and slow pointers. 2. Reverse the second half of the list. 3. Compare the first half with the reversed second half. 4. (Optional) Restore the original list structure.",
      concepts: ["Linked List", "Two pointers technique"]
    },
    "Intersection of Two Linked Lists": {
      problem: `Given the heads of two singly linked lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

Example:
Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
Output: Intersected at '8'
Explanation: The intersected node's value is 8 (note that this is not necessarily 8 if the lists intersect at a different value).
The two lists meet at node with value 8.`,
      hint: "Two pointers, A and B. When one reaches the end of its list, redirect it to the head of the other list. They will meet at the intersection or at null.",
      approach: "Use two pointers, `ptrA` and `ptrB`. Iterate them simultaneously. When `ptrA` reaches the end of list A, redirect it to `headB`. When `ptrB` reaches the end of list B, redirect it to `headA`. They will meet at the intersection point or both become null.",
      concepts: ["Linked List", "Two pointers technique"]
    },
    "Reverse Nodes in k-Group": {
      problem: `Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.
k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k, then the remaining nodes, in the end, should remain as they are.
You may not alter the values in the list's nodes, only nodes themselves may be changed.

Example:
Input: head = [1,2,3,4,5], k = 2
Output: [2,1,4,3,5]`,
      hint: "Iteratively reverse k nodes, then connect the reversed group to the rest of the list. Handle the remaining nodes.",
      approach: "Use a dummy node. Iterate through the list, identifying groups of k nodes. For each group, reverse it (similar to reversing a linked list). Connect the end of the previous reversed group to the head of the current reversed group. Handle the tail group if its length is less than k.",
      concepts: ["Linked List", "Iterative Reversal"]
    },
    "Merge k Sorted Lists": {
      problem: `You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
Merge all the linked-lists into one sorted linked-list and return it.

Example:
Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]`,
      hint: "Use a min-heap to always get the smallest element among the heads of all lists. Alternatively, use divide and conquer.",
      approach: "Method 1 (Min-Heap): Put the head of each list into a min-heap. Repeatedly extract the minimum element from the heap, add it to the result list, and if the extracted node has a next element, add it to the heap. Method 2 (Divide & Conquer): Recursively merge two lists at a time, similar to merge sort.",
      concepts: ["Linked List", "Heap", "Divide & Conquer"]
    },
    "Min Stack": {
      problem: `Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
Implement the MinStack class:
- MinStack() initializes the stack object.
- void push(int val) pushes the element val onto the stack.
- void pop() removes the element on the top of the stack.
- int top() gets the top element of the stack.
- int getMin() retrieves the minimum element in the stack.
You must implement a solution with O(1) time complexity for each function.

Example:
Input: ["MinStack","push","push","push","getMin","pop","top","getMin"]
       [[],[-2],[0],[-3],[],[],[],[]]
Output: [null,null,null,null,-3,null,0,-2]`,
      hint: "Store pairs (value, current_min) or use a separate stack to keep track of minimums.",
      approach: "Method 1: Each element pushed onto the stack can be an object/pair containing both its value and the minimum value of the stack up to that point. Method 2: Use two stacks; one for normal elements and another to keep track of minimums (push only if `val <= current_min`).",
      concepts: ["Stack", "Design"]
    },
    "Evaluate Reverse Polish Notation": {
      problem: `You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation. Evaluate the expression.
Valid operators are +, -, *, /. Each operand may be an integer or another expression.
The division between two integers in this problem should truncate toward zero.

Example:
Input: tokens = ["2","1","+","3","*"]
Output: 9
Explanation: ((2 + 1) * 3) = 9`,
      hint: "Use a stack to store operands. When an operator is encountered, pop two operands, apply the operator, and push the result back.",
      approach: "Iterate through the tokens. If a token is an operand, push it onto a stack. If it's an operator, pop the top two operands, perform the operation, and push the result back onto the stack.",
      concepts: ["Stack"]
    },
    "Daily Temperatures": {
      problem: `Given an array of integers temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which temperatures[j] > temperatures[i], then answer[i] should be 0 instead.

Example:
Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]`,
      hint: "Use a monotonic stack to efficiently find the next greater element.",
      approach: "Iterate through the temperatures with an index. Maintain a **monotonic decreasing stack** of indices. When a warmer temperature is found, pop elements from the stack that are smaller than the current temperature and calculate their waiting days.",
      concepts: ["Stack", "Monotonic Stack"]
    },
    "Car Fleet": {
      problem: `There are n cars going to the same destination at the same target mileage.
You are given two integer arrays position and speed, both of length n, where position[i] is the position of the ith car and speed[i] is the speed of the ith car.
A car fleet is a non-empty group of cars driving at the same position and same speed. A single car is also a car fleet.
If a car catches up to another car ahead of it, it will join that car fleet and drive at the same speed as the faster car.
Return the number of car fleets.

Example:
Input: target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]
Output: 3
Explanation:
The cars starting at 10 and 8 form a fleet (at position 12).
The car starting at 0 is a fleet.
The cars starting at 5 and 3 form a fleet (at position 6).`,
      hint: "Sort cars by their starting positions in descending order. Calculate the time it takes for each car to reach the target.",
      approach: "Sort cars by position in descending order. Iterate through the sorted cars, calculating the time each car takes to reach the target. Use a stack or a variable to keep track of the time of the *last* fleet formed. If a current car's time is greater than the last fleet's time, it forms a new fleet.",
      concepts: ["Monotonic Stack"]
    },
    "Implement Queue using Stacks": {
      problem: `Implement a first in, first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

Implement the MyQueue class:
- void push(int x) Pushes element x to the back of the queue.
- int pop() Removes the element from the front of the queue and returns it.
- int peek() Returns the element at the front of the queue.
- boolean empty() Returns true if the queue is empty, false otherwise.

Example:
Input: ["MyQueue", "push", "push", "peek", "pop", "empty"]
       [[], [1], [2], [], [], []]
Output: [null, null, null, 1, 1, false]`,
      hint: "Use one stack for input and another for output. When popping/peeking, if the output stack is empty, transfer all elements from input to output.",
      approach: "Maintain two stacks, `inStack` for pushing and `outStack` for popping. When `pop()` or `peek()` is called, if `outStack` is empty, transfer all elements from `inStack` to `outStack`. This reverses the order, making the oldest element accessible.",
      concepts: ["Stack", "Design"]
    },
    "Next Greater Element I": {
      problem: `The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.
You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.
For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, the answer for this query is -1.
Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.

Example:
Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
Output: [-1,3,-1]
Explanation:
For element 4 in nums1, the next greater element is -1 because it is the last element.
For element 1 in nums1, the next greater element is 3.
For element 2 in nums1, there is no next greater element.`,
      hint: "Use a monotonic stack to precompute the next greater element for all elements in `nums2`.",
      approach: "Iterate through `nums2` and use a monotonic stack to find the next greater element for each number. Store these mappings in a hash map. Then, for each number in `nums1`, look up its next greater element in the hash map.",
      concepts: ["Stack", "Monotonic Stack"]
    },
    "Next Greater Element II": {
      problem: `Given a circular integer array nums (i.e., the next element of nums[nums.length - 1] is nums[0]), return the next greater element for each element in nums.
To find the next greater element for element x, search the first greater number in a traversing order next to it in the array, which means you could search circularly to find its next greater number. If it doesn't exist, return -1 for this number.

Example:
Input: nums = [1,2,3,4,3]
Output: [2,3,4,-1,4]`,
      hint: "Simulate a circular array by duplicating it or using the modulo operator. Use a monotonic stack.",
      approach: "To handle the circular nature, append the array to itself (or iterate twice the length). Use a monotonic decreasing stack to find the next greater element for each number, similar to Next Greater Element I.",
      concepts: ["Stack", "Monotonic Stack"]
    },
    "Largest Rectangle in Histogram": {
      problem: `Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.

Example:
Input: heights = [2,1,5,6,2,3]
Output: 10
Explanation: The above is a histogram where width of each bar is 1.
The largest rectangle has area = 10 units.`,
      hint: "For each bar, its height determines a potential rectangle. The width of this rectangle is determined by the first smaller bar to its left and right. A monotonic stack can help find these boundaries efficiently.",
      approach: "Use a monotonic stack. Iterate through the heights, pushing indices onto the stack. When a bar is encountered that is shorter than the stack's top, pop elements from the stack, calculating the area for each popped bar using its height and the current index (or the previous stack element's index) as boundaries.",
      concepts: ["Stack", "Monotonic Stack"]
    },
    "Subtree of Another Tree": {
      problem: `Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.
A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree itself could also be considered as a subtree of itself.

Example:
Input: root = [3,4,5,1,2], subRoot = [4,1,2]
Output: true`,
      hint: "For each node in the main tree, check if the subtree rooted at that node is identical to the `subRoot`.",
      approach: "Perform a DFS on the `root` tree. At each node, call a helper function `isSameTree(node, subRoot)` to check for structural and value equality. If `isSameTree` returns true, then `subRoot` is found.",
      concepts: ["DFS"]
    },
    "Lowest Common Ancestor of BST": {
      problem: `Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.
According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

Example:
Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
Output: 6
Explanation: The LCA of nodes 2 and 8 is 6.`,
      hint: "In a BST, if both nodes are smaller than the current node, go left. If both are larger, go right. Otherwise, the current node is the LCA.",
      approach: "Traverse the BST. If both `p` and `q` are on the left side of the current node, move left. If both are on the right side, move right. If one is on the left and the other on the right (or one of them *is* the current node), then the current node is the LCA.",
      concepts: ["BST Properties"]
    },
    "Binary Tree Right Side View": {
      problem: `Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

Example:
Input: root = [1,2,3,null,5,null,4]
Output: [1,3,4]`,
      hint: "Use BFS and collect the last node of each level. Or, use DFS and keep track of the maximum depth visited for each level.",
      approach: "BFS: Perform a level-order traversal. For each level, the last element encountered is the one visible from the right side. DFS: Traverse in `right -> left -> root` order. Keep track of the current depth and add a node's value to the result only if it's the first node encountered at that depth.",
      concepts: ["BFS", "DFS"]
    },
    "Count Good Nodes in Binary Tree": {
      problem: `Given a binary tree root, a node X in the tree is named a good node if in the path from root to X, there are no nodes with a value greater than X.
Return the number of good nodes in the binary tree.

Example:
Input: root = [3,1,4,3,null,1,5]
Output: 4
Explanation: Nodes in the tree are (node value, path max value):
(3, 3) is good.
(1, 3) is not good.
(4, 4) is good.
(3, 4) is not good.
(1, 4) is not good.
(5, 5) is good.`,
      hint: "Use a DFS approach, passing the maximum value encountered on the path so far.",
      approach: "Perform a recursive DFS traversal. Maintain a `max_val_so_far` parameter. When visiting a node, if its value is greater than or equal to `max_val_so_far`, increment the good node count and update `max_val_so_far` for recursive calls to its children.",
      concepts: ["DFS"]
    },
    "Validate Binary Search Tree": {
      problem: `Given the root of a binary tree, determine if it is a valid binary search tree (BST).
A valid BST is defined as follows:
- The left subtree of a node contains only nodes with keys less than the node's key.
- The right subtree of a node contains only nodes with keys greater than the node's key.
- Both the left and right subtrees must also be binary search trees.

Example:
Input: root = [2,1,3]
Output: true`,
      hint: "During traversal, maintain the valid range (min and max values) for the current node.",
      approach: "Perform a recursive DFS traversal, passing down a `min` and `max` bound for the current node's value. For a left child, the `max` bound becomes the parent's value. For a right child, the `min` bound becomes the parent's value.",
      concepts: ["DFS"]
    },
    "Kth Smallest Element in BST": {
      problem: `Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values in the tree.

Example:
Input: root = [3,1,4,null,2], k = 1
Output: 1`,
      hint: "An in-order traversal of a BST visits nodes in ascending order.",
      approach: "Perform an in-order traversal (Left -> Root -> Right) of the BST. Keep a counter and decrement `k` for each node visited. When `k` becomes 0, the current node's value is the Kth smallest.",
      concepts: ["In-order Traversal"]
    },
    "Construct Binary Tree from Preorder and Inorder": {
      problem: `Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.

Example:
Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
Output: [3,9,20,null,null,15,7]`,
      hint: "In preorder, the first element is the root. In inorder, elements to the left of the root are in the left subtree, and elements to the right are in the right subtree.",
      approach: "Recursively build the tree. The first element of `preorder` is always the root. Find this root in `inorder` to determine the left and right subtrees. Recursively call the function for the left and right subtrees using the appropriate slices of `preorder` and `inorder` arrays.",
      concepts: ["Recursion"]
    },
    "Diameter of Binary Tree": {
      problem: `Given the root of a binary tree, return the length of the diameter of the tree.
The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.
The length of a path between two nodes is the number of edges between them.

Example:
Input: root = [1,2,3,4,5]
Output: 3
Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].`,
      hint: "The longest path between two nodes either passes through the root or is entirely within one of its subtrees.",
      approach: "Use a recursive DFS. For each node, calculate the height of its left and right subtrees. The diameter *through* the current node is `left_height + right_height`. Keep track of the maximum diameter found so far across all nodes.",
      concepts: ["DFS"]
    },
    "Balanced Binary Tree": {
      problem: `Given a binary tree, determine if it is height-balanced.
For this problem, a height-balanced binary tree is defined as:
a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

Example:
Input: root = [3,9,20,null,null,15,7]
Output: true`,
      hint: "A recursive approach that returns the height of the subtree, or -1 if unbalanced.",
      approach: "Implement a recursive DFS function that returns the height of the current subtree. If, at any point, the absolute difference in heights of the left and right children is greater than 1, or if a child subtree is found to be unbalanced (indicated by returning -1), propagate -1 upwards. Otherwise, return `1 + max(left_height, right_height)`.",
      concepts: ["DFS"]
    },
    "Symmetric Tree": {
      problem: `Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

Example:
Input: root = [1,2,2,3,4,4,3]
Output: true`,
      hint: "Recursively check if the left subtree is a mirror of the right subtree.",
      approach: "Implement a helper function `isMirror(node1, node2)`. This function checks if `node1.val == node2.val` and recursively calls `isMirror(node1.left, node2.right)` and `isMirror(node1.right, node2.left)`. The main function calls `isMirror(root.left, root.right)`.",
      concepts: ["DFS"]
    },
    "Path Sum": {
      problem: `Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.
A leaf node is a node with no children.

Example:
Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
Output: true
Explanation: The root-to-leaf path with target sum is shown.`,
      hint: "Use DFS. Subtract the current node's value from the target sum as you traverse. Check if you reach a leaf node with a remaining sum of zero.",
      approach: "Perform a recursive DFS. In the recursive calls, pass the current node and the `remainingSum` (targetSum - current node's value). If a leaf node is reached and `remainingSum` is 0, return true. Otherwise, recurse on children.",
      concepts: ["DFS"]
    },
    "Binary Tree Zigzag Level Order Traversal": {
      problem: `Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and so on).

Example:
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[20,9],[15,7]]`,
      hint: "Use BFS and alternate the direction of adding elements to the current level's list.",
      approach: "Perform BFS. For each level, maintain a flag or counter to determine if the order should be left-to-right or right-to-left. If right-to-left, reverse the list of nodes collected for that level before adding it to the final result.",
      concepts: ["BFS"]
    },
    "Binary Tree Maximum Path Sum": {
      problem: `A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. The path sum is the sum of the values of the nodes in the path.
Given the root of a binary tree, return the maximum path sum of any non-empty path.

Example:
Input: root = [-10,9,20,null,null,15,7]
Output: 42
Explanation: The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42.`,
      hint: "For each node, consider the path passing through it (node + max path from left child + max path from right child) and the path extending upwards (node + max(left_path, right_path)).",
      approach: "Use a recursive DFS. A global variable can store the maximum path sum found. For each node, calculate the maximum path sum that *starts* at this node and goes downwards (node.val + max(0, left_gain) + max(0, right_gain)). Also, update the global maximum by considering the path that *goes through* this node (node.val + left_gain + right_gain). Return the path that can be extended upwards.",
      concepts: ["DFS"]
    },
    "Serialize and Deserialize Binary Tree": {
      problem: `Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.
Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

Example:
Input: root = [1,2,3,null,null,4,5]
Output: [1,2,3,null,null,4,5]`,
      hint: "Use a predefined traversal order (e.g., preorder or BFS) and represent null nodes clearly.",
      approach: "DFS (Preorder) or BFS can be used. For DFS, represent null children as a special marker (e.g., 'N' or '#'). When deserializing, read the string and reconstruct the tree recursively/iteratively, handling the special marker for nulls.",
      concepts: ["DFS", "BFS"]
    },
    "Clone Graph": {
      problem: `Given a reference of a node in a connected undirected graph.
Return a deep copy (clone) of the graph.
Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.

Example:
Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
Output: [[2,4],[1,3],[2,4],[1,3]]`,
      hint: "Use DFS or BFS to traverse the graph and a hash map to store visited nodes and their copies.",
      approach: "Use a hash map to store a mapping from original nodes to their cloned counterparts (`original_node -> cloned_node`). Perform a DFS or BFS traversal. For each original node, create a clone if it hasn't been cloned yet, and then recursively/iteratively clone and connect its neighbors.",
      concepts: ["DFS", "BFS", "Hash Map"]
    },
    "Pacific Atlantic Water Flow": {
      problem: `There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean. The Pacific Ocean touches the island's left and top edges, and the Atlantic Ocean touches the island's right and bottom edges.
Water can flow from any cell to an adjacent cell (up, down, left, or right) if the adjacent cell's height is less than or equal to the current cell's height.
Return a list of grid coordinates (row, col) where water can flow to both the Pacific and Atlantic oceans.

Example:
Input: heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]`,
      hint: "Instead of flowing water from inside to oceans, flow water from oceans inwards. A cell is a solution if it's reachable from both oceans.",
      approach: "Perform two separate multi-source BFS/DFS traversals. One starting from all cells bordering the Pacific Ocean, marking all reachable cells. Another starting from all cells bordering the Atlantic Ocean, marking all reachable cells. The intersection of these two sets of reachable cells is the answer.",
      concepts: ["DFS", "BFS"]
    },
    "Course Schedule II": {
      problem: `There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.
Return the ordering of courses you should take to finish all courses. If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.

Example:
Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
Output: [0,1,2,3] or [0,2,1,3]`,
      hint: "This is a topological sort problem. Use Kahn's algorithm (BFS) or DFS.",
      approach: "Build an adjacency list for the graph and an array for in-degrees (number of prerequisites) for each course. Initialize a queue with all courses that have an in-degree of 0. Perform BFS: dequeue a course, add it to the result, and decrement the in-degree of its neighbors. If a neighbor's in-degree becomes 0, enqueue it. If the final result size is less than `numCourses`, a cycle exists.",
      concepts: ["Graph", "Topological Sort"]
    },
    "Number of Connected Components": {
      problem: `You have a graph of n nodes labeled from 0 to n - 1. You are given an integer n and a list of edges where edges[i] = [ai, bi] indicates that there is an undirected edge between nodes ai and bi.
Return the number of connected components in the graph.

Example:
Input: n = 5, edges = [[0,1],[1,2],[3,4]]
Output: 2`,
      hint: "Use DFS, BFS, or Union-Find. For each unvisited node, start a traversal (DFS/BFS) or unite its components.",
      approach: "Method 1 (DFS/BFS): Maintain a `visited` array. Iterate from 0 to n-1. If a node is not visited, increment component count, then start a DFS/BFS from it to mark all reachable nodes as visited. Method 2 (Union-Find): Initialize each node as its own parent. Iterate through edges, uniting the components of connected nodes. The number of unique parents in the end is the number of connected components.",
      concepts: ["Union-Find"]
    },
    "Graph Valid Tree": {
      problem: `You have a list of n nodes labeled from 0 to n - 1 and a list of edges. Determine if the graph defined by these nodes and edges is a valid tree.

A valid tree has two properties:
1. It is connected.
2. It has no cycles.

Example:
Input: n = 5, edges = [[0,1],[0,2],[0,3],[1,4]]
Output: true`,
      hint: "A graph with N nodes and N-1 edges is a tree if and only if it is connected and acyclic. You can check connectivity and cycles using DFS/BFS or Union-Find.",
      approach: "Method 1 (Union-Find): If adding an edge connects two already connected components, it's a cycle. If after processing all edges, there's more than one connected component, it's not connected. A valid tree must have `n` nodes and `n-1` edges, be connected, and have no cycles. Method 2 (DFS/BFS): Start a traversal from node 0. Keep track of visited nodes and parents to detect cycles. After traversal, check if all nodes were visited.",
      concepts: ["Union-Find", "DFS"]
    },
    "Rotting Oranges": {
      problem: `You are given an m x n grid where each cell can have one of three values:
- 0 representing an empty cell,
- 1 representing a fresh orange, or
- 2 representing a rotten orange.
Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.
Return the minimum number of minutes that must elapse until no fresh oranges remain. If this is impossible, return -1.

Example:
Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
Output: 4`,
      hint: "This is a multi-source BFS problem. Start BFS from all initially rotten oranges.",
      approach: "Initialize a queue with all initially rotten oranges. Count the total number of fresh oranges. Perform BFS: for each minute, expand rottenness to adjacent fresh oranges. Keep track of minutes passed and the number of fresh oranges rotten. If all fresh oranges are rotten, return minutes; otherwise, if no new oranges can rot and fresh oranges remain, return -1.",
      concepts: ["BFS"]
    },
    "Word Ladder": {
      problem: `A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:
- Every adjacent pair of words differs by a single letter.
- Every si for 1 <= i <= k is in wordList.
- endWord is in wordList.
Given two words, beginWord and endWord, and a dictionary wordList, return the number of words in the shortest transformation sequence from beginWord to endWord, or 0 if no such sequence exists.

Example:
Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
Output: 5
Explanation: One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> "cog", which has 5 words.`,
      hint: "This is a shortest path problem on an unweighted graph, which suggests BFS.",
      approach: "Build a graph where words are nodes and an edge exists between words differing by one character. Perform a BFS starting from `beginWord`. The level of the BFS when `endWord` is reached is the shortest path length. Use a set for `wordList` for O(1) lookups and a queue for BFS.",
      concepts: ["BFS"]
    },
    "Surrounded Regions": {
      problem: `Given an m x n matrix board containing 'X' and 'O', capture all regions that are 4-directionally surrounded by 'X'.
A region is captured by flipping all 'O's into 'X's in that surrounded region.

Example:
Input: board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
Explanation: The 'O's in the middle are surrounded and flipped to 'X's. The 'O' on the bottom left is not surrounded because it's connected to the boundary.`,
      hint: "Identify 'O's that are *not* surrounded. These are 'O's connected to the boundary. Then, flip all other 'O's.",
      approach: "Instead of looking for surrounded 'O's, look for 'O's that *cannot* be surrounded. These are 'O's on the border and any 'O's connected to them. Use DFS/BFS starting from all 'O's on the border to mark them (e.g., to '#'). Then, iterate through the board: flip remaining 'O's to 'X's and revert '#' back to 'O's.",
      concepts: ["DFS", "BFS"]
    },
    "Max Area of Island": {
      problem: `You are given an m x n binary matrix grid. An island is a group of '1's (representing land) connected 4-directionally (horizontal or vertical). You may assume all four edges of the grid are surrounded by water.
The area of an island is the number of cells with a value of '1' in the island.
Return the maximum area of an island in grid. If there is no island, return 0.

Example:
Input: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
Output: 6
Explanation: The largest island is shown in the image above.`,
      hint: "Similar to Number of Islands. Use DFS or BFS to traverse each island and count its size.",
      approach: "Iterate through each cell of the grid. If a cell contains a '1', start a DFS or BFS from that cell to explore and count the size of the island. Mark visited '1's as '0' to avoid recounting. Keep track of the maximum area found.",
      concepts: ["DFS", "BFS"]
    },
    "Walls and Gates": {
      problem: `You are given an m x n grid of rooms. Each room has one of three possible values:
- -1 representing a wall or an obstacle.
- 0 representing a gate.
- INF representing an empty room. We use the value 2^31 - 1 = 2147483647 to represent INF.
Fill each empty room with the distance to its nearest gate. If it is impossible to reach a gate, leave INF as the value.

Example:
Input: rooms = [[2147483647,-1,0,2147483647],[2147483647,2147483647,2147483647,-1],[2147483647,-1,2147483647,-1],[0,-1,2147483647,2147483647]]
Output: [[3,-1,0,1],[2,2,1,-1],[1,-1,2,-1],[0,-1,3,4]]`,
      hint: "This is a multi-source BFS problem. Start BFS from all gates simultaneously.",
      approach: "Initialize a queue with the coordinates of all gates (value 0). Perform a multi-source BFS. When exploring neighbors, if an empty room (INF) is encountered, update its distance to `current_distance + 1` and add it to the queue. Walls (-1) are ignored.",
      concepts: ["BFS"]
    },
    "Implement Trie": {
      problem: `A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.
Implement the Trie class:
- Trie() Initializes the trie object.
- void insert(String word) Inserts the string word into the trie.
- boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
- boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.

Example:
Input: ["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
       [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
Output: [null, null, true, false, true, null, true]`,
      hint: "Each node in the trie represents a character, and nodes have children for the next characters in a word.",
      approach: "Define a TrieNode class with a map/array for children and a boolean flag `isEndOfWord`. Implement `insert` by traversing and creating nodes as needed. For `search` and `startsWith`, traverse the trie; `search` also checks `isEndOfWord`.",
      concepts: ["Trie data structure"]
    },
    "Design Add and Search Words": {
      problem: `Design a data structure that supports adding new words and finding if a string matches any previously added word.
Implement the WordDictionary class:
- WordDictionary() Initializes the object.
- void addWord(word) Adds word to the data structure.
- boolean search(word) Returns true if word is in the data structure, false otherwise. A word can contain the dot character '.' to represent any one letter.

Example:
Input: ["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
       [[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
Output: [null,null,null,null,false,true,true,true]`,
      hint: "Use a Trie. When searching with '.', you'll need to explore all possible character branches recursively.",
      approach: "Implement a Trie. For `addWord`, it's standard Trie insertion. For `search`, when a `.` is encountered, recursively call the search function for all possible child nodes (a-z). If a character is not `.` (a-z), proceed to the specific child node.",
      concepts: ["Trie data structure", "DFS"]
    },
    "Word Search II": {
      problem: `Given an m x n board of characters and a list of strings words, return all words in words that can be found in the board.
Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in the same word.

Example:
Input: board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]
Output: ["eat","oath"]`,
      hint: "Use a Trie to store the words. Perform DFS (backtracking) on the board, using the Trie to guide the search for existing words and prefixes.",
      approach: "1. Build a Trie from all the `words`. 2. Iterate through each cell in the `board`. If the character at the cell is a starting character of any word in the Trie, begin a DFS (backtracking) search from that cell. 3. During DFS, traverse the Trie along with the board. If `isEndOfWord` is true at a Trie node, add the corresponding word to the results. Mark visited cells on the board to avoid reuse.",
      concepts: ["Trie data structure", "Backtracking", "DFS"]
    },
    "Min Cost Climbing Stairs": {
      problem: `You are given an integer array cost where cost[i] is the cost of a given step on a staircase. Once you pay the cost, you can either climb one or two steps.
You can either start from step 0 or step 1.
Return the minimum cost to reach the top of the floor.

Example:
Input: cost = [10,15,20]
Output: 15
Explanation: Cheapest is start on cost[1], pay 15, and go directly to the top.`,
      hint: "Similar to Climbing Stairs. DP approach: `dp[i]` is the minimum cost to reach step `i`.",
      approach: "Dynamic programming. `dp[i]` represents the minimum cost to reach step `i`. `dp[i] = cost[i] + min(dp[i-1], dp[i-2])`. Base cases: `dp[0] = cost[0]`, `dp[1] = cost[1]`. The final answer is `min(dp[n-1], dp[n-2])` for 0-indexed costs, or `dp[n]` if `dp[n]` represents cost to reach the top.",
      concepts: ["Dynamic programming"]
    },
    "House Robber II": {
      problem: `You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses are arranged in a circle. That means the first house is the neighbor of the last one.
Return the maximum amount of money you can rob without robbing adjacent houses.

Example:
Input: nums = [1,2,3,1]
Output: 4
Explanation: You can rob house 1 (money = 2) and then rob house 3 (money = 1).
Total amount = 2 + 1 = 3.
The maximum amount of money you can rob is 3.`,
      hint: "The circular arrangement means you can't rob both the first and last houses. Solve it as two separate linear House Robber problems.",
      approach: "Since the first and last houses are adjacent, you can either rob the first house or the last house, but not both. Solve the problem twice: once for houses `[0, n-2]` (excluding the last) and once for `[1, n-1]` (excluding the first). The maximum of these two results is the answer.",
      concepts: ["Dynamic programming"]
    },
    "Longest Palindromic Subsequence": {
      problem: `Given a string s, find the longest palindromic subsequence's length.
A subsequence is a sequence that can be derived from another sequence by deleting some characters (can be none) without changing the order of the remaining characters.

Example:
Input: s = "bbbab"
Output: 4
Explanation: One possible longest palindromic subsequence is "bbbb".`,
      hint: "This is a 2D DP problem. `dp[i][j]` is the length of the longest palindromic subsequence of `s[i...j]`.",
      approach: "Dynamic programming. Define `dp[i][j]` as the length of the longest palindromic subsequence of `s[i...j]`. If `s[i] == s[j]`, then `dp[i][j] = 2 + dp[i+1][j-1]`. Else, `dp[i][j] = max(dp[i+1][j], dp[i][j-1])`. Base cases: `dp[i][i] = 1`.",
      concepts: ["Dynamic programming"]
    },
    "Decode Ways": {
      problem: `A message containing letters from A-Z can be encoded into numbers using the following mapping:
'A' -> "1"
'B' -> "2"
...
'Z' -> "26"
To decode an encoded message, all digits must be grouped and then mapped back into letters using the reverse of the mapping above (and multiple mappings are possible).
Given a string s containing only digits, return the number of ways to decode it.

Example:
Input: s = "12"
Output: 2
Explanation: "12" could be decoded as "AB" (1 2) or "L" (12).`,
      hint: "Dynamic programming. Consider the last digit alone, and the last two digits together.",
      approach: "Dynamic programming. `dp[i]` is the number of ways to decode `s[0...i-1]`. Consider two cases: (1) `s[i-1]` forms a valid single digit. (2) `s[i-2]` and `s[i-1]` form a valid two-digit number. Sum the ways from these two cases.",
      concepts: ["Dynamic programming"]
    },
    "Maximum Product Subarray": {
      problem: `Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.
The test cases are generated so that the answer will fit in a 32-bit integer.

Example:
Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.`,
      hint: "At each step, the maximum product can come from the current number, or current number * max_so_far, or current number * min_so_far (because of negative numbers).",
      approach: "Dynamic programming. Maintain `max_so_far` and `min_so_far` for the product ending at the current position. Update these by considering the current number, `current * max_so_far`, and `current * min_so_far`. The overall maximum product is the maximum of all `max_so_far` values.",
      concepts: ["Dynamic programming", "State Tracking"]
    },
    "Word Break": {
      problem: `Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.
Note that the same word in the dictionary may be reused multiple times in the segmentation.

Example:
Input: s = "leetcode", wordDict = ["leet","code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".`,
      hint: "Dynamic programming. `dp[i]` means `s[0...i-1]` can be segmented. Iterate and check all possible split points.",
      approach: "Dynamic programming. Create a boolean array `dp` where `dp[i]` is true if `s[0...i-1]` can be segmented. Iterate from `i = 1` to `n`. For each `i`, iterate `j` from `0` to `i-1`. If `dp[j]` is true and `s.substring(j, i)` is in `wordDict`, then `dp[i]` is true.",
      concepts: ["Dynamic programming", "String operations"]
    },
    "Longest Increasing Subsequence": {
      problem: `Given an integer array nums, return the length of the longest strictly increasing subsequence.

Example:
Input: nums = [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.`,
      hint: "Dynamic programming, where `dp[i]` is the length of the LIS ending at index `i`.",
      approach: "Dynamic programming: `dp[i]` stores the length of the LIS ending with `nums[i]`. For each `nums[i]`, iterate through previous elements `nums[j]` (where `j < i`). If `nums[i] > nums[j]`, then `dp[i] = max(dp[i], dp[j] + 1)`. The overall answer is the maximum value in `dp`.",
      concepts: ["Dynamic programming", "LIS"]
    },
    "Partition Equal Subset Sum": {
      problem: `Given an integer array nums, return true if you can partition the array into two subsets such that the sum of the elements in both subsets is equal.

Example:
Input: nums = [1,5,11,5]
Output: true
Explanation: The array can be partitioned as [1, 5, 5] and [11].`,
      hint: "This is equivalent to finding if a subset with sum `total_sum / 2` exists. It's a variation of the knapsack problem.",
      approach: "First, check if the total sum of `nums` is odd. If so, it's impossible, return false. Otherwise, the problem reduces to finding if there's a subset that sums up to `total_sum / 2`. Use dynamic programming (0/1 Knapsack style): `dp[s]` is true if sum `s` can be formed. Iterate through `nums` and for each number `num`, update `dp[s]` to `dp[s] || dp[s - num]` for `s` from `target_sum` down to `num`.",
      concepts: ["Dynamic programming", "0/1 Knapsack"]
    },
    "Jump Game": {
      problem: `You are given an integer array nums. You are initially positioned at index 0. Each element nums[i] represents the maximum jump length from index i.
Return true if you can reach the last index, or false otherwise.

Example:
Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.`,
      hint: "Greedy approach: track the furthest reachable index.",
      approach: "Greedy approach. Maintain a variable `reachable` representing the furthest index that can be reached so far. Iterate through the array; if the current index `i` is greater than `reachable`, it means the last index is unreachable, return false. Otherwise, update `reachable = max(reachable, i + nums[i])`. If `reachable` is greater than or equal to `n-1`, return true.",
      concepts: ["Dynamic programming", "Greedy"]
    },
    "Jump Game II": {
      problem: `You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].
Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:
0 <= j <= nums[i] and
i + j < n
Return the minimum number of jumps to reach nums[n - 1].
The test cases are generated such that you can always reach nums[n - 1].

Example:
Input: nums = [2,3,1,1,4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2.
Jump 1 step from index 0 to 1, then 3 steps to the last index.`,
      hint: "This can be solved with BFS or a greedy approach. Focus on expanding the furthest reach with minimum jumps.",
      approach: "Greedy approach. Use three pointers: `jumps` (number of jumps), `current_reach` (farthest index reachable with `jumps` steps), and `next_farthest` (farthest index reachable with `jumps+1` steps). Iterate through the array. When `i` exceeds `current_reach`, increment `jumps` and update `current_reach` to `next_farthest`. Update `next_farthest` at each step.",
      concepts: ["Dynamic programming", "Greedy"]
    },
    "Subsets II": {
      problem: `Given an integer array nums that may contain duplicates, return all possible subsets (the power set).
The solution set must not contain duplicate subsets. Return the solution in any order.

Example:
Input: nums = [1,2,2]
Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]`,
      hint: "Sort the array to handle duplicates efficiently during backtracking. Skip duplicates at the current level of recursion.",
      approach: "Sort `nums`. Use backtracking. To avoid duplicate subsets, if the current element is the same as the previous element and was *not* included in the previous recursive call, skip it in the current branch. This ensures that each unique element is considered as a starting point for its own set of subsets.",
      concepts: ["Backtracking"]
    },
    "Combination Sum II": {
      problem: `Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.
Each number in candidates may only be used once in the combination.
Note: The solution set must not contain duplicate combinations.

Example:
Input: candidates = [10,1,2,7,6,1,5], target = 8
Output: [[1,1,6],[1,2,5],[1,7],[2,6]]`,
      hint: "Sort the array. Use backtracking, but when picking elements, skip duplicates to ensure unique combinations.",
      approach: "Sort `candidates`. Use backtracking. Similar to Combination Sum, but with an added condition to handle duplicates: if the current candidate is the same as the previous one, and the previous one was *not* used in the current combination branch, skip the current candidate to avoid duplicate combinations.",
      concepts: ["Backtracking"]
    },
    "Word Search": {
      problem: `Given an m x n grid of characters board and a string word, return true if word exists in the grid.
The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

Example:
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true`,
      hint: "Use DFS (backtracking) to explore all possible paths starting from each cell.",
      approach: "Iterate through each cell in the board. If a cell's character matches the first character of `word`, start a recursive DFS (backtracking) from that cell. The DFS function will explore adjacent cells, matching subsequent characters of `word`. Mark visited cells to avoid reuse. If a path is found that matches `word`, return true.",
      concepts: ["Backtracking", "DFS"]
    },
    "Palindrome Partitioning": {
      problem: `Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.

Example:
Input: s = "aab"
Output: [["a","a","b"],["aa","b"]]`,
      hint: "Use backtracking. At each step, try to find a palindrome substring starting from the current position, then recursively partition the rest.",
      approach: "Use backtracking. A recursive function takes the current starting index and the current list of palindromes. Iterate from the current index, checking if each substring `s[start...i]` is a palindrome. If it is, add it to the current list and recursively call the function for the remaining part of the string. Backtrack by removing the substring from the list.",
      concepts: ["Backtracking"]
    },
    "Letter Combinations of Phone Number": {
      problem: `Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.
A mapping of digits to letters (just like on a telephone buttons) is given. Note that 1 does not map to any letters.

Example:
Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]`,
      hint: "Use backtracking. For each digit, iterate through its corresponding letters and build combinations.",
      approach: "Use backtracking. Define a mapping from digits to letters. A recursive function builds combinations by iterating through the letters corresponding to the current digit and appending them to the current combination. Base case is when all digits are processed.",
      concepts: ["Backtracking"]
    },
    "Generate Parentheses": {
      problem: `Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

Example:
Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]`,
      hint: "Use backtracking. Maintain counts of open and close parentheses. Add '(' if `open < n`, and add ')' if `close < open`.",
      approach: "Use backtracking. A recursive function takes the current string, number of open parentheses, and number of close parentheses. Add '(' if `open < n`. Add ')' if `close < open`. Base case is when `open == n` and `close == n`, at which point a valid combination is found.",
      concepts: ["Backtracking"]
    },
    "N-Queens": {
      problem: `The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.
Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.
Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.

Example:
Input: n = 4
Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]`,
      hint: "Use backtracking. Place queens row by row. For each cell, check if placing a queen there is safe (no conflicts with previously placed queens).",
      approach: "Use backtracking. A recursive function tries to place a queen in the current row. For each column in the current row, check if it's safe (no queen in the same column, same diagonal). If safe, place the queen, mark positions, and recurse for the next row. If not safe, backtrack. Use sets or boolean arrays to efficiently check for conflicts.",
      concepts: ["Backtracking"]
    },
    "Find Median from Data Stream": {
      problem: `The median is the middle value in an ordered integer list. If the size of the list is even, there is no single middle value, and the median is the average of the two middle values.
Implement the MedianFinder class:
- MedianFinder() initializes the MedianFinder object.
- void addNum(int num) adds the integer num from the data stream to the data structure.
- double findMedian() returns the median of all elements so far. Answers within 10^-5 of the actual answer will be accepted.

Example:
Input: ["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
       [[], [1], [2], [], [3], []]
Output: [null, null, null, 1.5, null, 2.0]`,
      hint: "Use two heaps: a max-heap for the lower half and a min-heap for the upper half. Balance their sizes.",
      approach: "Maintain two heaps: a **max-heap** (`max_heap`) for the smaller half of numbers and a **min-heap** (`min_heap`) for the larger half. When adding a number, add it to `max_heap` first, then balance by moving the top of `max_heap` to `min_heap`. Ensure `min_heap` never has more than one more element than `max_heap` (or vice-versa, depending on convention). The median is then either the top of the larger heap or the average of the two tops.",
      concepts: ["Heap", "Two Heaps"]
    },
    "Task Scheduler": {
      problem: `Given a character array tasks, representing the tasks a CPU needs to do, where each letter represents a different task. Tasks can be done in any order. Each task takes one unit of time.
For each unit of time, the CPU can either complete one task or just be idle.
However, there is a non-negative integer n that represents the cooldown period between two same tasks (the same letter in the array), that is, that there must be at least n units of time between two executions of the same task.
Return the minimum number of units of time the CPU will take to finish all the given tasks.

Example:
Input: tasks = ["A","A","A","B","B","C"], n = 2
Output: 8
Explanation: A -> B -> C -> A -> B -> idle -> A`,
      hint: "Greedy approach: prioritize tasks with the highest frequency and then consider the cooldown period.",
      approach: "Count task frequencies. Use a max-heap to store task frequencies. In a loop, simulate time. In each cycle (of length `n+1`), try to pick the `n+1` most frequent tasks from the heap. If a task is picked, decrement its frequency. If a task's frequency becomes 0, discard it. If a task's frequency is still > 0, put it back into a temporary list for the next cycle. The total time is the sum of cycles and remaining tasks.",
      concepts: ["Heap", "Greedy"]
    },
    "Design Twitter": {
      problem: `Design a simplified version of Twitter.
Implement the Twitter class:
- Twitter() Initializes your twitter object.
- void postTweet(int userId, int tweetId) Composes a new tweet with ID tweetId by user userId. Each call to this function will be made with a unique tweetId.
- List<Integer> getNewsFeed(int userId) Retrieves the 10 most recent tweet IDs in the user's news feed. A user's news feed consists of tweets posted by the user themselves and by all the users that the user follows. Tweets should be ordered from most recent to least recent.
- void follow(int followerId, int followeeId) The user followerId started following the user followeeId.
- void unfollow(int followerId, int followeeId) The user followerId stopped following the user followeeId.

Example:
Input: ["Twitter", "postTweet", "getNewsFeed", "follow", "postTweet", "getNewsFeed", "unfollow", "getNewsFeed"]
       [[], [1, 5], [1], [1, 2], [2, 6], [1], [1, 2], [1]]
Output: [null, null, [5], null, null, [6, 5], null, [5]]`,
      hint: "Use hash maps for user-to-tweets and user-to-followers relationships. Use a min-heap to efficiently get the 10 most recent tweets from multiple sources.",
      approach: "Use a hash map to store `userId -> list of tweetId` (with timestamp). Another hash map stores `userId -> set of followedUserIds`. For `getNewsFeed`, collect tweets from the user themselves and all followed users. Use a max-heap (priority queue) to merge these tweets by timestamp and retrieve the 10 most recent.",
      concepts: ["Heap", "Design"]
    },
    "K Closest Points to Origin": {
      problem: `Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).
The distance between two points (x1, y1) and (x2, y2) is Euclidean distance sqrt((x2 - x1)^2 + (y2 - y1)^2).
You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).

Example:
Input: points = [[1,3],[-2,2]], k = 1
Output: [[-2,2]]
Explanation:
The distance between (1, 3) and the origin is sqrt(10).
The distance between (-2, 2) and the origin is sqrt(8).
Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
We only want the k = 1 closest point.`,
      hint: "Use a min-heap of size k, or use quickselect algorithm.",
      approach: "Method 1: Use min-heap of size k. Iterate through array, maintain heap of k largest elements. Method 2: Quickselect - partition array like quicksort, but only recurse on the side containing the kth element.",
      concepts: ["Heap", "Quickselect"],
      difficulty: "Medium",
      pattern: "Heap"
    },
    "Last Stone Weight": {
      problem: `You are given an array of integers stones where stones[i] is the weight of the ith stone.
We are playing a game with the stones. On each turn, we choose the heaviest two stones and smash them together. Suppose the heaviest two stones have weights x and y with x <= y. The result of this smash is:
- If x == y, both stones are destroyed.
- If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
At the end of the game, there is at most one stone left.
Return the weight of the last remaining stone or 0 if none remain.

Example:
Input: stones = [2,7,4,1,8,1]
Output: 1
Explanation:
We combine 7 and 8 to get 1. Stones array will be [2,4,1,1,1].
We combine 2 and 1 to get 1. Stones array will be [4,1,1,1].
We combine 4 and 1 to get 3. Stones array will be [3,1,1].
We combine 3 and 1 to get 2. Stones array will be [2,1].
We combine 2 and 1 to get 1. Stones array will be [1].
The last stone is 1.`,
      hint: "A max-heap can efficiently provide the two heaviest stones.",
      approach: "Insert all stone weights into a max-heap. While the heap has more than one stone, repeatedly extract the two largest stones (`y` and `x`). If `x != y`, push `y - x` back into the heap. If the heap is empty, return 0; otherwise, return the remaining stone's weight.",
      concepts: ["Heap"]
    },
    "Unique Paths": {
      problem: `There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.
Return the number of possible unique paths that the robot can take to reach the bottom-right corner.

Example:
Input: m = 3, n = 7
Output: 28`,
      hint: "This is a 2D DP problem. The number of ways to reach (i, j) is the sum of ways to reach (i-1, j) and (i, j-1).",
      approach: "Dynamic programming. Create a `dp` table of size `m x n`. `dp[i][j]` represents the number of unique paths to reach cell `(i, j)`. Initialize the first row and first column with 1s (only one way to reach them). For other cells, `dp[i][j] = dp[i-1][j] + dp[i][j-1]`. The answer is `dp[m-1][n-1]`.",
      concepts: ["Dynamic programming", "Grid DP"]
    },
    "Longest Common Subsequence": {
      problem: `Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.
A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.
For example, "ace" is a subsequence of "abcde".
A common subsequence of two strings is a subsequence that is common to both strings.

Example:
Input: text1 = "abcde", text2 = "ace"
Output: 3
Explanation: The longest common subsequence is "ace", and its length is 3.`,
      hint: "This is a classic 2D DP problem. `dp[i][j]` is the length of the LCS of `text1[0...i-1]` and `text2[0...j-1]`.",
      approach: "Dynamic programming. Create a `dp` table of size `(m+1) x (n+1)`. `dp[i][j]` represents the length of the LCS of `text1[0...i-1]` and `text2[0...j-1]`. Initialize first row and column. If `text1[i-1] == text2[j-1]`, then `dp[i][j] = 1 + dp[i-1][j-1]`. Otherwise, `dp[i][j] = max(dp[i-1][j], dp[i][j-1])`. The answer is `dp[m][n]`.",
      concepts: ["Dynamic programming", "String DP"]
    },
    "Best Time to Buy/Sell Stock with Cooldown": {
      problem: `You are given an array prices where prices[i] is the price of a given stock on the ith day.
Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times) with the following restrictions:
- After you sell your stock, you cannot buy stock on the next day (i.e., cooldown period is 1 day).
Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

Example:
Input: prices = [1,2,3,0,2]
Output: 3
Explanation: transactions = [buy, sell, cooldown, buy, sell] => 3`,
      hint: "This is a state machine DP problem. At each day, you can be in one of three states: buying, selling, or cooling down.",
      approach: "Dynamic programming with states. Define `buy[i]`, `sell[i]` and `cool[i]` as the maximum profit at day `i` being in respective states. `buy[i]` depends on `cool[i-1]` or `buy[i-1]`. `sell[i]` depends on `buy[i-1]`. `cool[i]` depends on `sell[i-1]` or `cool[i-1]`. Update these states for each day.",
      concepts: ["Dynamic programming", "State Machine DP"]
    },
    "Coin Change 2": {
      problem: `You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.
Return the number of combinations that make up that amount. If that amount of money cannot be made up by any combination of the coins, return 0.
You may assume that you have an infinite number of each kind of coin.

Example:
Input: amount = 5, coins = [1,2,5]
Output: 4
Explanation: There are four ways to make up the amount:
5=5
5=2+2+1
5=2+1+1+1
5=1+1+1+1+1`,
      hint: "This is an unbounded knapsack problem. `dp[i]` represents the number of ways to make sum `i`.",
      approach: "Dynamic programming. `dp[i]` is the number of ways to make sum `i`. Initialize `dp[0] = 1`. Iterate through each `coin` in `coins`. For each `coin`, iterate `j` from `coin` to `amount`. `dp[j] += dp[j - coin]`. This ensures combinations are counted exactly once.",
      concepts: ["Dynamic programming", "2D Knapsack"]
    },
    "Target Sum": {
      problem: `You are given an integer array nums and an integer target.
You want to build an expression out of nums by adding one of the symbols '+' or '-' before each integer in nums and then concatenate all the integers.
Return the number of different expressions that you can build, which evaluates to target.

Example:
Input: nums = [1,1,1,1,1], target = 3
Output: 5
Explanation: There are 5 ways to assign symbols to make the sum of 3.
-1 + 1 + 1 + 1 + 1 = 3
+1 - 1 + 1 + 1 + 1 = 3
+1 + 1 - 1 + 1 + 1 = 3
+1 + 1 + 1 - 1 + 1 = 3
+1 + 1 + 1 + 1 - 1 = 3`,
      hint: "This can be converted to a subset sum problem. `(sum(P) - sum(N)) = target`, where `P` are positive numbers and `N` are negative. Since `sum(P) + sum(N) = total_sum`, we get `2 * sum(P) = target + total_sum`.",
      approach: "This problem can be transformed into a subset sum problem. Let `sum(P)` be the sum of numbers with a `+` sign and `sum(N)` be the sum of numbers with a `-` sign. We want `sum(P) - sum(N) = target`. Also, `sum(P) + sum(N) = total_sum`. Adding these two equations gives `2 * sum(P) = target + total_sum`. So, we need to find the number of subsets whose sum is `(target + total_sum) / 2`. Use dynamic programming similar to `Coin Change 2` or `Partition Equal Subset Sum`.",
      concepts: ["Dynamic programming", "2D DP"]
    },
    "Interleaving String": {
      problem: `Given three strings s1, s2, and s3, find whether s3 is formed by an interleaving of s1 and s2.
An interleaving of two strings s and t is a configuration where s and t are both substrings of the result and are arranged in a way that preserves their original order. For example, "abc" is an interleaving of "ab" and "c" (s = "ab", t = "c"). The length of s3 is s1.length + s2.length.

Example:
Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
Output: true`,
      hint: "This is a 2D DP problem. `dp[i][j]` represents if `s3[0...i+j-1]` can be formed by interleaving `s1[0...i-1]` and `s2[0...j-1]`.",
      approach: "Dynamic programming. Create a `dp` table of size `(m+1) x (n+1)` where `dp[i][j]` is true if `s3` (up to length `i+j`) can be formed by interleaving `s1` (up to length `i`) and `s2` (up to length `j`). `dp[i][j]` is true if `dp[i-1][j]` is true and `s1[i-1] == s3[i+j-1]` OR if `dp[i][j-1]` is true and `s2[j-1] == s3[i+j-1]`.",
      concepts: ["Dynamic programming", "String DP"]
    },
    "Unique Paths II": {
      problem: `You are given an m x n integer array grid. There is a robot initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.
An obstacle and space are marked as 1 or 0 respectively in grid. A path that contains an obstacle cannot be the target path.
Return the number of unique paths to reach the bottom-right corner.
The test cases are generated such that the number of unique paths will fit in a 32-bit integer.

Example:
Input: obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
Output: 2
Explanation: There is one obstacle in the middle of the 3x3 grid above.
There are two ways to travel from the top-left corner to the bottom-right corner:
1. Right -> Right -> Down -> Down
2. Down -> Down -> Right -> Right`,
      hint: "Similar to Unique Paths, but obstacles mean paths are blocked. If `grid[i][j]` is an obstacle, `dp[i][j]` is 0.",
      approach: "Dynamic programming. Create a `dp` table. Initialize `dp[0][0]` to 1 if it's not an obstacle. For the first row and column, if a cell is not an obstacle, `dp[i][0] = dp[i-1][0]` and `dp[0][j] = dp[0][j-1]`. For other cells, if `grid[i][j]` is not an obstacle, `dp[i][j] = dp[i-1][j] + dp[i][j-1]`. Otherwise, `dp[i][j] = 0`.",
      concepts: ["Dynamic programming", "Grid DP"]
    },
    "Minimum Path Sum": {
      problem: `Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.
Note: You can only move either down or right at any point in time.

Example:
Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
Output: 7
Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.`,
      hint: "This is a 2D DP problem. `dp[i][j]` is the minimum path sum to reach `(i, j)`.",
      approach: "Dynamic programming. Create a `dp` table of the same size as `grid`. `dp[i][j]` stores the minimum path sum to reach cell `(i, j)`. Initialize `dp[0][0] = grid[0][0]`. For the first row and column, fill based on previous cells. For other cells, `dp[i][j] = grid[i][j] + min(dp[i-1][j], dp[i][j-1])`. The answer is `dp[m-1][n-1]`.",
      concepts: ["Dynamic programming", "Grid DP"]
    },
    "Edit Distance": {
      problem: `Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.
You have the following three operations permitted on a word:
- Insert a character
- Delete a character
- Replace a character

Example:
Input: word1 = "horse", word2 = "ros"
Output: 3
Explanation:
horse -> rorse (replace 'h' with 'r')
rorse -> rose (remove 'r')
rose -> ros (remove 'e')`,
      hint: "This is a classic 2D DP problem. `dp[i][j]` is the minimum edit distance between `word1[0...i-1]` and `word2[0...j-1]`.",
      approach: "Dynamic programming. Create a `dp` table of size `(m+1) x (n+1)`. `dp[i][j]` represents the edit distance between `word1[0...i-1]` and `word2[0...j-1]`. Initialize first row and column. If `word1[i-1] == word2[j-1]`, then `dp[i][j] = dp[i-1][j-1]`. Else, `dp[i][j] = 1 + min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])` (delete, insert, replace respectively).",
      concepts: ["Dynamic programming", "String DP"]
    },
    "Regular Expression Matching": {
      problem: `Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*'.
'.' Matches any single character.
'*' Matches zero or more of the preceding element.
The matching should cover the entire input string (not partial).

Example:
Input: s = "aa", p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".

Input: s = "aa", p = "a*"
Output: true
Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".`,
      hint: "This is a 2D DP problem. `dp[i][j]` represents if `s[0...i-1]` matches `p[0...j-1]`.",
      approach: "Dynamic programming. Create a `dp` table of size `(m+1) x (n+1)`. `dp[i][j]` is true if `s[0...i-1]` matches `p[0...j-1]`. Handle base cases (empty string/pattern). For `p[j-1] == '.'`, `dp[i][j] = dp[i-1][j-1]`. For `p[j-1] == '*'`, it can match zero or more times: `dp[i][j] = dp[i][j-2]` (zero occurrences) or (`dp[i-1][j]` if `s[i-1]` matches `p[j-2]` (one or more occurrences)). For other characters, `dp[i][j] = dp[i-1][j-1]` if `s[i-1] == p[j-1]`.",
      concepts: ["Dynamic programming", "String DP"],
      difficulty: "Hard",
      pattern: "Dynamic Programming"
    },

    "Valid Anagram": {
      problem: `Given two strings s and t, return true if t is an anagram of s, and false otherwise.
An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example:
Input: s = "anagram", t = "nagaram"
Output: true

Example:
Input: s = "rat", t = "car"
Output: false`,
      hint: "Count the frequency of each character in both strings and compare.",
      approach: "Method 1: Sort both strings and compare. Method 2: Use a frequency map to count characters in both strings and compare the counts.",
      concepts: ["Hash Map", "Sorting"],
      difficulty: "Easy",
      pattern: "Frequency Count"
    },

    "Valid Palindrome": {
      problem: `A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.
Given a string s, return true if it is a palindrome, or false otherwise.

Example:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.`,
      hint: "Use two pointers from both ends, skipping non-alphanumeric characters.",
      approach: "Convert to lowercase and use two pointers. Move left pointer right and right pointer left, skipping non-alphanumeric characters. Compare characters at both pointers.",
      concepts: ["Two pointers technique", "String processing"],
      difficulty: "Easy",
      pattern: "Two Pointers"
    },

    "Longest Substring Without Repeating": {
      problem: `Given a string s, find the length of the longest substring without repeating characters.

Example:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.`,
      hint: "Use sliding window with a hash set to track characters in current window.",
      approach: "Sliding window technique. Use two pointers and a hash set. Expand right pointer and add characters to set. If duplicate found, shrink from left until no duplicates. Track maximum window size.",
      concepts: ["Sliding window", "Hash Set"],
      difficulty: "Medium",
      pattern: "Sliding Window"
    },

    "Group Anagrams": {
      problem: `Given an array of strings strs, group the anagrams together. You can return the answer in any order.
An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]`,
      hint: "Use sorted string as key to group anagrams together.",
      approach: "For each string, sort its characters to create a key. Use this key in a hash map to group anagrams together. All anagrams will have the same sorted key.",
      concepts: ["Hash Map", "Sorting"],
      difficulty: "Medium",
      pattern: "Hash Map"
    },

    "Valid Parentheses": {
      problem: `Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:
1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.

Example:
Input: s = "()[]{}"
Output: true`,
      hint: "Use a stack to keep track of opening brackets.",
      approach: "Iterate through the string. Push opening brackets onto stack. For closing brackets, check if stack is empty or if the top doesn't match. Stack should be empty at the end.",
      concepts: ["Stack"],
      difficulty: "Easy",
      pattern: "Stack"
    },

    "Reverse Linked List": {
      problem: `Given the head of a singly linked list, reverse the list, and return the reversed list.

Example:
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]`,
      hint: "Use three pointers: previous, current, and next.",
      approach: "Iterative: Use three pointers to reverse links one by one. Recursive: Reverse the rest of the list first, then fix the current link.",
      concepts: ["Linked List", "Pointers"],
      difficulty: "Easy",
      pattern: "Iterative/Recursive"
    },

    "Merge Two Sorted Lists": {
      problem: `You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
Return the head of the merged linked list.

Example:
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]`,
      hint: "Use a dummy node and two pointers to merge.",
      approach: "Create a dummy node. Use two pointers to traverse both lists. Compare values and link the smaller node. Continue until one list is exhausted, then link the remaining list.",
      concepts: ["Linked List", "Two pointers technique"],
      difficulty: "Easy",
      pattern: "Two Pointers"
    },

    "Linked List Cycle": {
      problem: `Given head, the head of a linked list, determine if the linked list has a cycle in it.
There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer.

Example:
Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).`,
      hint: "Use Floyd's Cycle Detection Algorithm (tortoise and hare).",
      approach: "Use two pointers, slow and fast. Slow moves one step, fast moves two steps. If there's a cycle, they will eventually meet. If fast reaches null, there's no cycle.",
      concepts: ["Linked List", "Floyd's Algorithm"],
      difficulty: "Easy",
      pattern: "Floyd's Algorithm"
    },

    "LRU Cache": {
      problem: `Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.
Implement the LRUCache class:
- LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
- int get(int key) Return the value of the key if the key exists, otherwise return -1.
- void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.

Example:
Input: ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
       [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
Output: [null, null, null, 1, null, -1, null, -1, 3, 4]`,
      hint: "Use a hash map for O(1) access and a doubly linked list for O(1) insertion/deletion.",
      approach: "Combine hash map and doubly linked list. Hash map stores key -> node mapping. Doubly linked list maintains order (most recent at head, least recent at tail). Move accessed nodes to head, remove from tail when capacity exceeded.",
      concepts: ["Hash Map", "Doubly Linked List", "Design"],
      difficulty: "Medium",
      pattern: "Design"
    },

    "Maximum Depth of Binary Tree": {
      problem: `Given the root of a binary tree, return its maximum depth.
A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Example:
Input: root = [3,9,20,null,null,15,7]
Output: 3`,
      hint: "Use recursion to find the maximum depth of left and right subtrees.",
      approach: "Recursive: max depth = 1 + max(left subtree depth, right subtree depth). Base case: null node has depth 0. Iterative: use BFS and count levels.",
      concepts: ["Binary Tree", "Recursion", "DFS"],
      difficulty: "Easy",
      pattern: "DFS"
    },

    "Same Tree": {
      problem: `Given the roots of two binary trees p and q, write a function to check if they are the same or not.
Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

Example:
Input: p = [1,2,3], q = [1,2,3]
Output: true`,
      hint: "Recursively compare nodes and their children.",
      approach: "Recursive comparison: check if current nodes have same value, then recursively check left and right subtrees. Handle null cases properly.",
      concepts: ["Binary Tree", "Recursion", "DFS"],
      difficulty: "Easy",
      pattern: "DFS"
    },

    "Invert Binary Tree": {
      problem: `Given the root of a binary tree, invert the tree, and return its root.

Example:
Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]`,
      hint: "Swap left and right children for each node.",
      approach: "Recursive: swap left and right children, then recursively invert left and right subtrees. Iterative: use a queue/stack to process nodes level by level.",
      concepts: ["Binary Tree", "Recursion", "DFS"],
      difficulty: "Easy",
      pattern: "DFS"
    },

    "Binary Tree Level Order Traversal": {
      problem: `Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

Example:
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]`,
      hint: "Use BFS with a queue to traverse level by level.",
      approach: "Use BFS with a queue. Process nodes level by level. For each level, record all node values before moving to next level. Use queue size to determine level boundaries.",
      concepts: ["Binary Tree", "BFS", "Queue"],
      difficulty: "Medium",
      pattern: "BFS"
    },

    "Number of Islands": {
      problem: `Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example:
Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1`,
      hint: "Use DFS or BFS to mark connected components.",
      approach: "Iterate through grid. When you find a '1', increment island count and use DFS/BFS to mark all connected '1's as visited (change to '0' or use visited array).",
      concepts: ["DFS", "BFS", "Grid traversal"],
      difficulty: "Medium",
      pattern: "DFS/BFS"
    },

    "Course Schedule": {
      problem: `There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.
Return true if you can finish all courses. Otherwise, return false.

Example:
Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So it is possible.`,
      hint: "This is cycle detection in a directed graph. Use topological sort or DFS.",
      approach: "Build adjacency list and in-degree array. Use Kahn's algorithm (BFS): start with nodes having in-degree 0, remove edges and add new zero in-degree nodes to queue. If all nodes are processed, no cycle exists.",
      concepts: ["Graph", "Topological sort", "Cycle detection"],
      difficulty: "Medium",
      pattern: "Topological Sort"
    },

    "Climbing Stairs": {
      problem: `You are climbing a staircase. It takes n steps to reach the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Example:
Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps`,
      hint: "This is the Fibonacci sequence. Each step can be reached from the previous step or two steps back.",
      approach: "Dynamic programming: dp[i] = dp[i-1] + dp[i-2]. Base cases: dp[1] = 1, dp[2] = 2. Can be optimized to use O(1) space.",
      concepts: ["Dynamic programming", "Fibonacci"],
      difficulty: "Easy",
      pattern: "Basic DP"
    },

    "House Robber": {
      problem: `You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.
Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

Example:
Input: nums = [1,2,3,1]
Output: 4
Explanation: You can rob house 1 (money = 2) and then rob house 3 (money = 1).
Total amount = 2 + 1 = 3.
The maximum amount of money you can rob is 3.`,
      hint: "For each house, decide whether to rob it or not based on maximum profit.",
      approach: "Dynamic programming: dp[i] = max(dp[i-1], nums[i] + dp[i-2]). Either rob current house plus best from two houses ago, or don't rob and take best from previous house.",
      concepts: ["Dynamic programming", "State machine"],
      difficulty: "Medium",
      pattern: "State Machine"
    },

    "Coin Change": {
      problem: `You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.
Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

Example:
Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1`,
      hint: "Use dynamic programming. For each amount, try all coins and take minimum.",
      approach: "Bottom-up DP: dp[i] = minimum coins needed for amount i. dp[i] = min(dp[i], dp[i-coin] + 1) for all coins ≤ i. Initialize dp[0] = 0, others to infinity.",
      concepts: ["Dynamic programming", "Unbounded knapsack"],
      difficulty: "Medium",
      pattern: "Unbounded Knapsack"
    },

    "Subsets": {
      problem: `Given an integer array nums of unique elements, return all possible subsets (the power set).
The solution set must not contain duplicate subsets. Return the solution in any order.

Example:
Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]`,
      hint: "Use backtracking. For each element, you can either include it or not.",
      approach: "Backtracking: build subsets by making binary choices (include/exclude) for each element. Use recursion with current index and current subset. Add current subset to result at each recursive call.",
      concepts: ["Backtracking", "Recursion"],
      difficulty: "Medium",
      pattern: "Backtracking"
    },

    "Combination Sum": {
      problem: `Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may use the same number multiple times.
The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

Example:
Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]`,
      hint: "Use backtracking. You can reuse the same number multiple times.",
      approach: "Backtracking: try each candidate number, subtract from target, and recurse. If target becomes 0, add current combination. If target < 0, backtrack. Allow reusing same number by not incrementing start index.",
      concepts: ["Backtracking", "Recursion"],
      difficulty: "Medium",
      pattern: "Backtracking"
    },

    "Permutations": {
      problem: `Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

Example:
Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]`,
      hint: "Use backtracking. Keep track of used elements.",
      approach: "Backtracking: build permutations by choosing available elements. Use a boolean array or remove/add elements to track usage. When permutation length equals input length, add to result.",
      concepts: ["Backtracking", "Recursion"],
      difficulty: "Medium",
      pattern: "Backtracking"
    },

    "Kth Largest Element in Array": {
      problem: `Given an integer array nums and an integer k, return the kth largest element in the array.
Note that it is the kth largest element in sorted order, not the kth distinct element.
Can you solve it without sorting?

Example:
Input: nums = [3,2,1,5,6,4], k = 2
Output: 5`,
      hint: "Use a min-heap of size k, or use quickselect algorithm.",
      approach: "Method 1: Use min-heap of size k. Iterate through array, maintain heap of k largest elements. Method 2: Quickselect - partition array like quicksort, but only recurse on the side containing the kth element.",
      concepts: ["Heap", "Quickselect"],
      difficulty: "Medium",
      pattern: "Heap"
    },

    "Top K Frequent Elements": {
      problem: `Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

Example:
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]`,
      hint: "Count frequencies, then use heap or bucket sort to find top k.",
      approach: "Count frequencies using hash map. Use min-heap of size k to track k most frequent elements, or use bucket sort where index represents frequency.",
      concepts: ["Heap", "Hash Map", "Bucket sort"],
      difficulty: "Medium",
      pattern: "Heap"
    }

  };

