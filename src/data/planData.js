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
    "3Sum": {
      problem: `Given array nums, return all unique triplets that sum to zero.

Example:
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]`,
      hint: "Sort array, then use two pointers for each element",
      approach: "Sort first, then for each element use two pointers to find complementary pair",
      concepts: ["Two pointers technique"]
    },
    "Valid Anagram": {
      problem: `Given two strings s and t, return true if t is an anagram of s.

Example:
Input: s = "anagram", t = "nagaram"
Output: true`,
      hint: "Compare character frequencies of both strings",
      approach: "Count character frequencies or sort both strings and compare",
      concepts: ["Hash Map"]
    },
    "Valid Palindrome": {
      problem: `A phrase is a palindrome if it reads the same forward and backward after converting to lowercase and removing non-alphanumeric characters.

Example:
Input: s = "A man, a plan, a canal: Panama"
Output: true`,
      hint: "Use two pointers from start and end, skipping non-alphanumeric characters",
      approach: "Two pointers technique with character filtering and case normalization",
      concepts: ["Two pointers technique"]
    },
    "Longest Substring Without Repeating": {
      problem: `Given a string s, find the length of the longest substring without repeating characters.

Example:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.`,
      hint: "Use sliding window with a set to track characters in current window",
      approach: "Sliding window - expand right, contract left when duplicate found",
      concepts: ["Sliding window"]
    },
    "Group Anagrams": {
      problem: `Given an array of strings strs, group the anagrams together.

Example:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]`,
      hint: "Use sorted string as key to group anagrams",
      approach: "Hash map with sorted string as key, group strings with same sorted form",
      concepts: ["Hash Map"]
    },
    "Valid Parentheses": {
      problem: `Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

Example:
Input: s = "()[]{}"
Output: true

Input: s = "([)]"
Output: false`,
      hint: "Use a stack to keep track of opening brackets",
      approach: "Stack-based: push opening brackets, pop and match for closing brackets",
      concepts: ["Stack"]
    },
    "Reverse Linked List": {
      problem: `Given the head of a singly linked list, reverse the list, and return the reversed list.

Example:
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]`,
      hint: "Use three pointers: prev, current, and next",
      approach: "Iteratively reverse links using three pointers, or use recursion",
      concepts: ["Linked List"]
    },
    "Merge Two Sorted Lists": {
      problem: `You are given the heads of two sorted linked lists list1 and list2. Merge the two lists into one sorted list.

Example:
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]`,
      hint: "Use two pointers to compare and merge nodes",
      approach: "Compare current nodes of both lists, advance pointer of smaller value",
      concepts: ["Linked List", "Two pointers technique"]
    },
    "Linked List Cycle": {
      problem: `Given head of a linked list, determine if the linked list has a cycle in it.

Example:
Input: head = [3,2,0,-4], pos = 1 (cycle back to index 1)
Output: true`,
      hint: "Use Floyd's cycle detection algorithm with fast and slow pointers",
      approach: "Two pointers moving at different speeds - if cycle exists, they'll meet",
      concepts: ["Linked List", "Two pointers technique"]
    },
    "LRU Cache": {
      problem: `Design a data structure that follows LRU (Least Recently Used) cache constraints.

Implement LRUCache class:
- LRUCache(capacity): Initialize with positive size capacity
- get(key): Return value if exists, else -1
- put(key, value): Update value if exists, else add. If at capacity, remove LRU item.

Example:
Input: ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
       [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
Output: [null, null, null, 1, null, -1, null, -1, 3, 4]`,
      hint: "Combine hash map with doubly linked list for O(1) operations",
      approach: "Hash map for O(1) access + doubly linked list for O(1) insertion/deletion",
      concepts: ["Hash Map", "Doubly Linked List"]
    },
    "Maximum Depth of Binary Tree": {
      problem: `Given the root of a binary tree, return its maximum depth.

Example:
Input: root = [3,9,20,null,null,15,7]
Output: 3`,
      hint: "Use DFS recursion - depth is 1 + max depth of children",
      approach: "Recursive DFS: return 1 + max(left_depth, right_depth)",
      concepts: ["DFS"]
    },
    "Same Tree": {
      problem: `Given the roots of two binary trees p and q, check if they are the same tree.

Example:
Input: p = [1,2,3], q = [1,2,3]
Output: true`,
      hint: "Recursively compare values and structure of both trees",
      approach: "DFS recursion comparing values and recursive calls on children",
      concepts: ["DFS"]
    },
    "Invert Binary Tree": {
      problem: `Given the root of a binary tree, invert the tree and return its root.

Example:
Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]`,
      hint: "Recursively swap left and right children at each node",
      approach: "DFS: swap children, then recursively invert both subtrees",
      concepts: ["DFS"]
    },
    "Binary Tree Level Order Traversal": {
      problem: `Given the root of a binary tree, return the level order traversal of its nodes' values.

Example:
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]`,
      hint: "Use BFS with a queue to process nodes level by level",
      approach: "BFS with queue - process all nodes at current level before moving to next",
      concepts: ["BFS"]
    },
    "Number of Islands": {
      problem: `Given an m x n 2D binary grid which represents a map of '1's (land) and '0's (water), return the number of islands.

Example:
Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1`,
      hint: "Use DFS or BFS to mark connected components of '1's",
      approach: "For each unvisited '1', start DFS/BFS to mark entire island, increment counter",
      concepts: ["DFS", "BFS"]
    },
    "Course Schedule": {
      problem: `There are numCourses courses labeled from 0 to numCourses - 1. Given prerequisites array where prerequisites[i] = [ai, bi] indicates you must take course bi first to take course ai.
Return true if you can finish all courses.

Example:
Input: numCourses = 2, prerequisites = [[1,0]]
Output: true`,
      hint: "Detect cycle in directed graph using topological sort or DFS",
      approach: "Build graph, then use topological sort (Kahn's algorithm) or DFS cycle detection",
      concepts: ["Graph", "DFS"]
    },
    "Climbing Stairs": {
      problem: `You are climbing a staircase with n steps. Each time you can climb 1 or 2 steps.
In how many distinct ways can you climb to the top?

Example:
Input: n = 3
Output: 3
Explanation: Three ways to climb: (1,1,1), (1,2), (2,1)`,
      hint: "This is Fibonacci sequence - ways[i] = ways[i-1] + ways[i-2]",
      approach: "Dynamic programming: dp[i] = dp[i-1] + dp[i-2], similar to Fibonacci",
      concepts: ["Dynamic programming"]
    },
    "House Robber": {
      problem: `You are a robber planning to rob houses along a street. You cannot rob two adjacent houses.
Given integer array nums representing amount of money of each house, return maximum amount you can rob.

Example:
Input: nums = [2,7,9,3,1]
Output: 12
Explanation: Rob houses 0, 2, and 4 (2 + 9 + 1 = 12).`,
      hint: "For each house, choose max of (rob this + prev non-adjacent) vs (don't rob this)",
      approach: "DP: dp[i] = max(dp[i-1], dp[i-2] + nums[i]) - choose rob or skip",
      concepts: ["Dynamic programming"]
    },
    "Coin Change": {
      problem: `Given coins of different denominations and total amount, return fewest number of coins needed to make up that amount.

Example:
Input: coins = [1,3,4], amount = 6
Output: 2
Explanation: 6 = 3 + 3`,
      hint: "Use DP - for each amount, try all coins and take minimum",
      approach: "Bottom-up DP: dp[i] = min(dp[i-coin] + 1) for all coins ≤ i",
      concepts: ["Dynamic programming"]
    },
    "Subsets": {
      problem: `Given integer array nums of unique elements, return all possible subsets.

Example:
Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]`,
      hint: "Use backtracking - for each element, choose to include or exclude",
      approach: "Backtracking: at each position, recursively explore include/exclude decisions",
      concepts: ["Backtracking"]
    },
    "Combination Sum": {
      problem: `Given array of distinct integers candidates and target, return all unique combinations where candidates sum to target. Same number may be chosen unlimited times.

Example:
Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]`,
      hint: "Use backtracking with remaining target, allow reusing same element",
      approach: "Backtracking: try each candidate, recurse with reduced target, allow reuse",
      concepts: ["Backtracking"]
    },
    "Permutations": {
      problem: `Given array nums of distinct integers, return all possible permutations.

Example:
Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]`,
      hint: "Use backtracking with used array to track selected elements",
      approach: "Backtracking: at each position try all unused elements, mark as used/unused",
      concepts: ["Backtracking"]
    },
    "Top K Frequent Elements": {
      problem: `Given integer array nums and integer k, return k most frequent elements.

Example:
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]`,
      hint: "Count frequencies, then use heap or bucket sort to find top k",
      approach: "Count frequencies with hash map, then use min-heap of size k or bucket sort",
      concepts: ["Hash Map", "Heap"]
    },
    "Kth Largest Element in Array": {
      problem: `Given integer array nums and integer k, return kth largest element in the array.

Example:
Input: nums = [3,2,1,5,6,4], k = 2
Output: 5`,
      hint: "Use quickselect algorithm or min-heap of size k",
      approach: "Quickselect (average O(n)) or min-heap of size k (O(n log k))",
      concepts: ["Heap"]
    },
};


