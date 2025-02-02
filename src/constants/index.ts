import { Clock, Code2, Calendar, Users } from "lucide-react";

export const INTERVIEW_CATEGORY = [
  { id: "upcoming", title: "Upcoming Interviews", variant: "outline" },
  { id: "completed", title: "Completed", variant: "secondary" },
  { id: "succeeded", title: "Succeeded", variant: "default" },
  { id: "failed", title: "Failed", variant: "destructive" },
] as const;

export const TIME_SLOTS = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
];

export const QUICK_ACTIONS = [
  {
    icon: Code2,
    title: "New Call",
    description: "Start an instant call",
    color: "primary",
    gradient: "from-primary/10 via-primary/5 to-transparent",
  },
  {
    icon: Users,
    title: "Join Interview",
    description: "Enter via invitation link",
    color: "purple-500",
    gradient: "from-purple-500/10 via-purple-500/5 to-transparent",
  },
  {
    icon: Calendar,
    title: "Schedule",
    description: "Plan upcoming interviews",
    color: "blue-500",
    gradient: "from-blue-500/10 via-blue-500/5 to-transparent",
  },
  {
    icon: Clock,
    title: "Recordings",
    description: "Access past interviews",
    color: "orange-500",
    gradient: "from-orange-500/10 via-orange-500/5 to-transparent",
  },
];

