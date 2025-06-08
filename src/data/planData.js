export const learningPlan = {
    1: {
      title: "Arrays & Strings Foundation",
      focus: "Master the basics that appear in 60% of interviews",
      topics: [
        {
          id: "w1-arrays",
          title: "Arrays & Two Pointers",
          timeLearn: "40 min",
          timePractice: "90 min",
          concepts: ["Two pointers technique", "Sliding window", "Prefix sums", "Binary search"],
          problems: [
            { name: "Two Sum", difficulty: "Easy", pattern: "Hash Map", essential: true },
            { name: "Best Time to Buy and Sell Stock", difficulty: "Easy", pattern: "One Pass", essential: true },
            { name: "Contains Duplicate", difficulty: "Easy", pattern: "Hash Set", essential: true },
            { name: "Product of Array Except Self", difficulty: "Medium", pattern: "Prefix/Suffix", essential: true },
            { name: "Maximum Subarray", difficulty: "Medium", pattern: "Kadane's Algorithm", essential: true },
            { name: "Container With Most Water", difficulty: "Medium", pattern: "Two Pointers", essential: true },
            { name: "3Sum", difficulty: "Medium", pattern: "Two Pointers", essential: true },
            { name: "Search in Rotated Sorted Array", difficulty: "Medium", pattern: "Binary Search", essential: true },
            { name: "Find First and Last Position in Sorted Array", difficulty: "Medium", pattern: "Binary Search" },
            { name: "Search a 2D Matrix", difficulty: "Medium", pattern: "Binary Search" },
            { name: "Koko Eating Bananas", difficulty: "Medium", pattern: "Binary Search" },
            { name: "4Sum", difficulty: "Medium", pattern: "Two Pointers" },
            { name: "Remove Duplicates from Sorted Array", difficulty: "Easy", pattern: "Two Pointers" },
            { name: "Trapping Rain Water", difficulty: "Hard", pattern: "Two Pointers" }
          ]
        },
        {
          id: "w1-strings",
          title: "String Manipulation",
          timeLearn: "30 min",
          timePractice: "60 min",
          concepts: ["String operations", "Pattern matching", "Palindromes", "Sliding window"],
          problems: [
            { name: "Valid Anagram", difficulty: "Easy", pattern: "Frequency Count", essential: true },
            { name: "Valid Palindrome", difficulty: "Easy", pattern: "Two Pointers", essential: true },
            { name: "Longest Substring Without Repeating", difficulty: "Medium", pattern: "Sliding Window", essential: true },
            { name: "Longest Repeating Character Replacement", difficulty: "Medium", pattern: "Sliding Window", essential: true },
            { name: "Group Anagrams", difficulty: "Medium", pattern: "Hash Map", essential: true },
            { name: "Longest Palindromic Substring", difficulty: "Medium", pattern: "Expand Around Center", essential: true },
            { name: "Palindromic Substrings", difficulty: "Medium", pattern: "Expand Around Center" },
            { name: "Valid Parentheses", difficulty: "Easy", pattern: "Stack", essential: true },
            { name: "Encode and Decode Strings", difficulty: "Medium", pattern: "String Design" },
            { name: "String to Integer (atoi)", difficulty: "Medium", pattern: "String Parsing" },
            { name: "Minimum Window Substring", difficulty: "Hard", pattern: "Sliding Window" }
          ]
        }
      ]
    },
    2: {
      title: "Linked Lists & Stacks/Queues",
      focus: "Linear data structures - building blocks for complex algorithms",
      topics: [
        {
          id: "w2-linked",
          title: "Linked Lists",
          timeLearn: "45 min",
          timePractice: "85 min",
          concepts: ["Traversal", "Reversal", "Fast/slow pointers", "Merging", "Cycle detection"],
          problems: [
            { name: "Reverse Linked List", difficulty: "Easy", pattern: "Iterative/Recursive", essential: true },
            { name: "Merge Two Sorted Lists", difficulty: "Easy", pattern: "Two Pointers", essential: true },
            { name: "Linked List Cycle", difficulty: "Easy", pattern: "Floyd's Algorithm", essential: true },
            { name: "Remove Nth Node From End", difficulty: "Medium", pattern: "Two Pass", essential: true },
            { name: "Reorder List", difficulty: "Medium", pattern: "Multiple Steps", essential: true },
            { name: "Add Two Numbers", difficulty: "Medium", pattern: "Simulation", essential: true },
            { name: "Copy List with Random Pointer", difficulty: "Medium", pattern: "Hash Map/Weaving" },
            { name: "Find Duplicate Number", difficulty: "Medium", pattern: "Floyd's Algorithm" },
            { name: "LRU Cache", difficulty: "Medium", pattern: "Design", essential: true },
            { name: "Remove Duplicates from Sorted List", difficulty: "Easy", pattern: "Traversal" },
            { name: "Palindrome Linked List", difficulty: "Easy", pattern: "Two Pointers" },
            { name: "Intersection of Two Linked Lists", difficulty: "Easy", pattern: "Two Pointers" },
            { name: "Reverse Nodes in k-Group", difficulty: "Hard", pattern: "Iterative Reversal" },
            { name: "Merge k Sorted Lists", difficulty: "Hard", pattern: "Divide & Conquer", essential: true }
          ]
        },
        {
          id: "w2-stack-queue",
          title: "Stacks & Queues",
          timeLearn: "35 min",
          timePractice: "55 min",
          concepts: ["LIFO/FIFO operations", "Monotonic stack", "Queue with stacks", "Expression evaluation"],
          problems: [
            { name: "Min Stack", difficulty: "Medium", pattern: "Design", essential: true },
            { name: "Evaluate Reverse Polish Notation", difficulty: "Medium", pattern: "Stack" },
            { name: "Daily Temperatures", difficulty: "Medium", pattern: "Monotonic Stack", essential: true },
            { name: "Car Fleet", difficulty: "Medium", pattern: "Monotonic Stack" },
            { name: "Implement Queue using Stacks", difficulty: "Easy", pattern: "Design" },
            { name: "Next Greater Element I", difficulty: "Easy", pattern: "Monotonic Stack" },
            { name: "Next Greater Element II", difficulty: "Medium", pattern: "Monotonic Stack" },
            { name: "Largest Rectangle in Histogram", difficulty: "Hard", pattern: "Monotonic Stack" }
          ]
        }
      ]
    },
    3: {
      title: "Trees & Binary Search",
      focus: "Tree traversals and search algorithms - very common in interviews",
      topics: [
        {
          id: "w3-trees",
          title: "Binary Trees",
          timeLearn: "50 min",
          timePractice: "100 min",
          concepts: ["DFS/BFS traversals", "Tree construction", "Path problems", "Serialization"],
          problems: [
            { name: "Maximum Depth of Binary Tree", difficulty: "Easy", pattern: "DFS", essential: true },
            { name: "Same Tree", difficulty: "Easy", pattern: "DFS", essential: true },
            { name: "Invert Binary Tree", difficulty: "Easy", pattern: "DFS", essential: true },
            { name: "Binary Tree Level Order Traversal", difficulty: "Medium", pattern: "BFS", essential: true },
            { name: "Subtree of Another Tree", difficulty: "Medium", pattern: "DFS", essential: true },
            { name: "Lowest Common Ancestor of BST", difficulty: "Medium", pattern: "BST Properties", essential: true },
            { name: "Binary Tree Right Side View", difficulty: "Medium", pattern: "BFS/DFS" },
            { name: "Count Good Nodes in Binary Tree", difficulty: "Medium", pattern: "DFS" },
            { name: "Validate Binary Search Tree", difficulty: "Medium", pattern: "DFS", essential: true },
            { name: "Kth Smallest Element in BST", difficulty: "Medium", pattern: "In-order", essential: true },
            { name: "Construct Binary Tree from Preorder and Inorder", difficulty: "Medium", pattern: "Recursion", essential: true },
            { name: "Diameter of Binary Tree", difficulty: "Easy", pattern: "DFS" },
            { name: "Balanced Binary Tree", difficulty: "Easy", pattern: "DFS" },
            { name: "Symmetric Tree", difficulty: "Easy", pattern: "DFS" },
            { name: "Path Sum", difficulty: "Easy", pattern: "DFS" },
            { name: "Binary Tree Zigzag Level Order", difficulty: "Medium", pattern: "BFS" },
            { name: "Binary Tree Maximum Path Sum", difficulty: "Hard", pattern: "DFS", essential: true },
            { name: "Serialize and Deserialize Binary Tree", difficulty: "Hard", pattern: "DFS/BFS" }
          ]
        }
      ]
    },
    4: {
      title: "Graphs & Advanced Trees",
      focus: "Graph algorithms and BST operations",
      topics: [
        {
          id: "w4-graphs",
          title: "Graph Algorithms",
          timeLearn: "55 min",
          timePractice: "95 min",
          concepts: ["DFS/BFS on graphs", "Topological sort", "Union-find", "Matrix traversal"],
          problems: [
            { name: "Number of Islands", difficulty: "Medium", pattern: "DFS/BFS", essential: true },
            { name: "Clone Graph", difficulty: "Medium", pattern: "DFS/BFS", essential: true },
            { name: "Pacific Atlantic Water Flow", difficulty: "Medium", pattern: "DFS/BFS" },
            { name: "Course Schedule", difficulty: "Medium", pattern: "Topological Sort", essential: true },
            { name: "Course Schedule II", difficulty: "Medium", pattern: "Topological Sort" },
            { name: "Number of Connected Components", difficulty: "Medium", pattern: "Union Find" },
            { name: "Graph Valid Tree", difficulty: "Medium", pattern: "Union Find/DFS" },
            { name: "Rotting Oranges", difficulty: "Medium", pattern: "Multi-source BFS" },
            { name: "Word Ladder", difficulty: "Hard", pattern: "BFS", essential: true },
            { name: "Surrounded Regions", difficulty: "Medium", pattern: "DFS/BFS" },
            { name: "Max Area of Island", difficulty: "Medium", pattern: "DFS/BFS" },
            { name: "Walls and Gates", difficulty: "Medium", pattern: "Multi-source BFS" }
          ]
        },
        {
          id: "w4-trie",
          title: "Trie & Advanced Trees",
          timeLearn: "35 min",
          timePractice: "55 min",
          concepts: ["Trie data structure", "Prefix matching", "Word search"],
          problems: [
            { name: "Implement Trie", difficulty: "Medium", pattern: "Design", essential: true },
            { name: "Design Add and Search Words", difficulty: "Medium", pattern: "Trie + DFS" },
            { name: "Word Search II", difficulty: "Hard", pattern: "Trie + Backtracking", essential: true }
          ]
        }
      ]
    },
    5: {
      title: "Dynamic Programming Foundation",
      focus: "1D DP patterns - foundation for optimization problems",
      topics: [
        {
          id: "w5-dp1d",
          title: "1D Dynamic Programming",
          timeLearn: "60 min",
          timePractice: "90 min",
          concepts: ["Memoization", "Tabulation", "State transitions", "Optimization problems"],
          problems: [
            { name: "Climbing Stairs", difficulty: "Easy", pattern: "Basic DP", essential: true },
            { name: "Min Cost Climbing Stairs", difficulty: "Easy", pattern: "Basic DP" },
            { name: "House Robber", difficulty: "Medium", pattern: "State Machine", essential: true },
            { name: "House Robber II", difficulty: "Medium", pattern: "State Machine" },
            { name: "Longest Palindromic Subsequence", difficulty: "Medium", pattern: "String DP" },
            { name: "Decode Ways", difficulty: "Medium", pattern: "Decision DP", essential: true },
            { name: "Coin Change", difficulty: "Medium", pattern: "Unbounded Knapsack", essential: true },
            { name: "Maximum Product Subarray", difficulty: "Medium", pattern: "State Tracking" },
            { name: "Word Break", difficulty: "Medium", pattern: "String DP", essential: true },
            { name: "Longest Increasing Subsequence", difficulty: "Medium", pattern: "LIS", essential: true },
            { name: "Partition Equal Subset Sum", difficulty: "Medium", pattern: "0/1 Knapsack" },
            { name: "Jump Game", difficulty: "Medium", pattern: "Greedy/DP" },
            { name: "Jump Game II", difficulty: "Medium", pattern: "Greedy/DP" }
          ]
        }
      ]
    },
    6: {
      title: "Advanced Patterns & 2D DP",
      focus: "Backtracking, heaps, and multi-dimensional problems",
      topics: [
        {
          id: "w6-backtrack",
          title: "Backtracking",
          timeLearn: "45 min",
          timePractice: "75 min",
          concepts: ["Backtracking template", "Permutations/Combinations", "Constraint satisfaction"],
          problems: [
            { name: "Subsets", difficulty: "Medium", pattern: "Backtracking", essential: true },
            { name: "Combination Sum", difficulty: "Medium", pattern: "Backtracking", essential: true },
            { name: "Permutations", difficulty: "Medium", pattern: "Backtracking", essential: true },
            { name: "Subsets II", difficulty: "Medium", pattern: "Backtracking" },
            { name: "Combination Sum II", difficulty: "Medium", pattern: "Backtracking" },
            { name: "Word Search", difficulty: "Medium", pattern: "Backtracking", essential: true },
            { name: "Palindrome Partitioning", difficulty: "Medium", pattern: "Backtracking" },
            { name: "Letter Combinations of Phone Number", difficulty: "Medium", pattern: "Backtracking" },
            { name: "Generate Parentheses", difficulty: "Medium", pattern: "Backtracking" },
            { name: "N-Queens", difficulty: "Hard", pattern: "Backtracking" }
          ]
        },
        {
          id: "w6-heap",
          title: "Heaps & Priority Queues",
          timeLearn: "35 min",
          timePractice: "65 min",
          concepts: ["Heap operations", "Priority queues", "Top K problems", "Merge operations"],
          problems: [
            { name: "Kth Largest Element in Array", difficulty: "Medium", pattern: "Heap", essential: true },
            { name: "Top K Frequent Elements", difficulty: "Medium", pattern: "Heap", essential: true },
            { name: "Find Median from Data Stream", difficulty: "Hard", pattern: "Two Heaps", essential: true },
            { name: "Task Scheduler", difficulty: "Medium", pattern: "Heap/Greedy" },
            { name: "Design Twitter", difficulty: "Medium", pattern: "Heap + Design" },
            { name: "K Closest Points to Origin", difficulty: "Medium", pattern: "Heap" },
            { name: "Last Stone Weight", difficulty: "Easy", pattern: "Heap" }
          ]
        },
        {
          id: "w6-dp2d",
          title: "2D Dynamic Programming",
          timeLearn: "40 min",
          timePractice: "80 min",
          concepts: ["Grid DP", "Path problems", "String matching", "Game theory"],
          problems: [
            { name: "Unique Paths", difficulty: "Medium", pattern: "Grid DP", essential: true },
            { name: "Longest Common Subsequence", difficulty: "Medium", pattern: "String DP", essential: true },
            { name: "Best Time to Buy/Sell Stock with Cooldown", difficulty: "Medium", pattern: "State Machine DP" },
            { name: "Coin Change 2", difficulty: "Medium", pattern: "2D Knapsack" },
            { name: "Target Sum", difficulty: "Medium", pattern: "2D DP" },
            { name: "Interleaving String", difficulty: "Medium", pattern: "String DP" },
            { name: "Unique Paths II", difficulty: "Medium", pattern: "Grid DP" },
            { name: "Minimum Path Sum", difficulty: "Medium", pattern: "Grid DP" },
            { name: "Edit Distance", difficulty: "Hard", pattern: "String DP", essential: true },
            { name: "Regular Expression Matching", difficulty: "Hard", pattern: "String DP" }
          ]
        }
      ]
    }
  };

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
      approach: "Iterate through each cell in the board. If the cell's character matches the first character of `word`, start a recursive DFS (backtracking) from that cell. The DFS function will explore adjacent cells, matching subsequent characters of `word`. Mark visited cells to avoid reuse. If a path is found that matches `word`, return true.",
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
      hint: "Use a max-heap to keep track of the k closest points encountered so far. When a new point is considered, if it's closer than the farthest point in the heap, remove the farthest and add the new one.",
      approach: "Use a max-heap. Iterate through the points. For each point, calculate its squared Euclidean distance to the origin (to avoid `sqrt`). Push `(distance, point)` onto the max-heap. If the heap size exceeds `k`, pop the largest element (farthest point). After iterating all points, the heap will contain the `k` closest points.",
      concepts: ["Heap"]
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
The test cases are generated so that the number of unique paths will fit in a 32-bit integer.

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
      concepts: ["Dynamic programming", "String DP"]
    }
  };