export const conceptsInfo = {
  "Two pointers technique": {
    description: "A technique where two pointers iterate through the data structure at different speeds or directions to solve problems efficiently, often used for searching pairs or subarrays."
  },
  "Sliding window": {
    description: "A method for keeping track of a subset of elements in a list/array as you move through it, useful for problems involving subarrays or substrings."
  },
  "Prefix sums": {
    description: "An array that stores the cumulative sum of elements up to each index, enabling efficient range sum queries."
  },
  "Binary search": {
    description: "A search algorithm that finds the position of a target value within a sorted array by repeatedly dividing the search interval in half."
  },
  "Hash Map": {
    description: "A data structure that stores key-value pairs, allowing for fast lookup, insertion, and deletion."
  },
  "Hash Set": {
    description: "A collection of unique elements supporting fast membership tests, insertions, and deletions."
  },
  "Kadane's Algorithm": {
    description: "An efficient algorithm to find the maximum sum subarray in a given array."
  },
  "DFS": {
    description: "Depth-First Search is a graph/tree traversal algorithm that explores as far as possible along each branch before backtracking."
  },
  "BFS": {
    description: "Breadth-First Search is a graph/tree traversal algorithm that explores all neighbors at the present depth before moving on to nodes at the next depth level."
  },
  "Backtracking": {
    description: "A general algorithm for finding all (or some) solutions by exploring all possible options and undoing choices that fail to satisfy the constraints."
  },
  "Dynamic programming": {
    description: "A method for solving complex problems by breaking them down into simpler subproblems and storing the results of subproblems to avoid redundant computation."
  },
  "Stack": {
    description: "A linear data structure that follows the Last In First Out (LIFO) principle, where the last element added is the first to be removed."
  },
  "Linked List": {
    description: "A linear data structure where each element (node) points to the next, allowing for efficient insertions and deletions."
  },
  "Heap": {
    description: "A specialized tree-based data structure that satisfies the heap property, where the parent node is either greater than or equal to (max heap) or less than or equal to (min heap) its children."
  },
  "Graph": {
    description: "A collection of nodes (vertices) and edges connecting pairs of nodes, used to represent pairwise relationships."
  },
  "Doubly Linked List": {
    description: "A linked list where each node contains a reference to both the next and previous nodes, allowing traversal in both directions."
  },
  "Trie": {
    description: "A tree-like data structure that stores a dynamic set of strings, allowing for efficient prefix-based searches."
  },
};