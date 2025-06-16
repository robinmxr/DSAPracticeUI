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