export const CODING_QUESTIONS: CodeQuestion[] = [
  {
    id: "two-sum",
    title: "Two Sum",
    description:
      "Given an array of integers `nums` and an integer `target`, return indices of the two numbers in the array such that they add up to `target`.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.",
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]",
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
      },
    ],
    starterCode: {
      javascript: `function twoSum(nums, target) {
  // Write your solution here
  
}`,
      python: `def two_sum(nums, target):
    # Write your solution here
    pass`,
      java: `class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Write your solution here
        
    }
}`,
    },
    constraints: [
      "2 ≤ nums.length ≤ 104",
      "-109 ≤ nums[i] ≤ 109",
      "-109 ≤ target ≤ 109",
      "Only one valid answer exists.",
    ],
  },
  {
    id: "reverse-string",
    title: "Reverse String",
    description:
      "Write a function that reverses a string. The input string is given as an array of characters `s`.\n\nYou must do this by modifying the input array in-place with O(1) extra memory.",
    examples: [
      {
        input: 's = ["h","e","l","l","o"]',
        output: '["o","l","l","e","h"]',
      },
      {
        input: 's = ["H","a","n","n","a","h"]',
        output: '["h","a","n","n","a","H"]',
      },
    ],
    starterCode: {
      javascript: `function reverseString(s) {
  // Write your solution here
  
}`,
      python: `def reverse_string(s):
    # Write your solution here
    pass`,
      java: `class Solution {
    public void reverseString(char[] s) {
        // Write your solution here
        
    }
}`,
    },
  },
  {
    id: "palindrome-number",
    title: "Palindrome Number",
    description:
      "Given an integer `x`, return `true` if `x` is a palindrome, and `false` otherwise.\n\nAn integer is a palindrome when it reads the same forward and backward.",
    examples: [
      {
        input: "x = 121",
        output: "true",
        explanation: "121 reads as 121 from left to right and from right to left.",
      },
      {
        input: "x = -121",
        output: "false",
        explanation:
          "From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.",
      },
    ],
    starterCode: {
      javascript: `function isPalindrome(x) {
  // Write your solution here
  
}`,
      python: `def is_palindrome(x):
    # Write your solution here
    pass`,
      java: `class Solution {
    public boolean isPalindrome(int x) {
        // Write your solution here
        
    }
}`,
    },
  },
  {
    id: "max-subarray",
    title: "Maximum Subarray",
    description:
      "Given an integer array `nums`, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.",
    examples: [
      {
        input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        output: "6",
        explanation: "The subarray [4,-1,2,1] has the largest sum = 6.",
      },
      {
        input: "nums = [1]",
        output: "1",
      },
    ],
    starterCode: {
      javascript: `function maxSubArray(nums) {
  // Write your solution here
  
}`,
      python: `def max_sub_array(nums):
    # Write your solution here
    pass`,
      java: `class Solution {
    public int maxSubArray(int[] nums) {
        // Write your solution here
        
    }
}`,
    },
  },
  {
    id: "valid-parentheses",
    title: "Valid Parentheses",
    description:
      "Given a string `s` containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.\n\nAn input string is valid if:\n1. Open brackets must be closed by the same type of brackets.\n2. Open brackets must be closed in the correct order.",
    examples: [
      {
        input: 's = "()"',
        output: "true",
      },
      {
        input: 's = "()[]{}"',
        output: "true",
      },
      {
        input: 's = "(]"',
        output: "false",
      },
    ],
    starterCode: {
      javascript: `function isValid(s) {
  // Write your solution here
  
}`,
      python: `def is_valid(s):
    # Write your solution here
    pass`,
      java: `class Solution {
    public boolean isValid(String s) {
        // Write your solution here
        
    }
}`,
    },
  },
  {
    id: "merge-two-sorted-lists",
    title: "Merge Two Sorted Lists",
    description:
      "Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.",
    examples: [
      {
        input: "l1 = [1,2,4], l2 = [1,3,4]",
        output: "[1,1,2,3,4,4]",
      },
      {
        input: "l1 = [], l2 = []",
        output: "[]",
      },
    ],
    starterCode: {
      javascript: `function mergeTwoLists(l1, l2) {
  // Write your solution here
  
}`,
      python: `def merge_two_lists(l1, l2):
    # Write your solution here
    pass`,
      java: `class Solution {
    public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
        // Write your solution here
        
    }
}`,
    },
  },
  {
    id: "remove-duplicates",
    title: "Remove Duplicates from Sorted Array",
    description:
      "Given a sorted array `nums`, remove the duplicates in-place such that each element appears only once and return the new length.\n\nDo not allocate extra space for another array; you must do this by modifying the input array in-place with O(1) extra memory.",
    examples: [
      {
        input: "nums = [1,1,2]",
        output: "2",
        explanation: "The first two elements of nums should be 1 and 2 respectively.",
      },
      {
        input: "nums = [0,0,1,1,1,2,2,3,3,4]",
        output: "5",
      },
    ],
    starterCode: {
      javascript: `function removeDuplicates(nums) {
  // Write your solution here
  
}`,
      python: `def remove_duplicates(nums):
    # Write your solution here
    pass`,
      java: `class Solution {
    public int removeDuplicates(int[] nums) {
        // Write your solution here
        
    }
}`,
    },
  },
  {
    id: "search-insert-position",
    title: "Search Insert Position",
    description:
      "Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.",
    examples: [
      {
        input: "nums = [1,3,5,6], target = 5",
        output: "2",
      },
      {
        input: "nums = [1,3,5,6], target = 2",
        output: "1",
      },
    ],
    starterCode: {
      javascript: `function searchInsert(nums, target) {
  // Write your solution here
  
}`,
      python: `def search_insert(nums, target):
    # Write your solution here
    pass`,
      java: `class Solution {
    public int searchInsert(int[] nums, int target) {
        // Write your solution here
        
    }
}`,
    },
  },
  {
    id: "plus-one",
    title: "Plus One",
    description:
      "Given a non-empty array of digits representing a non-negative integer, increment one to the integer.\n\nThe digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.\n\nYou may assume the integer does not contain any leading zero, except the number 0 itself.",
    examples: [
      {
        input: "digits = [1,2,3]",
        output: "[1,2,4]",
        explanation: "The array represents the integer 123, and 123 + 1 = 124.",
      },
      {
        input: "digits = [9]",
        output: "[1,0]",
        explanation: "The array represents the integer 9, and 9 + 1 = 10.",
      },
    ],
    starterCode: {
      javascript: `function plusOne(digits) {
  // Write your solution here
  
}`,
      python: `def plus_one(digits):
    # Write your solution here
    pass`,
      java: `class Solution {
    public int[] plusOne(int[] digits) {
        // Write your solution here
        
    }
}`,
    },
  },
  {
    id: "sqrtx",
    title: "Sqrt(x)",
    description:
      "Given a non-negative integer `x`, compute and return the square root of `x` rounded down to the nearest integer.\n\nThe returned integer should be non-negative as well.",
    examples: [
      {
        input: "x = 4",
        output: "2",
      },
      {
        input: "x = 8",
        output: "2",
        explanation: "The square root of 8 is 2.82842..., and since we round it down, the result is 2.",
      },
    ],
    starterCode: {
      javascript: `function mySqrt(x) {
  // Write your solution here
  
}`,
      python: `def my_sqrt(x):
    # Write your solution here
    pass`,
      java: `class Solution {
    public int mySqrt(int x) {
        // Write your solution here
        
    }
}`,
    },
  },
  {
    id: "climbing-stairs",
    title: "Climbing Stairs",
    description:
      "You are climbing a staircase. It takes `n` steps to reach the top.\n\nEach time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
    examples: [
      {
        input: "n = 2",
        output: "2",
        explanation: "There are two ways to climb to the top: 1 step + 1 step, or 2 steps.",
      },
      {
        input: "n = 3",
        output: "3",
        explanation: "There are three ways to climb to the top: 1 step + 1 step + 1 step, 1 step + 2 steps, or 2 steps + 1 step.",
      },
    ],
    starterCode: {
      javascript: `function climbStairs(n) {
  // Write your solution here
  
}`,
      python: `def climb_stairs(n):
    # Write your solution here
    pass`,
      java: `class Solution {
    public int climbStairs(int n) {
        // Write your solution here
        
    }
}`,
    },
  },
  {
    id: "remove-element",
    title: "Remove Element",
    description:
      "Given an array `nums` and a value `val`, remove all instances of that value in-place and return the new length.\n\nDo not allocate extra space for another array; you must do this by modifying the input array in-place with O(1) extra memory.",
    examples: [
      {
        input: "nums = [3,2,2,3], val = 3",
        output: "2",
        explanation: "The first two elements of nums should be 2.",
      },
      {
        input: "nums = [0,1,2,2,3,0,4,2], val = 2",
        output: "5",
      },
    ],
    starterCode: {
      javascript: `function removeElement(nums, val) {
  // Write your solution here
  
}`,
      python: `def remove_element(nums, val):
    # Write your solution here
    pass`,
      java: `class Solution {
    public int removeElement(int[] nums, int val) {
        // Write your solution here
        
    }
}`,
    },
  },
  {
    id: "length-of-last-word",
    title: "Length of Last Word",
    description:
      "Given a string `s` consisting of some words separated by some number of spaces, return the length of the last word in the string.\n\nA word is a maximal substring consisting of non-space characters only.",
    examples: [
      {
        input: 's = "Hello World"',
        output: "5",
      },
      {
        input: 's = "   fly me   to   the moon  "',
        output: "4",
      },
    ],
    starterCode: {
      javascript: `function lengthOfLastWord(s) {
  // Write your solution here
  
}`,
      python: `def length_of_last_word(s):
    # Write your solution here
    pass`,
      java: `class Solution {
    public int lengthOfLastWord(String s) {
        // Write your solution here
        
    }
}`,
    },
  },
  {
    id: "add-binary",
    title: "Add Binary",
    description:
      "Given two binary strings `a` and `b`, return their sum as a binary string.",
    examples: [
      {
        input: 'a = "11", b = "1"',
        output: '"100"',
      },
      {
        input: 'a = "1010", b = "1011"',
        output: '"10101"',
      },
    ],
    starterCode: {
      javascript: `function addBinary(a, b) {
  // Write your solution here
  
}`,
      python: `def add_binary(a, b):
    # Write your solution here
    pass`,
      java: `class Solution {
    public String addBinary(String a, String b) {
        // Write your solution here
        
    }
}`,
    },
  },
  {
    id: "single-number",
    title: "Single Number",
    description:
      "Given a non-empty array of integers `nums`, every element appears twice except for one. Find that single one.\n\nYou must implement a solution with a linear runtime complexity and use only constant extra space.",
    examples: [
      {
        input: "nums = [2,2,1]",
        output: "1",
      },
      {
        input: "nums = [4,1,2,1,2]",
        output: "4",
      },
    ],
    starterCode: {
      javascript: `function singleNumber(nums) {
  // Write your solution here
  
}`,
      python: `def single_number(nums):
    # Write your solution here
    pass`,
      java: `class Solution {
    public int singleNumber(int[] nums) {
        // Write your solution here
        
    }
}`,
    },
  },
  {
    id: "happy-number",
    title: "Happy Number",
    description:
      "Write an algorithm to determine if a number `n` is happy.\n\nA happy number is a number defined by the following process:\n1. Starting with any positive integer, replace the number by the sum of the squares of its digits.\n2. Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle that does not include 1.\n3. Those numbers for which this process ends in 1 are happy.",
    examples: [
      {
        input: "n = 19",
        output: "true",
        explanation:
          "1^2 + 9^2 = 82\n8^2 + 2^2 = 68\n6^2 + 8^2 = 100\n1^2 + 0^2 + 0^2 = 1",
      },
      {
        input: "n = 2",
        output: "false",
      },
    ],
    starterCode: {
      javascript: `function isHappy(n) {
  // Write your solution here
  
}`,
      python: `def is_happy(n):
    # Write your solution here
    pass`,
      java: `class Solution {
    public boolean isHappy(int n) {
        // Write your solution here
        
    }
}`,
    },
  },
  {
    id: "valid-anagram",
    title: "Valid Anagram",
    description:
      "Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise.\n\nAn anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.",
    examples: [
      {
        input: 's = "anagram", t = "nagaram"',
        output: "true",
      },
      {
        input: 's = "rat", t = "car"',
        output: "false",
      },
    ],
    starterCode: {
      javascript: `function isAnagram(s, t) {
  // Write your solution here
  
}`,
      python: `def is_anagram(s, t):
    # Write your solution here
    pass`,
      java: `class Solution {
    public boolean isAnagram(String s, String t) {
        // Write your solution here
        
    }
}`,
    },
  },
  {
    id: "missing-number",
    title: "Missing Number",
    description:
      "Given an array `nums` containing `n` distinct numbers in the range `[0, n]`, return the only number in the range that is missing from the array.",
    examples: [
      {
        input: "nums = [3,0,1]",
        output: "2",
      },
      {
        input: "nums = [0,1]",
        output: "2",
      },
    ],
    starterCode: {
      javascript: `function missingNumber(nums) {
  // Write your solution here
  
}`,
      python: `def missing_number(nums):
    # Write your solution here
    pass`,
      java: `class Solution {
    public int missingNumber(int[] nums) {
        // Write your solution here
        
    }
}`,
    },
  },
  {
    id: "move-zeroes",
    title: "Move Zeroes",
    description:
      "Given an integer array `nums`, move all 0's to the end of it while maintaining the relative order of the non-zero elements.\n\nNote that you must do this in-place without making a copy of the array.",
    examples: [
      {
        input: "nums = [0,1,0,3,12]",
        output: "[1,3,12,0,0]",
      },
      {
        input: "nums = [0]",
        output: "[0]",
      },
    ],
    starterCode: {
      javascript: `function moveZeroes(nums) {
  // Write your solution here
  
}`,
      python: `def move_zeroes(nums):
    # Write your solution here
    pass`,
      java: `class Solution {
    public void moveZeroes(int[] nums) {
        // Write your solution here
        
    }
}`,
    },
  },
  {
    id: "reverse-integer",
    title: "Reverse Integer",
    description:
      "Given a signed 32-bit integer `x`, return `x` with its digits reversed. If reversing `x` causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.",
    examples: [
      {
        input: "x = 123",
        output: "321",
      },
      {
        input: "x = -123",
        output: "-321",
      },
    ],
    starterCode: {
      javascript: `function reverseInteger(x) {
  // Write your solution here
  
}`,
      python: `def reverse_integer(x):
    # Write your solution here
    pass`,
      java: `class Solution {
    public int reverse(int x) {
        // Write your solution here
        
    }
}`,
    },
  },
  {
    id: "palindrome-linked-list",
    title: "Palindrome Linked List",
    description:
      "Given the head of a singly linked list, return `true` if it is a palindrome, otherwise return `false`.",
    examples: [
      {
        input: "head = [1,2,2,1]",
        output: "true",
      },
      {
        input: "head = [1,2]",
        output: "false",
      },
    ],
    starterCode: {
      javascript: `function isPalindromeLinkedList(head) {
  // Write your solution here
  
}`,
      python: `def is_palindrome_linked_list(head):
    # Write your solution here
    pass`,
      java: `class Solution {
    public boolean isPalindrome(ListNode head) {
        // Write your solution here
        
    }
}`,
    },
  },
  {
    id: "contains-duplicate",
    title: "Contains Duplicate",
    description:
      "Given an integer array `nums`, return `true` if any value appears at least twice in the array, and return `false` if every element is distinct.",
    examples: [
      {
        input: "nums = [1,2,3,1]",
        output: "true",
      },
      {
        input: "nums = [1,2,3,4]",
        output: "false",
      },
    ],
    starterCode: {
      javascript: `function containsDuplicate(nums) {
  // Write your solution here
  
}`,
      python: `def contains_duplicate(nums):
    # Write your solution here
    pass`,
      java: `class Solution {
    public boolean containsDuplicate(int[] nums) {
        // Write your solution here
        
    }
}`,
    },
  },
  {
    id: "power-of-two",
    title: "Power of Two",
    description:
      "Given an integer `n`, return `true` if it is a power of two, otherwise return `false`.\n\nAn integer `n` is a power of two if there exists an integer `x` such that `n == 2^x`.",
    examples: [
      {
        input: "n = 1",
        output: "true",
        explanation: "2^0 = 1",
      },
      {
        input: "n = 16",
        output: "true",
        explanation: "2^4 = 16",
      },
    ],
    starterCode: {
      javascript: `function isPowerOfTwo(n) {
  // Write your solution here
  
}`,
      python: `def is_power_of_two(n):
    # Write your solution here
    pass`,
      java: `class Solution {
    public boolean isPowerOfTwo(int n) {
        // Write your solution here
        
    }
}`,
    },
  },
  {
    id: "majority-element",
    title: "Majority Element",
    description:
      "Given an array `nums` of size `n`, return the majority element.\n\nThe majority element is the element that appears more than `⌊n / 2⌋` times. You may assume that the majority element always exists in the array.",
    examples: [
      {
        input: "nums = [3,2,3]",
        output: "3",
      },
      {
        input: "nums = [2,2,1,1,1,2,2]",
        output: "2",
      },
    ],
    starterCode: {
      javascript: `function majorityElement(nums) {
  // Write your solution here
  
}`,
      python: `def majority_element(nums):
    # Write your solution here
    pass`,
      java: `class Solution {
    public int majorityElement(int[] nums) {
        // Write your solution here
        
    }
}`,
    },
  },
  {
    id: "roman-to-integer",
    title: "Roman to Integer",
    description:
      "Given a roman numeral, convert it to an integer.\n\nRoman numerals are represented by seven different symbols: I, V, X, L, C, D, and M.",
    examples: [
      {
        input: 's = "III"',
        output: "3",
      },
      {
        input: 's = "LVIII"',
        output: "58",
        explanation: "L = 50, V = 5, III = 3.",
      },
    ],
    starterCode: {
      javascript: `function romanToInt(s) {
  // Write your solution here
  
}`,
      python: `def roman_to_int(s):
    # Write your solution here
    pass`,
      java: `class Solution {
    public int romanToInt(String s) {
        // Write your solution here
        
    }
}`,
    },
  },
  {
    id: "intersection-of-two-arrays",
    title: "Intersection of Two Arrays",
    description:
      "Given two integer arrays `nums1` and `nums2`, return an array of their intersection. Each element in the result must be unique.",
    examples: [
      {
        input: "nums1 = [1,2,2,1], nums2 = [2,2]",
        output: "[2]",
      },
      {
        input: "nums1 = [4,9,5], nums2 = [9,4,9,8,4]",
        output: "[9,4]",
      },
    ],
    starterCode: {
      javascript: `function intersection(nums1, nums2) {
  // Write your solution here
  
}`,
      python: `def intersection(nums1, nums2):
    # Write your solution here
    pass`,
      java: `class Solution {
    public int[] intersection(int[] nums1, int[] nums2) {
        // Write your solution here
        
    }
}`,
    },
  },
  {
    id: "best-time-to-buy-and-sell-stock",
    title: "Best Time to Buy and Sell Stock",
    description:
      "You are given an array `prices` where `prices[i]` is the price of a given stock on the ith day.\n\nYou want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.\n\nReturn the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.",
    examples: [
      {
        input: "prices = [7,1,5,3,6,4]",
        output: "5",
        explanation: "Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.",
      },
      {
        input: "prices = [7,6,4,3,1]",
        output: "0",
        explanation: "No transactions are done, so the max profit = 0.",
      },
    ],
    starterCode: {
      javascript: `function maxProfit(prices) {
  // Write your solution here
  
}`,
      python: `def max_profit(prices):
    # Write your solution here
    pass`,
      java: `class Solution {
    public int maxProfit(int[] prices) {
        // Write your solution here
        
    }
}`,
    },
  },
  {
    id: "valid-palindrome",
    title: "Valid Palindrome",
    description:
      "Given a string `s`, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.",
    examples: [
      {
        input: 's = "A man, a plan, a canal: Panama"',
        output: "true",
      },
      {
        input: 's = "race a car"',
        output: "false",
      },
    ],
    starterCode: {
      javascript: `function isPalindrome(s) {
  // Write your solution here
  
}`,
      python: `def is_palindrome(s):
    # Write your solution here
    pass`,
      java: `class Solution {
    public boolean isPalindrome(String s) {
        // Write your solution here
        
    }
}`,
    },
  },
  {
    id: "fizz-buzz",
    title: "Fizz Buzz",
    description:
      "Given an integer `n`, return a string array `answer` (1-indexed) where:\n\n- `answer[i] == FizzBuzz` if `i` is divisible by 3 and 5.\n- `answer[i] == Fizz` if `i` is divisible by 3.\n- `answer[i] == Buzz` if `i` is divisible by 5.\n- `answer[i] == i` (as a string) if none of the above conditions are true.",
    examples: [
      {
        input: "n = 3",
        output: '["1","2","Fizz"]',
      },
      {
        input: "n = 5",
        output: '["1","2","Fizz","4","Buzz"]',
      },
    ],
    starterCode: {
      javascript: `function fizzBuzz(n) {
  // Write your solution here
  
}`,
      python: `def fizz_buzz(n):
    # Write your solution here
    pass`,
      java: `class Solution {
    public List<String> fizzBuzz(int n) {
        // Write your solution here
        
    }
}`,
    },
  },
  {
    id: "first-unique-character",
    title: "First Unique Character in a String",
    description:
      "Given a string `s`, find the first non-repeating character in it and return its index. If it does not exist, return -1.",
    examples: [
      {
        input: 's = "leetcode"',
        output: "0",
      },
      {
        input: 's = "loveleetcode"',
        output: "2",
      },
    ],
    starterCode: {
      javascript: `function firstUniqChar(s) {
  // Write your solution here
  
}`,
      python: `def first_uniq_char(s):
    # Write your solution here
    pass`,
      java: `class Solution {
    public int firstUniqChar(String s) {
        // Write your solution here
        
    }
}`,
    },
  },
  {
    id: "ransom-note",
    title: "Ransom Note",
    description:
      "Given two strings `ransomNote` and `magazine`, return `true` if `ransomNote` can be constructed from `magazine` and `false` otherwise.\n\nEach letter in `magazine` can only be used once in `ransomNote`.",
    examples: [
      {
        input: 'ransomNote = "a", magazine = "b"',
        output: "false",
      },
      {
        input: 'ransomNote = "aa", magazine = "aab"',
        output: "true",
      },
    ],
    starterCode: {
      javascript: `function canConstruct(ransomNote, magazine) {
  // Write your solution here
  
}`,
      python: `def can_construct(ransom_note, magazine):
    # Write your solution here
    pass`,
      java: `class Solution {
    public boolean canConstruct(String ransomNote, String magazine) {
        // Write your solution here
        
    }
}`,
    },
  },
  {
    id: "valid-sudoku",
    title: "Valid Sudoku",
    description:
      "Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:\n\n1. Each row must contain the digits 1-9 without repetition.\n2. Each column must contain the digits 1-9 without repetition.\n3. Each of the nine 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.",
    examples: [
      {
        input:
          'board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]',
        output: "true",
      },
      {
        input:
          'board = [["8","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]',
        output: "false",
        explanation: "The first column has a duplicate 8.",
      },
    ],
    starterCode: {
      javascript: `function isValidSudoku(board) {
  // Write your solution here
  
}`,
      python: `def is_valid_sudoku(board):
    # Write your solution here
    pass`,
      java: `class Solution {
    public boolean isValidSudoku(char[][] board) {
        // Write your solution here
        
    }
}`,
    },
  },
];

export const LANGUAGES = [
  { id: "javascript", name: "JavaScript", icon: "/javascript.png" },
  { id: "python", name: "Python", icon: "/python.png" },
  { id: "java", name: "Java", icon: "/java.png" },
] as const;

export interface CodeQuestion {
  id: string;
  title: string;
  description: string;
  examples: Array<{
    input: string;
    output: string;
    explanation?: string;
  }>;
  starterCode: {
    javascript: string;
    python: string;
    java: string;
  };
  constraints?: string[];
}

export type QuickActionType = (typeof QUICK_ACTIONS)[number];