export const conceptsInfo = {
  "Two pointers technique": {
    description: "A technique where two pointers iterate through the data structure at different speeds or directions to solve problems efficiently. Common patterns include: opposite ends moving inward (for sorted arrays), fast/slow pointers (cycle detection), and sliding window variations. This approach often reduces time complexity from O(n²) to O(n) by avoiding nested loops. Used extensively in array problems, linked list cycle detection, and palindrome verification."
  },
  "Sliding window": {
    description: "A method for keeping track of a subset of elements in a list/array as you move through it, maintaining a 'window' of elements that slides across the data structure. The window can be fixed-size or variable-size depending on the problem. This technique is particularly useful for finding subarrays or substrings that meet certain criteria (max sum, contains all characters, etc.). It transforms many O(n²) brute force solutions into efficient O(n) algorithms by avoiding redundant calculations."
  },
  "Prefix sums": {
    description: "An array preprocessing technique where each element stores the cumulative sum of all elements from the beginning up to that index. This enables O(1) range sum queries after O(n) preprocessing. The sum of elements from index i to j can be calculated as prefixSum[j] - prefixSum[i-1]. Variations include 2D prefix sums for matrices and can be extended to other operations like XOR. Essential for problems involving subarray sums, range queries, and optimization problems."
  },
  "Binary search": {
    description: "A highly efficient search algorithm that finds a target value within a sorted array by repeatedly dividing the search interval in half. Time complexity is O(log n). The algorithm compares the target with the middle element and eliminates half of the remaining elements at each step. Can be applied to various problems beyond simple searching, including finding boundaries, search in rotated arrays, and optimization problems where you're searching for a value in a solution space."
  },
  "Hash Map": {
    description: "A data structure that implements an associative array abstract data type, mapping keys to values using a hash function. Provides average O(1) time complexity for insertion, deletion, and lookup operations. Hash maps handle collisions through techniques like chaining or open addressing. They're fundamental for solving problems involving frequency counting, two-sum variations, caching, and anywhere you need fast key-value lookups. Understanding hash functions and collision resolution is crucial for optimal performance."
  },
  "Hash Set": {
    description: "A collection data structure that stores unique elements with no duplicates, typically implemented using a hash table. Provides O(1) average time complexity for insertion, deletion, and membership testing. Hash sets are perfect for duplicate detection, maintaining unique collections, and set operations (union, intersection, difference). They're commonly used in problems involving checking element existence, removing duplicates, and graph algorithms where you need to track visited nodes."
  },
  "Kadane's Algorithm": {
    description: "An elegant dynamic programming algorithm that finds the maximum sum contiguous subarray within a one-dimensional array in O(n) time. The algorithm maintains a running sum and resets it to 0 whenever it becomes negative, keeping track of the maximum sum seen so far. This works because including a negative prefix would only decrease the total sum. The algorithm demonstrates the principle of optimal substructure and is a classic example of greedy dynamic programming."
  },
  "DFS": {
    description: "Depth-First Search is a fundamental graph and tree traversal algorithm that explores as far as possible along each branch before backtracking. It can be implemented recursively (using the call stack) or iteratively (using an explicit stack). DFS is used for topological sorting, detecting cycles, path finding, connected components, and tree/graph analysis. In trees, DFS includes preorder, inorder, and postorder traversals. Time complexity is O(V + E) for graphs and O(n) for trees."
  },
  "BFS": {
    description: "Breadth-First Search is a graph and tree traversal algorithm that explores all neighbors at the current depth before moving to nodes at the next depth level. Implemented using a queue data structure, BFS guarantees finding the shortest path in unweighted graphs. It's essential for level-order tree traversals, shortest path problems, minimum spanning trees, and problems requiring layer-by-layer exploration. Time complexity is O(V + E) for graphs. BFS is particularly useful when you need to find the minimum number of steps to reach a goal."
  },
  "Backtracking": {
    description: "A systematic method for solving constraint satisfaction problems by exploring all possible solutions and abandoning (backtracking from) partial solutions that cannot lead to a valid complete solution. The algorithm builds solutions incrementally and undoes choices when they lead to a dead end. Backtracking is used for generating permutations, combinations, solving puzzles (N-Queens, Sudoku), and finding all possible solutions to a problem. It's essentially a refined brute force approach that prunes the search space intelligently."
  },
  "Dynamic programming": {
    description: "A method for solving complex problems by breaking them down into simpler subproblems and storing the results to avoid redundant computation. DP problems exhibit optimal substructure (optimal solution contains optimal solutions to subproblems) and overlapping subproblems. Two main approaches: memoization (top-down, recursive with caching) and tabulation (bottom-up, iterative table filling). DP transforms exponential time algorithms into polynomial time solutions. Common patterns include linear DP, grid DP, interval DP, and state machine DP."
  },
  "Stack": {
    description: "A linear data structure that follows the Last In First Out (LIFO) principle, where elements are added and removed from the same end (top). Primary operations are push (add element), pop (remove top element), and peek/top (view top element without removing). Stacks are fundamental for function call management, expression evaluation, undo operations, and parsing. They're crucial for implementing recursion iteratively, handling nested structures, and solving problems involving matching pairs or maintaining order."
  },
  "Linked List": {
    description: "A linear data structure where elements (nodes) are stored in sequence, but not in contiguous memory locations. Each node contains data and a reference (pointer) to the next node. Unlike arrays, linked lists allow efficient insertion and deletion at any position (O(1) if you have the reference), but don't support random access (O(n) to reach a specific position). Variations include singly linked, doubly linked, and circular linked lists. They're essential for implementing other data structures and handling dynamic memory allocation."
  },
  "Heap": {
    description: "A specialized tree-based data structure that satisfies the heap property: in a max heap, parent nodes are greater than or equal to their children; in a min heap, parent nodes are less than or equal to their children. Heaps are typically implemented as complete binary trees using arrays for efficient storage. They provide O(log n) insertion and deletion of the min/max element, and O(1) access to the min/max. Heaps are fundamental for priority queues, heap sort, and algorithms requiring efficient access to extreme values."
  },
  "Graph": {
    description: "A non-linear data structure consisting of vertices (nodes) connected by edges. Graphs can be directed or undirected, weighted or unweighted, cyclic or acyclic. They're represented using adjacency matrices, adjacency lists, or edge lists. Graphs model relationships and networks in computer science, from social networks to computer networks to dependencies. Key algorithms include traversals (DFS, BFS), shortest path (Dijkstra, Floyd-Warshall), minimum spanning tree (Kruskal, Prim), and topological sorting."
  },
  "Doubly Linked List": {
    description: "A type of linked list where each node contains data and two pointers: one to the next node and one to the previous node. This bidirectional linking allows traversal in both directions and enables efficient insertion and deletion at both ends. While it uses more memory than singly linked lists (extra pointer per node), it provides more flexibility for certain operations. Doubly linked lists are used in implementing deques, browser history, undo/redo functionality, and LRU caches."
  },
  "Trie": {
    description: "A tree-like data structure used to store a dynamic set of strings, where each node represents a character and paths from root to nodes represent string prefixes. Tries excel at prefix-based operations like autocomplete, spell checking, and IP routing. Each node typically contains an array/map of children (one for each possible character) and a flag indicating if it represents the end of a valid word. Tries provide O(m) time complexity for insertion, deletion, and search where m is the string length, regardless of how many strings are stored."
  },
  "String operations": {
    description: "Fundamental operations performed on string data structures including concatenation (joining strings), substring extraction (getting parts of strings), character access and modification, length calculation, and comparison. These operations form the basis for more complex string algorithms. Understanding string immutability in various languages, character encoding (ASCII, Unicode), and efficient string manipulation techniques is crucial. String operations are fundamental for text processing, parsing, pattern matching, and data validation."
  },
  "String parsing": {
    description: "The process of analyzing a string of characters to extract meaningful information or convert it into other data types. Parsing involves recognizing patterns, extracting tokens, handling whitespace and special characters, and validating format. Common parsing tasks include converting strings to numbers, extracting dates, processing configuration files, and implementing custom data formats. Parsing often involves state machines, regular expressions, or custom algorithms and is essential for compilers, interpreters, and data processing applications."
  },
  "String design": {
    description: "Techniques for structuring and encoding strings to efficiently represent and transmit data. This includes designing custom encoding schemes, choosing appropriate delimiters, handling escape characters, and ensuring data integrity. String design considerations include readability, parseability, extensibility, and size optimization. Examples include CSV formats, URL encoding, JSON structure design, and custom serialization protocols. Good string design balances human readability with machine efficiency and accounts for edge cases and special characters."
  },
  "Traversal": {
    description: "The systematic process of visiting each element in a data structure exactly once in a specific order. Different data structures have different traversal methods: arrays use index iteration, linked lists follow pointers, trees have multiple traversal orders (preorder, inorder, postorder, level-order), and graphs use DFS or BFS. Traversal is fundamental for searching, processing, copying, and analyzing data structures. The choice of traversal method affects algorithm efficiency and the order in which operations are performed on elements."
  },
  "Reversal": {
    description: "The process of changing the order of elements in a data structure to their opposite arrangement. In arrays, this means swapping elements from opposite ends moving toward the center. In linked lists, it involves changing the direction of pointers so that the last node becomes the first. Reversal can be done iteratively (using loops and temporary variables) or recursively (using the call stack). Understanding reversal is crucial for palindrome detection, data structure manipulation, and many algorithmic problems."
  },
  "Fast/slow pointers": {
    description: "A two-pointer technique where two pointers traverse a data structure at different speeds, typically one moving one step at a time (slow/tortoise) and another moving two steps (fast/hare). This technique is famous for Floyd's cycle detection algorithm but has many applications: finding the middle of a linked list, detecting cycles, finding the start of a cycle, and removing nth node from the end. The mathematical principle ensures that if there's a cycle, the fast pointer will eventually meet the slow pointer within the cycle."
  },
  "Merging": {
    description: "The fundamental process of combining two or more sorted data structures into a single sorted structure while maintaining the sorted order. Merging is the core operation in merge sort and is used in many divide-and-conquer algorithms. The basic merge algorithm uses two pointers to compare elements from the input structures and selects the smaller element at each step. Merging can be applied to arrays, linked lists, and is essential for external sorting algorithms when data doesn't fit in memory."
  },
  "Cycle detection": {
    description: "Algorithms designed to determine whether a cycle exists within a data structure, meaning there's a path that starts and ends at the same node. In linked lists, a cycle occurs when a node's next pointer points to a previously visited node. In graphs, cycles can be detected using DFS (looking for back edges) or by tracking node states (white, gray, black). Cycle detection is crucial for preventing infinite loops, validating data structure integrity, and solving problems in graph theory and dynamic programming."
  },
  "Floyd's Algorithm": {
    description: "Floyd's Cycle-Finding Algorithm, also known as the 'tortoise and hare' algorithm, is an elegant pointer algorithm that detects cycles in a sequence of values using only O(1) space. It employs two pointers moving at different speeds: if there's a cycle, they will eventually meet inside the cycle. The algorithm has two phases: detection (finding if a cycle exists) and finding the start of the cycle. This technique extends beyond linked lists to any sequence where you can define a 'next' function, making it applicable to various mathematical and computational problems."
  },
  "Two Pass": {
    description: "An algorithmic approach where the data structure is processed twice to solve a problem, with each pass serving a specific purpose. The first pass typically gathers information (like counting elements, finding length, or identifying key positions), while the second pass performs the actual operation using the information from the first pass. This technique is common in linked list problems where you need to know the length beforehand, or in array problems where you need to understand the overall data distribution before processing."
  },
  "Multiple Steps": {
    description: "A problem-solving approach that breaks complex problems into several distinct, sequential phases where each phase has a specific responsibility and the output of one phase becomes the input for the next. This methodology makes complex problems manageable by isolating concerns and allows for easier debugging and testing. Examples include: finding the middle of a linked list, reversing the second half, and then merging; or building a graph representation, performing DFS, and then analyzing results. Each step should have a clear, single responsibility."
  },
  "Simulation": {
    description: "An algorithmic approach that mimics real-world processes or systems step-by-step to understand their behavior or solve problems. Simulation involves modeling the rules and state changes of a system and executing them programmatically. This approach is useful for problems involving games, physical systems, or any scenario where you need to track state changes over time. Examples include simulating robot movement on a grid, modeling queue systems, or replicating the behavior of data structures through their operations."
  },
  "Iterative/Recursive": {
    description: "Two fundamental programming paradigms for solving problems. Iterative solutions use loops (for, while) to repeat operations, maintaining state in variables and explicitly controlling the flow. Recursive solutions break problems into smaller instances of the same problem, using function calls and the call stack to manage state. Each approach has trade-offs: iteration typically uses constant stack space but may require more complex state management, while recursion often leads to cleaner code but uses O(n) stack space and may hit stack overflow limits for large inputs."
  },
  "Iterative Reversal": {
    description: "The process of reversing a data structure using iterative methods (loops) rather than recursion. In linked list reversal, this involves maintaining three pointers (previous, current, next) and iteratively changing the direction of links. Iterative reversal uses O(1) space complexity compared to recursive approaches that use O(n) stack space. This technique is fundamental for in-place modifications of data structures and is often preferred when stack space is limited or when processing very large data structures."
  },
  "Divide & Conquer": {
    description: "A fundamental algorithmic paradigm that recursively breaks down problems into smaller, more manageable subproblems of the same type, solves them independently, and then combines their solutions to solve the original problem. The approach typically has three steps: divide (break the problem), conquer (solve subproblems recursively), and combine (merge solutions). Classic examples include merge sort, quicksort, and binary search. D&C often leads to efficient algorithms with time complexities like O(n log n) and is particularly effective for problems that can be naturally split into independent parts."
  },
  "LIFO/FIFO operations": {
    description: "Two fundamental data access patterns that define how elements are added and removed from data structures. LIFO (Last In, First Out) describes stack behavior where the most recently added element is the first to be removed, like a stack of plates. FIFO (First In, First Out) describes queue behavior where the first element added is the first to be removed, like a line of people. Understanding these patterns is crucial for choosing appropriate data structures and for problems involving order dependencies, scheduling, and resource management."
  },
  "Monotonic Stack": {
    description: "A stack data structure where elements are maintained in a specific monotonic order - either strictly increasing or strictly decreasing from bottom to top. When a new element violates the monotonic property, elements are popped from the stack until the property is restored. Monotonic stacks are powerful for solving problems involving finding the next greater/smaller element, calculating areas in histograms, and solving range queries. They often transform O(n²) brute force solutions into efficient O(n) algorithms by avoiding redundant comparisons."
  },
  "Queue with stacks": {
    description: "A technique for implementing a queue's FIFO behavior using two stacks (which have LIFO behavior). One stack (input) handles enqueue operations, while the other (output) handles dequeue operations. When dequeuing from an empty output stack, all elements from the input stack are transferred to the output stack, reversing their order and achieving FIFO behavior. This implementation provides amortized O(1) time complexity for both operations and demonstrates how different data structures can be combined to achieve desired behaviors."
  },
  "Expression evaluation": {
    description: "The systematic process of parsing and computing the value of mathematical, logical, or programming expressions. This involves handling operator precedence, associativity, and parentheses correctly. Common approaches include using two stacks (one for operands, one for operators), converting to postfix notation (Reverse Polish Notation), or building expression trees. Expression evaluation is fundamental in compilers, calculators, and interpreters, and requires understanding of formal grammar, parsing techniques, and data structure manipulation."
  },
  "Tree construction": {
    description: "The process of building tree data structures from various input formats such as arrays, traversal sequences, or other representations. Common construction problems include building binary trees from preorder/inorder traversals, constructing BSTs from sorted arrays, or creating trees from parent-child relationships. Tree construction often involves understanding the properties of different tree types, recursive building strategies, and the relationship between different traversal orders. These skills are essential for serialization/deserialization and data structure conversion problems."
  },
  "Path problems": {
    description: "A category of tree and graph problems that involve finding paths between nodes that satisfy specific conditions or optimize certain criteria. Examples include finding the maximum sum path, longest path, paths with specific properties, or all paths between two nodes. Path problems often require DFS traversal with backtracking, dynamic programming on trees, or maintaining state during traversal. These problems are fundamental in tree/graph algorithms and often involve concepts like recursion, memoization, and optimal substructure."
  },
  "Serialization": {
    description: "The process of converting a data structure or object into a format that can be stored, transmitted, or reconstructed later. In trees, this involves encoding the structure and values in a string or array format that preserves all necessary information. Common approaches include preorder/postorder traversals with null markers, level-order traversal, or custom encoding schemes. Deserialization is the reverse process of reconstructing the original structure. This concept is crucial for data persistence, network communication, and system integration."
  },
  "BST Properties": {
    description: "Binary Search Trees have specific structural properties that enable efficient searching, insertion, and deletion. The key property is that for any node, all values in the left subtree are less than the node's value, and all values in the right subtree are greater. This property enables O(log n) operations in balanced BSTs. Additional properties include: inorder traversal yields sorted sequence, no duplicate values (in standard BSTs), and recursive structure. Understanding BST properties is crucial for validation, construction, and optimization problems involving binary search trees."
  },
  "In-order": {
    description: "A depth-first tree traversal method that visits nodes in the order: left subtree, root node, right subtree. For binary search trees, in-order traversal produces elements in ascending sorted order, making it particularly useful for problems requiring sorted processing of BST elements. In-order traversal can be implemented recursively (using call stack) or iteratively (using explicit stack). This traversal pattern is essential for BST validation, finding kth smallest elements, and converting BSTs to sorted arrays or other structures."
  },
  "Recursion": {
    description: "A programming technique where a function calls itself to solve smaller instances of the same problem, eventually reaching a base case that stops the recursion. Recursion is natural for problems with recursive structure like trees, fractals, and divide-and-conquer algorithms. Every recursive solution needs: base case(s) to terminate recursion, recursive case(s) that make progress toward the base case, and proper parameter passing. While recursion can make code more elegant and easier to understand, it uses stack space proportional to the recursion depth and can lead to stack overflow for deep recursions."
  },
  "Topological sort": {
    description: "An algorithm for linearly ordering the vertices of a directed acyclic graph (DAG) such that for every directed edge from vertex U to vertex V, U appears before V in the ordering. This ordering represents a valid sequence of operations when there are dependencies between tasks. Two main algorithms: Kahn's algorithm (BFS-based using in-degrees) and DFS-based approach (using finishing times). Topological sorting is essential for scheduling problems, build systems, course prerequisites, and any scenario involving dependency resolution."
  },
  "Union find": {
    description: "A data structure that efficiently tracks a partition of a set into disjoint subsets, supporting two primary operations: Find (determine which subset an element belongs to) and Union (merge two subsets). Also known as Disjoint Set Union (DSU), it uses techniques like path compression and union by rank to achieve nearly constant amortized time complexity. Union-find is crucial for problems involving connectivity, equivalence relations, and dynamic connectivity queries. It's fundamental in algorithms like Kruskal's minimum spanning tree and detecting cycles in undirected graphs."
  },
  "Matrix traversal": {
    description: "Systematic methods for visiting cells in a 2D grid or matrix, essential for grid-based problems in competitive programming and real-world applications. Common patterns include row-by-row, column-by-column, diagonal traversal, spiral traversal, and boundary traversal. Matrix traversal often involves careful boundary checking, direction vectors for adjacent cells, and state tracking for visited cells. These techniques are fundamental for problems involving shortest paths in grids, flood fill algorithms, dynamic programming on grids, and image processing applications."
  },
  "Multi-source BFS": {
    description: "A variation of Breadth-First Search where the traversal simultaneously begins from multiple starting nodes, treating them all as if they're at distance 0. All initial sources are added to the queue at the beginning, and the algorithm proceeds like regular BFS. This technique is powerful for problems involving finding distances from a set of sources, such as finding the nearest gate, spreading infections, or calculating minimum distances to any of several targets. Multi-source BFS often transforms complex problems into elegant solutions with optimal time complexity."
  },
  "Trie data structure": {
    description: "A specialized tree data structure designed for efficiently storing and retrieving strings, where each node represents a character and paths from root to nodes represent string prefixes. Tries excel at prefix-based operations like autocomplete, spell checking, and IP routing. Each node typically contains an array/map of children (one for each possible character) and a flag indicating if it represents the end of a valid word. Tries provide O(m) time complexity for insertion, deletion, and search where m is the string length, regardless of how many strings are stored."
  },
  "Prefix matching": {
    description: "The process of finding all strings in a collection that begin with a given prefix, efficiently supported by tree-based data structures like Tries. Prefix matching is fundamental for autocomplete systems, search suggestions, command-line interfaces, and text processing applications. The efficiency comes from the shared storage of common prefixes in the tree structure. Advanced variations include fuzzy prefix matching (allowing errors), weighted prefix matching (for ranking suggestions), and compressed tries for memory efficiency in large-scale applications."
  },
  "Word search": {
    description: "Algorithms designed to find words within a grid of characters, typically allowing movement to adjacent cells (horizontally, vertically, and sometimes diagonally). The basic approach uses backtracking with DFS to explore all possible paths from each starting cell. Advanced techniques involve Trie-based searches for finding multiple words simultaneously, which significantly improves efficiency when searching for many words in the same grid. Word search problems teach important concepts like backtracking, state management, and optimization techniques for search algorithms."
  },
  "Memoization": {
    description: "A top-down dynamic programming optimization technique that stores the results of expensive function calls and returns cached results when the same inputs occur again. Memoization transforms recursive algorithms with overlapping subproblems from exponential to polynomial time complexity. It's typically implemented using hash maps or arrays to store computed results. The technique is particularly effective for problems with optimal substructure and overlapping subproblems, such as Fibonacci calculation, longest common subsequence, and many optimization problems. Memoization preserves the natural recursive structure while adding efficiency."
  },
  "Tabulation": {
    description: "A bottom-up dynamic programming approach where solutions are built iteratively from the smallest subproblems up to the target problem, typically using arrays or tables to store intermediate results. Unlike memoization, tabulation avoids recursion and builds solutions systematically from base cases. This approach often provides better space and time constants and avoids potential stack overflow issues. Tabulation requires understanding the dependency relationships between subproblems and filling the DP table in the correct order. It's generally preferred for problems where all subproblems need to be solved."
  },
  "State transitions": {
    description: "In dynamic programming, the mathematical relationships that define how the solution to a problem depends on solutions to its subproblems. State transitions are expressed as recurrence relations that capture the optimal substructure property. Understanding state transitions involves identifying the state space (what parameters define a subproblem), the base cases (smallest solvable problems), and the recursive relationships. Well-defined state transitions ensure that the DP solution correctly captures the problem's structure and leads to optimal solutions."
  },
  "Optimization problems": {
    description: "A class of problems that seek to find the best solution among all feasible solutions, typically involving maximizing or minimizing an objective function subject to constraints. In algorithmic contexts, these often involve finding optimal paths, schedules, allocations, or configurations. Dynamic programming is particularly effective for optimization problems with optimal substructure (optimal solutions contain optimal solutions to subproblems) and overlapping subproblems. Common examples include shortest path problems, knapsack variants, and resource allocation problems."
  },
  "Basic DP": {
    description: "Fundamental dynamic programming problems that introduce core concepts like optimal substructure, overlapping subproblems, and state definition. These problems typically have simple state spaces and clear recurrence relations, making them ideal for learning DP principles. Examples include Fibonacci numbers, climbing stairs, and simple path counting problems. Mastering basic DP involves understanding when to use memoization vs tabulation, how to identify state variables, and how to derive recurrence relations from problem constraints."
  },
  "State Machine": {
    description: "Dynamic programming problems where the solution depends on being in different 'states' at each step, with specific transition rules between states. Each state represents a different condition or configuration, and the optimal solution considers the best way to transition between states. Classic examples include stock trading problems (holding vs not holding stock), game problems (player turns), and resource management (different resource levels). State machine DP requires clearly defining states, understanding legal transitions, and tracking optimal values for each state at each step."
  },
  "String DP": {
    description: "Dynamic programming problems specifically dealing with string manipulation, comparison, and optimization. These problems often involve comparing characters, finding patterns, or transforming one string into another. Common patterns include: character-by-character comparison (longest common subsequence), transformation problems (edit distance), and pattern matching (regular expressions). String DP typically uses 2D tables where dimensions represent positions in the strings being compared, and solutions build character-by-character relationships."
  },
  "Decision DP": {
    description: "Dynamic programming problems where at each step there are discrete choices or decisions that lead to different subproblems, and the goal is to make optimal decisions at each step. These problems typically involve binary choices (take/don't take) or multiple alternatives (choose from several options). The key is understanding how each decision affects future possibilities and using DP to explore all decision sequences efficiently. Examples include knapsack problems, coin change, and path problems with multiple routes."
  },
  "Unbounded Knapsack": {
    description: "A variation of the classic knapsack problem where items can be selected multiple times (unlimited quantity of each item), as opposed to the 0/1 knapsack where each item can be taken at most once. The DP approach differs in that when considering an item, you don't move to the next item but can consider the same item again. This leads to different recurrence relations and iterative patterns. Unbounded knapsack models problems like coin change (unlimited coins of each denomination) and resource allocation with renewable resources."
  },
  "State Tracking": {
    description: "Dynamic programming technique where the optimal solution depends not just on the current position but also on additional state information carried from previous steps. This might include tracking the maximum/minimum value seen so far, the previous choice made, parity conditions, or other problem-specific state. State tracking expands the DP state space beyond simple position-based indexing and requires careful consideration of what information is necessary to make optimal decisions at each step."
  },
  "LIS": {
    description: "Longest Increasing Subsequence is a classic dynamic programming problem where the goal is to find the longest subsequence of a given sequence where elements are in strictly increasing order. The basic DP solution is O(n²), but there's an elegant O(n log n) solution using binary search and patience sorting concepts. LIS problems teach important DP concepts and have many variations: longest decreasing subsequence, weighted LIS, and multidimensional LIS. The problem demonstrates how different algorithmic approaches can lead to significant complexity improvements."
  },
  "0/1 Knapsack": {
    description: "The classic optimization problem where you have a knapsack with limited capacity and a set of items, each with a weight and value. The goal is to maximize total value while staying within the weight constraint, with each item usable at most once (0 or 1 times). This problem perfectly demonstrates dynamic programming principles: optimal substructure (optimal solution contains optimal solutions to subproblems) and overlapping subproblems. The DP solution builds a table considering items one by one and all possible weight capacities."
  },
  "Greedy": {
    description: "An algorithmic paradigm that makes locally optimal choices at each step with the hope of finding a global optimum. Greedy algorithms are often simpler and more efficient than dynamic programming but only work when the greedy choice property holds (local optimum leads to global optimum). Key to greedy algorithms is proving correctness through exchange arguments or other techniques. Examples include Huffman coding, activity selection, and minimum spanning tree algorithms. Understanding when greedy works versus when DP is needed is crucial for algorithm design."
  },
  "Backtracking template": {
    description: "A systematic framework for implementing backtracking algorithms that provides a consistent structure for exploring solution spaces. The template typically includes: choosing a candidate for the next step, checking if the current partial solution is valid, recursively exploring further if valid, and undoing the choice (backtracking) before trying the next candidate. This template can be applied to permutations, combinations, puzzle solving, and constraint satisfaction problems. Understanding this template allows you to tackle a wide variety of exhaustive search problems efficiently."
  },
  "Permutations/Combinations": {
    description: "Fundamental combinatorial problems involving generating all possible arrangements (permutations) or selections (combinations) of elements from a set. Permutations care about order (ABC vs BAC are different), while combinations don't (ABC and BAC are the same). These problems are typically solved using backtracking, where you build solutions incrementally by making choices and backtracking when necessary. Understanding the mathematical formulas (n! for permutations, C(n,k) for combinations) helps in analyzing time complexity and optimizing implementations."
  },
  "Constraint satisfaction": {
    description: "Problems involving finding assignments of values to variables that satisfy a given set of constraints or conditions. These problems are naturally solved using backtracking, where you assign values to variables one by one and backtrack when constraints are violated. Classic examples include N-Queens (place queens without attacking each other), Sudoku solving, and graph coloring. Effective constraint satisfaction often involves constraint propagation, variable ordering heuristics, and pruning techniques to reduce the search space."
  },
  "Heap operations": {
    description: "Fundamental operations on heap data structures including insertion (heapify-up), extraction of min/max element (heapify-down), building a heap from an array (heapify), and heap sort. These operations maintain the heap property through bubbling elements up or down the tree. Understanding heap operations is crucial for implementing priority queues, sorting algorithms, and solving problems requiring efficient access to minimum or maximum elements. The operations demonstrate how tree properties can be maintained efficiently using array representations."
  },
  "Priority queues": {
    description: "Abstract data types where each element has an associated priority, and elements are served in order of their priority rather than insertion order. Typically implemented using heaps, priority queues provide efficient insertion and extraction of the highest (or lowest) priority element. They're fundamental in algorithms like Dijkstra's shortest path, A* search, Huffman coding, and task scheduling. Understanding priority queues involves knowing when to use min-heap vs max-heap and how to handle elements with equal priorities."
  },
  "Top K problems": {
    description: "A category of problems requiring finding the k largest, smallest, most frequent, or otherwise ranked elements from a collection. These problems often use heaps to maintain the top k elements efficiently without sorting the entire collection. Two main approaches: use a min-heap of size k for finding k largest elements, or max-heap of size k for k smallest elements. Top K problems teach important concepts about space-time tradeoffs and are common in data analysis, recommendation systems, and real-time analytics applications."
  },
  "Merge operations": {
    description: "The fundamental process of combining multiple sorted data structures (arrays, lists, streams) into a single sorted output while maintaining the sorted property. Merge operations are the building blocks of merge sort and are used in many divide-and-conquer algorithms. The basic algorithm uses multiple pointers to compare elements from input sources and selects the smallest (or largest) at each step. Advanced merge operations handle k-way merges and are crucial for distributed computing and database operations."
  },
  "Grid DP": {
    description: "Dynamic programming problems solved on 2D grids or matrices where the solution for each cell depends on solutions from neighboring cells, typically those above, left, or diagonally adjacent. Common patterns include path counting (number of ways to reach a destination), path optimization (minimum cost path), and area calculation problems. Grid DP often involves careful handling of boundaries, obstacle cells, and direction constraints. These problems teach important concepts about 2D state spaces and dependency relationships in multidimensional DP."
  },
  "Game theory": {
    description: "Dynamic programming problems involving optimal strategies in competitive games, typically with two players alternating moves and trying to maximize their own outcomes. These problems often involve minimax strategies where one player tries to maximize a score while the opponent tries to minimize it. The DP state usually includes the current game position and whose turn it is. Game theory DP teaches concepts about adversarial optimization and is applicable to AI game playing, economic modeling, and strategic decision making."
  }
};