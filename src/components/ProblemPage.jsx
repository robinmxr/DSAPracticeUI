import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, Lightbulb, Target, Eye, EyeOff, CheckCircle, Circle, Code, Brain, Zap, ExternalLink } from 'lucide-react';
import { practiceProblems } from '../data/planData';
import { learningPlan } from "../data/learningPlan";
import DSALayout from './DSALayout';
import Footer from './Footer';

const ProblemPage = ({
  completedProblems = new Set(),
  toggleProblemComplete = () => {},
  activeWeek,
  setActiveWeek,
  selectedTopicId,
  setSelectedTopicId,
}) => {
  const { problemName } = useParams();
  const navigate = useNavigate();
  const [showApproach, setShowApproach] = useState(false);

  // Decode the problem name from URL
  const decodedProblemName = decodeURIComponent(problemName || '');

  // Scroll to top when component mounts or problemName changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [problemName]);

  // Find the topic and week for this problem
  useEffect(() => {
    if (!decodedProblemName || !learningPlan) return;
    
    let found = false;
    for (const [weekNum, weekData] of Object.entries(learningPlan)) {
      if (!weekData.topics) continue;
      for (const topic of weekData.topics) {
        if (topic.problems && topic.problems.some((p) => p.name === decodedProblemName)) {
          if (setActiveWeek) setActiveWeek(Number(weekNum));
          if (setSelectedTopicId) setSelectedTopicId(topic.id);
          found = true;
          break;
        }
      }
      if (found) break;
    }
  }, [decodedProblemName, setActiveWeek, setSelectedTopicId]);

  // Get problem data from practiceProblems
  const problemData = practiceProblems?.[decodedProblemName];
  
  // Get problem metadata from learningPlan
  let problemMetadata = null;
  if (learningPlan) {
    for (const weekData of Object.values(learningPlan)) {
      if (!weekData.topics) continue;
      for (const topic of weekData.topics) {
        if (topic.problems) {
          const found = topic.problems.find(p => p.name === decodedProblemName);
          if (found) {
            problemMetadata = found;
            break;
          }
        }
      }
      if (problemMetadata) break;
    }
  }

  // Calculate stats for DSALayout
  const getCompletedTopics = () => {
    const completed = new Set();
    Object.values(learningPlan).forEach(week => {
      week.topics?.forEach(topic => {
        const allCompleted = topic.problems.every(problem => 
          completedProblems.has(problem.name)
        );
        if (allCompleted && topic.problems.length > 0) {
          completed.add(topic.id);
        }
      });
    });
    return completed;
  };

  const completedTopics = getCompletedTopics();
  const planArray = Object.values(learningPlan);
  const totalTopics = planArray.reduce((acc, week) => acc + (week.topics?.length || 0), 0);
  const totalProblems = Object.keys(practiceProblems).length;
  const completedTopicsCount = completedTopics.size;
  const completedProblemsCount = Array.from(completedProblems).filter(problemName =>
    practiceProblems[problemName]
  ).length;
  const topicProgress = Math.round((completedTopicsCount / totalTopics) * 100) || 0;
  const problemProgress = Math.round((completedProblemsCount / totalProblems) * 100) || 0;

  // If problem doesn't exist in either place
  if (!problemData && !problemMetadata) {
    return (
      <DSALayout
        activeWeek={activeWeek}
        setActiveWeek={setActiveWeek}
        selectedTopicId={selectedTopicId}
        setSelectedTopicId={setSelectedTopicId}
        completedTopicsCount={completedTopicsCount}
        totalTopics={totalTopics}
        topicProgress={topicProgress}
        completedProblemsCount={completedProblemsCount}
        totalProblems={totalProblems}
        problemProgress={problemProgress}
      >
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="w-20 h-20 bg-red-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 rotate-12">
              <Target className="text-red-400" size={36} />
            </div>
            <h2 className="text-3xl font-bold text-white mb-3">Problem Not Found</h2>
            <p className="text-gray-400 mb-8 text-lg">The problem "{decodedProblemName}" could not be located.</p>
            <button
              onClick={() => navigate('/')}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 rounded-2xl text-white font-semibold transition-all duration-200 shadow-lg"
            >
              Go Back to Home
            </button>
          </div>
        </div>
      </DSALayout>
    );
  }

  // Combine data from both sources
  const combinedData = {
    problem: problemData?.problem || `Solve the problem: ${decodedProblemName}`,
    hint: problemData?.hint || problemMetadata?.hint || "Think about the most efficient approach for this problem type.",
    approach: problemData?.approach || "Break down the problem into smaller steps and consider the optimal data structures and algorithms.",
    concepts: problemData?.concepts || problemMetadata?.concepts || [],
    pattern: problemData?.pattern || problemMetadata?.pattern || 'General Problem Solving',
    difficulty: problemData?.difficulty || problemMetadata?.difficulty || 'Medium'
  };

  const isCompleted = completedProblems.has(decodedProblemName);

  const handleToggleComplete = () => {
    toggleProblemComplete(decodedProblemName);
    
    // If marking as completed, navigate back to overview with selected topic
    if (!isCompleted) {
      // Navigate back to home with the current topic selected
      navigate('/', { 
        state: { 
          activeWeek: activeWeek,
          selectedTopicId: selectedTopicId 
        }
      });
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty?.toLowerCase()) {
      case 'easy': return 'text-green-400 bg-green-500/10 border-green-500/20';
      case 'medium': return 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20';
      case 'hard': return 'text-red-400 bg-red-500/10 border-red-500/20';
      default: return 'text-blue-400 bg-blue-500/10 border-blue-500/20';
    }
  };

  const getTimeEstimate = (difficulty) => {
    switch (difficulty?.toLowerCase()) {
      case 'easy': return '15-25';
      case 'medium': return '25-45';
      case 'hard': return '45-90';
      default: return '25-45';
    }
  };

  // Add function to handle concept navigation
  const handleConceptClick = (concept) => {
    const encodedConcept = encodeURIComponent(concept);
    navigate(`/concept/${encodedConcept}`);
  };

  // Enhanced function to handle LeetCode navigation with better problem matching
  const handleLeetCodeSearch = () => {
    // Create multiple search strategies for better matching
    const problemName = decodedProblemName.toLowerCase();
    
    // Common problem name mappings for better LeetCode matching
    const leetcodePatterns = {
      // Week 1 - Arrays & Strings
      'two sum': 'two-sum',
      'best time to buy and sell stock': 'best-time-to-buy-and-sell-stock',
      'contains duplicate': 'contains-duplicate',
      'product of array except self': 'product-of-array-except-self',
      'maximum subarray': 'maximum-subarray',
      'container with most water': 'container-with-most-water',
      '3sum': '3sum',
      'search in rotated sorted array': 'search-in-rotated-sorted-array',
      'find first and last position of element in sorted array': 'find-first-and-last-position-of-element-in-sorted-array',
      'find first and last position in sorted array': 'find-first-and-last-position-of-element-in-sorted-array',
      'search a 2d matrix': 'search-a-2d-matrix',
      'koko eating bananas': 'koko-eating-bananas',
      '4sum': '4sum',
      'remove duplicates from sorted array': 'remove-duplicates-from-sorted-array',
      'trapping rain water': 'trapping-rain-water',
      'valid anagram': 'valid-anagram',
      'valid palindrome': 'valid-palindrome',
      'longest substring without repeating': 'longest-substring-without-repeating-characters',
      'longest substring without repeating characters': 'longest-substring-without-repeating-characters',
      'longest repeating character replacement': 'longest-repeating-character-replacement',
      'group anagrams': 'group-anagrams',
      'longest palindromic substring': 'longest-palindromic-substring',
      'palindromic substrings': 'palindromic-substrings',
      'valid parentheses': 'valid-parentheses',
      'encode and decode strings': 'encode-and-decode-strings',
      'string to integer (atoi)': 'string-to-integer-atoi',
      'string to integer atoi': 'string-to-integer-atoi',
      'minimum window substring': 'minimum-window-substring',

      // Week 2 - Linked Lists
      'reverse linked list': 'reverse-linked-list',
      'merge two sorted lists': 'merge-two-sorted-lists',
      'linked list cycle': 'linked-list-cycle',
      'remove nth node from end': 'remove-nth-node-from-end-of-list',
      'remove nth node from end of list': 'remove-nth-node-from-end-of-list',
      'reorder list': 'reorder-list',
      'add two numbers': 'add-two-numbers',
      'copy list with random pointer': 'copy-list-with-random-pointer',
      'find duplicate number': 'find-the-duplicate-number',
      'lru cache': 'lru-cache',
      'remove duplicates from sorted list': 'remove-duplicates-from-sorted-list',
      'palindrome linked list': 'palindrome-linked-list',
      'intersection of two linked lists': 'intersection-of-two-linked-lists',
      'reverse nodes in k-group': 'reverse-nodes-in-k-group',
      'merge k sorted lists': 'merge-k-sorted-lists',

      // Week 2 - Stacks & Queues
      'min stack': 'min-stack',
      'evaluate reverse polish notation': 'evaluate-reverse-polish-notation',
      'daily temperatures': 'daily-temperatures',
      'car fleet': 'car-fleet',
      'implement queue using stacks': 'implement-queue-using-stacks',
      'next greater element i': 'next-greater-element-i',
      'next greater element ii': 'next-greater-element-ii',
      'largest rectangle in histogram': 'largest-rectangle-in-histogram',

      // Week 3 - Binary Trees
      'maximum depth of binary tree': 'maximum-depth-of-binary-tree',
      'same tree': 'same-tree',
      'invert binary tree': 'invert-binary-tree',
      'binary tree level order traversal': 'binary-tree-level-order-traversal',
      'subtree of another tree': 'subtree-of-another-tree',
      'lowest common ancestor of bst': 'lowest-common-ancestor-of-a-binary-search-tree',
      'lowest common ancestor of a binary search tree': 'lowest-common-ancestor-of-a-binary-search-tree',
      'binary tree right side view': 'binary-tree-right-side-view',
      'count good nodes in binary tree': 'count-good-nodes-in-binary-tree',
      'validate binary search tree': 'validate-binary-search-tree',
      'kth smallest element in bst': 'kth-smallest-element-in-a-bst',
      'kth smallest element in a bst': 'kth-smallest-element-in-a-bst',
      'construct binary tree from preorder and inorder': 'construct-binary-tree-from-preorder-and-inorder-traversal',
      'construct binary tree from preorder and inorder traversal': 'construct-binary-tree-from-preorder-and-inorder-traversal',
      'diameter of binary tree': 'diameter-of-binary-tree',
      'balanced binary tree': 'balanced-binary-tree',
      'symmetric tree': 'symmetric-tree',
      'path sum': 'path-sum',
      'binary tree zigzag level order': 'binary-tree-zigzag-level-order-traversal',
      'binary tree zigzag level order traversal': 'binary-tree-zigzag-level-order-traversal',
      'binary tree maximum path sum': 'binary-tree-maximum-path-sum',
      'serialize and deserialize binary tree': 'serialize-and-deserialize-binary-tree',

      // Week 4 - Graphs
      'number of islands': 'number-of-islands',
      'clone graph': 'clone-graph',
      'pacific atlantic water flow': 'pacific-atlantic-water-flow',
      'course schedule': 'course-schedule',
      'course schedule ii': 'course-schedule-ii',
      'number of connected components': 'number-of-connected-components-in-an-undirected-graph',
      'graph valid tree': 'graph-valid-tree',
      'rotting oranges': 'rotting-oranges',
      'word ladder': 'word-ladder',
      'surrounded regions': 'surrounded-regions',
      'max area of island': 'max-area-of-island',
      'walls and gates': 'walls-and-gates',

      // Week 4 - Trie
      'implement trie': 'implement-trie-prefix-tree',
      'design add and search words': 'design-add-and-search-words-data-structure',
      'word search ii': 'word-search-ii',

      // Week 5 - 1D Dynamic Programming
      'climbing stairs': 'climbing-stairs',
      'min cost climbing stairs': 'min-cost-climbing-stairs',
      'house robber': 'house-robber',
      'house robber ii': 'house-robber-ii',
      'longest palindromic subsequence': 'longest-palindromic-subsequence',
      'decode ways': 'decode-ways',
      'coin change': 'coin-change',
      'maximum product subarray': 'maximum-product-subarray',
      'word break': 'word-break',
      'longest increasing subsequence': 'longest-increasing-subsequence',
      'partition equal subset sum': 'partition-equal-subset-sum',
      'jump game': 'jump-game',
      'jump game ii': 'jump-game-ii',

      // Week 6 - Backtracking
      'subsets': 'subsets',
      'combination sum': 'combination-sum',
      'permutations': 'permutations',
      'subsets ii': 'subsets-ii',
      'combination sum ii': 'combination-sum-ii',
      'word search': 'word-search',
      'palindrome partitioning': 'palindrome-partitioning',
      'letter combinations of phone number': 'letter-combinations-of-a-phone-number',
      'letter combinations of a phone number': 'letter-combinations-of-a-phone-number',
      'generate parentheses': 'generate-parentheses',
      'n-queens': 'n-queens',

      // Week 6 - Heaps
      'kth largest element in array': 'kth-largest-element-in-an-array',
      'top k frequent elements': 'top-k-frequent-elements',
      'find median from data stream': 'find-median-from-data-stream',
      'task scheduler': 'task-scheduler',
      'design twitter': 'design-twitter',
      'k closest points to origin': 'k-closest-points-to-origin',
      'last stone weight': 'last-stone-weight',

      // Week 6 - 2D Dynamic Programming
      'unique paths': 'unique-paths',
      'longest common subsequence': 'longest-common-subsequence',
      'best time to buy/sell stock with cooldown': 'best-time-to-buy-and-sell-stock-with-cooldown',
      'best time to buy and sell stock with cooldown': 'best-time-to-buy-and-sell-stock-with-cooldown',
      'coin change 2': 'coin-change-2',
      'target sum': 'target-sum',
      'interleaving string': 'interleaving-string',
      'unique paths ii': 'unique-paths-ii',
      'minimum path sum': 'minimum-path-sum',
      'edit distance': 'edit-distance',
      'regular expression matching': 'regular-expression-matching',

      // Additional common variations and legacy mappings
      'roman to integer': 'roman-to-integer',
      'longest common prefix': 'longest-common-prefix',
      'swap nodes in pairs': 'swap-nodes-in-pairs',
      'implement strstr': 'implement-strstr',
      'search insert position': 'search-insert-position',
      'merge sorted array': 'merge-sorted-array',
      'binary tree inorder traversal': 'binary-tree-inorder-traversal',
      'convert sorted array to binary search tree': 'convert-sorted-array-to-binary-search-tree',
      'minimum depth of binary tree': 'minimum-depth-of-binary-tree',
      'binary tree preorder traversal': 'binary-tree-preorder-traversal',
      'binary tree postorder traversal': 'binary-tree-postorder-traversal',
      'reverse integer': 'reverse-integer',
      'palindrome number': 'palindrome-number',
      'median of two sorted arrays': 'median-of-two-sorted-arrays'
    };

    // Check if we have a direct mapping
    const directMatch = leetcodePatterns[problemName];
    if (directMatch) {
      const directUrl = `https://leetcode.com/problems/${directMatch}/`;
      window.open(directUrl, '_blank', 'noopener,noreferrer');
      return;
    }

    // Try to create a slug from the problem name
    const slugAttempt = problemName
      .replace(/[^\w\s]/g, '') // Remove special characters
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-') // Remove multiple consecutive hyphens
      .replace(/^-|-$/g, '') // Remove leading/trailing hyphens
      .toLowerCase();

    // Try the generated slug first
    const potentialUrl = `https://leetcode.com/problems/${slugAttempt}/`;
    
    // We'll try to open it directly, and if it fails, fallback to search
    // Since we can't easily check if the URL exists due to CORS, we'll use a different approach
    
    // For now, let's create a more intelligent search
    const searchTerms = [
      problemName, // Original name
      slugAttempt.replace(/-/g, ' '), // Slug converted back to words
      // Extract key words (remove common words)
      problemName.replace(/\b(of|the|a|an|in|on|at|to|for|with|by)\b/g, '').trim()
    ].filter(term => term.length > 0);

    // Use the best search term
    const bestSearchTerm = searchTerms[0];
    const searchUrl = `https://leetcode.com/problemset/all/?search=${encodeURIComponent(bestSearchTerm)}`;
    
    // Open search page with the problem name
    window.open(searchUrl, '_blank', 'noopener,noreferrer');
    
    // Also provide a notification about the direct URL attempt
    console.log(`Searching for: "${bestSearchTerm}"`);
    console.log(`Direct URL attempt: ${potentialUrl}`);
  };

  return (
    <DSALayout
      activeWeek={activeWeek}
      setActiveWeek={setActiveWeek}
      selectedTopicId={selectedTopicId}
      setSelectedTopicId={setSelectedTopicId}
      completedTopicsCount={completedTopicsCount}
      totalTopics={totalTopics}
      topicProgress={topicProgress}
      completedProblemsCount={completedProblemsCount}
      totalProblems={totalProblems}
      problemProgress={problemProgress}
    >
      <div 
        className="sticky"
      >
        <div className="flex items-center justify-between py-4 px-4 sm:px-6 max-w-7xl mx-auto">
          <div className="flex-1 min-w-0 mr-4">
            <button
              onClick={() => navigate('/')}
              className="group flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-slate-800/80 to-slate-700/80 hover:from-slate-700/90 hover:to-slate-600/90 border border-slate-600/30 hover:border-slate-500/50 rounded-xl text-slate-300 hover:text-white transition-all duration-300 text-sm font-medium backdrop-blur-sm shadow-lg hover:shadow-slate-500/20 hover:scale-[1.02] active:scale-[0.98]"
            >
              <ArrowLeft 
                size={18} 
                className="flex-shrink-0 transition-all duration-300 group-hover:-translate-x-0.5 group-hover:text-blue-400" 
              />
              <span className="whitespace-nowrap">Back</span>
            </button>
          </div>
          
          <div className="flex items-center gap-3 flex-shrink-0">
            {/* Only keep the completion button */}
            <button
              onClick={handleToggleComplete}
              className={`group flex items-center gap-2.5 px-5 py-2.5 rounded-xl font-semibold transition-all duration-300 text-sm backdrop-blur-sm shadow-lg hover:shadow-xl active:scale-[0.98] hover:scale-[1.02] ${
                isCompleted
                  ? 'bg-gradient-to-r from-green-600/90 to-green-500/90 hover:from-green-500 hover:to-green-400 text-white shadow-green-500/25 hover:shadow-green-500/35 border border-green-400/30'
                  : 'bg-gradient-to-r from-slate-800/80 to-slate-700/80 hover:from-blue-600/90 hover:to-blue-500/90 border border-slate-600/30 hover:border-blue-500/50 text-slate-300 hover:text-white hover:shadow-blue-500/25'
              }`}
            >
              {isCompleted ? (
                <>
                  <CheckCircle 
                    size={18} 
                    className="flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" 
                  />
                  <span className="whitespace-nowrap">Completed</span>
                </>
              ) : (
                <>
                  <Circle 
                    size={18} 
                    className="flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:text-blue-400" 
                  />
                  <span className="whitespace-nowrap">Mark Complete</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Hero Header with Floating Elements */}
      <div className="relative mb-12 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-1/4 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute top-20 right-1/3 w-24 h-24 bg-purple-500/5 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 left-1/2 w-40 h-40 bg-emerald-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10">
          {/* Title Section */}
          <div className="text-center py-12 px-4 max-w-7xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full px-6 py-2 mb-6">
              <Code size={16} className="text-blue-400" />
              <span className="text-sm font-medium text-blue-300">AlgoMist Challenge</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent break-words">
              {decodedProblemName}
            </h1>

            {/* Difficulty and Time Estimate */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8">
              {/* Difficulty Badge */}
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl border backdrop-blur-sm font-semibold text-sm ${getDifficultyColor(combinedData.difficulty)}`}>
                <div className={`w-2 h-2 rounded-full ${
                  combinedData.difficulty?.toLowerCase() === 'easy' ? 'bg-green-400' :
                  combinedData.difficulty?.toLowerCase() === 'medium' ? 'bg-yellow-400' :
                  combinedData.difficulty?.toLowerCase() === 'hard' ? 'bg-red-400' : 'bg-blue-400'
                }`}></div>
                <span>{combinedData.difficulty || 'Medium'} Level</span>
              </div>

              {/* Time Estimate */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/40 border border-slate-600/30 rounded-xl backdrop-blur-sm text-slate-300 font-semibold text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12,6 12,12 16,14"></polyline>
                </svg>
                <span>{getTimeEstimate(combinedData.difficulty)} mins</span>
              </div>

              {/* Pattern Badge */}
              {combinedData.pattern && (
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-xl backdrop-blur-sm text-purple-300 font-semibold text-sm">
                  <Brain size={14} />
                  <span>{combinedData.pattern}</span>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>

      {/* Sticky Navigation - moved outside the hero section */}


      {/* Dynamic Grid Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Problem Statement - Full Width Hero */}
        <div className="mb-8">
          <div className="bg-gradient-to-br from-blue-500/8 via-blue-500/4 to-transparent backdrop-blur-sm border border-blue-500/15 rounded-3xl p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -translate-y-32 translate-x-32"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6 sm:mb-8">
                <div className="w-12 sm:w-14 h-12 sm:h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center rotate-3">
                  <BookOpen className="text-blue-400" size={20} />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">Challenge Statement</h2>
                  <p className="text-blue-300 mt-1 text-sm sm:text-base">Read carefully and understand the quest requirements</p>
                </div>
              </div>
              <div className="bg-gray-900/40 backdrop-blur-sm rounded-2xl p-4 sm:p-8 border border-gray-700/20">
                <pre className="text-gray-100 whitespace-pre-wrap leading-loose font-mono text-sm sm:text-base overflow-x-auto">
                  {combinedData.problem}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 mb-8">
          {/* Left Column - Concepts & Hint */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            {/* Concepts */}
            <div className="bg-gradient-to-br from-purple-500/8 via-purple-500/4 to-transparent backdrop-blur-sm border border-purple-500/15 rounded-3xl p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl translate-y-24 -translate-x-24"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6 sm:mb-8">
                  <div className="w-12 sm:w-14 h-12 sm:h-14 bg-purple-500/20 rounded-2xl flex items-center justify-center -rotate-3">
                    <Brain className="text-purple-400" size={20} />
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white">Key Concepts</h2>
                    <p className="text-purple-300 mt-1 text-sm sm:text-base">Fundamental building blocks for this problem</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  {combinedData.concepts.map((concept, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleConceptClick(concept)}
                      className="group px-4 sm:px-6 py-2 sm:py-3 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/15 hover:border-purple-500/25 rounded-2xl text-purple-300 hover:text-purple-200 font-semibold transition-all duration-300 hover:scale-105 text-sm sm:text-base flex items-center gap-2"
                    >
                      <span>{concept}</span>
                      <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Hint */}
            <div className="bg-gradient-to-br from-yellow-500/8 via-yellow-500/4 to-transparent backdrop-blur-sm border border-yellow-500/15 rounded-3xl p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-500/5 rounded-full blur-2xl -translate-y-20 translate-x-20"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 sm:w-14 h-12 sm:h-14 bg-yellow-500/20 rounded-2xl flex items-center justify-center rotate-12">
                    <Lightbulb className="text-yellow-400" size={20} />
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white">Hint</h2>
                    <p className="text-yellow-300 mt-1 text-sm sm:text-base">A gentle nudge in the right direction</p>
                  </div>
                </div>
                <div className="bg-yellow-500/8 border border-yellow-500/15 rounded-2xl p-4 sm:p-6">
                  <p className="text-yellow-200 leading-relaxed text-base sm:text-lg">
                    💡 {combinedData.hint}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Practice Tips (Updated Design) */}
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-gradient-to-br from-emerald-500/8 via-emerald-500/4 to-transparent backdrop-blur-sm border border-emerald-500/15 rounded-3xl p-6 sm:p-8 sticky top-32 relative overflow-hidden">
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl translate-y-16 translate-x-16"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6 sm:mb-8">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                    <Zap className="text-emerald-400" size={18} />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">Practice Guide</h2>
                </div>
                
                <div className="space-y-6">
                  {/* Before Coding Section */}
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-emerald-300 mb-4 flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      Before Coding
                    </h3>
                    <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-2xl p-4">
                      <ul className="space-y-3 text-gray-300">
                        <li className="flex items-start gap-3 group">
                          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-200"></div>
                          <span className="group-hover:text-white transition-colors duration-200 text-sm sm:text-base">Understand the problem completely</span>
                        </li>
                        <li className="flex items-start gap-3 group">
                          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-200"></div>
                          <span className="group-hover:text-white transition-colors duration-200 text-sm sm:text-base">Identify edge cases</span>
                        </li>
                        <li className="flex items-start gap-3 group">
                          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-200"></div>
                          <span className="group-hover:text-white transition-colors duration-200 text-sm sm:text-base">Plan your approach</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* LeetCode Button - Centered */}
                  <div className="flex justify-center py-2">
                    <button
                      onClick={handleLeetCodeSearch}
                      className="group flex items-center gap-3 px-6 py-3.5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl transition-all duration-300 font-semibold shadow-lg hover:shadow-orange-500/25 transform hover:scale-105 active:scale-95 border border-orange-400/20"
                    >
                      <div className="w-6 h-6 bg-white/25 rounded-lg flex items-center justify-center group-hover:bg-white/35 transition-colors duration-300">
                        <span className="text-sm font-bold">LC</span>
                      </div>
                      <span>Solve on LeetCode</span>
                      <ExternalLink size={16} className="opacity-75 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-300" />
                    </button>
                  </div>
                  
                  {/* After Solving Section */}
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-emerald-300 mb-4 flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      After Solving
                    </h3>
                    <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-2xl p-4">
                      <ul className="space-y-3 text-gray-300">
                        <li className="flex items-start gap-3 group">
                          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-200"></div>
                          <span className="group-hover:text-white transition-colors duration-200 text-sm sm:text-base">Test with examples</span>
                        </li>
                        <li className="flex items-start gap-3 group">
                          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-200"></div>
                          <span className="group-hover:text-white transition-colors duration-200 text-sm sm:text-base">Analyze complexity</span>
                        </li>
                        <li className="flex items-start gap-3 group">
                          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-200"></div>
                          <span className="group-hover:text-white transition-colors duration-200 text-sm sm:text-base">Consider alternatives</span>
                        </li>
                        <li className="flex items-start gap-3 group">
                          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-200"></div>
                          <span className="group-hover:text-white transition-colors duration-200 text-sm sm:text-base">Review and optimize</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Solution Approach - Full Width */}
        <div className="solution-approach-card">
          <div className="bg-gradient-to-br from-emerald-500/8 via-emerald-500/4 to-transparent backdrop-blur-sm border border-emerald-500/15 rounded-3xl p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute top-1/2 left-0 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-36"></div>
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 sm:w-14 h-12 sm:h-14 bg-emerald-500/20 rounded-2xl flex items-center justify-center -rotate-6">
                    <Target className="text-emerald-400" size={20} />
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white">Solution Approach</h2>
                    <p className="text-emerald-300 mt-1 text-sm sm:text-base">Strategic thinking for optimal solution</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowApproach(!showApproach)}
                  className="group flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/15 hover:border-emerald-500/25 rounded-2xl text-emerald-300 hover:text-emerald-200 font-semibold transition-all duration-300 flex-shrink-0 transform hover:scale-105"
                >
                  <div className={`transition-transform duration-300 ${showApproach ? 'rotate-180' : 'rotate-0'}`}>
                    {showApproach ? (
                      <EyeOff size={18} className="group-hover:scale-110 transition-transform duration-200 flex-shrink-0" />
                    ) : (
                      <Eye size={18} className="group-hover:scale-110 transition-transform duration-200 flex-shrink-0" />
                    )}
                  </div>
                  <span className="text-sm sm:text-base transition-all duration-200">
                    {showApproach ? 'Hide Solution' : 'Reveal Solution'}
                  </span>
                </button>
              </div>
              
              <div className="relative">
                <div className={`transition-all duration-500 ease-in-out ${!showApproach ? 'opacity-100 scale-100' : 'opacity-0 scale-95 absolute inset-0 pointer-events-none'}`}>
                  <div className="bg-emerald-500/8 border border-emerald-500/15 rounded-2xl p-8 sm:p-12 text-center">
                    <div className="mb-8">
                      <div className="w-16 sm:w-20 h-16 sm:h-20 bg-emerald-500/20 rounded-3xl flex items-center justify-center mx-auto mb-6 rotate-12 transition-transform duration-300 hover:rotate-0">
                        <Eye className="text-emerald-400 transition-all duration-300" size={28} />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 transition-colors duration-300">Solution Hidden</h3>
                      <p className="text-gray-400 text-base sm:text-lg max-w-md mx-auto transition-colors duration-300">
                        Challenge yourself first! Only reveal the approach when you need guidance.
                      </p>
                    </div>
                    <button
                      onClick={() => setShowApproach(true)}
                      className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 rounded-2xl text-white font-semibold transition-all duration-300 shadow-lg shadow-emerald-500/25 hover:scale-105 transform"
                    >
                      Reveal Solution Approach
                    </button>
                  </div>
                </div>

                <div className={`transition-all duration-500 ease-in-out ${showApproach ? 'opacity-100 scale-100' : 'opacity-0 scale-95 absolute inset-0 pointer-events-none'}`}>
                  <div className="bg-emerald-500/8 border border-emerald-500/15 rounded-2xl p-6 sm:p-8 transform transition-all duration-300">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <Target className="text-emerald-400" size={16} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-emerald-300 font-semibold mb-2 text-sm sm:text-base">Strategic Approach</h4>
                        <p className="text-emerald-200 leading-relaxed text-base sm:text-lg animate-in slide-in-from-left-4 duration-500">
                          🎯 {combinedData.approach}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </DSALayout>
  );
};

export default ProblemPage;