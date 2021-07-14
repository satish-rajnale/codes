# Sum of Integers Up To n (integersums.py)

# Write a function, add_it_up(), that takes a single integer as input and returns the sum of the integers from zero to the input parameter.

# The function should return 0 if a non-integer is passed in.

# integersums.py
def first(n):
    num = 1
    sum = 0
    while num < n + 1:
        sum = sum + num
        num = num + 1
    return sum

# integersums.py
def better(n):
    sum = 0
    for num in range(n + 1):
        sum += num
    return sum

# integersums.py
def even_better(n):
    # sum is a in-built function
    return sum(range(n + 1)) 

# integersums.py
def add_it_up(n):
    try:
        result = sum(range(n + 1))
    except TypeError:
        result = 0
    return result


# Two sum in python
class Solution(object):
   def twoSum(self, nums, target):
      """
      :type nums: List[int]
      :type target: int
      :rtype: List[int]
      """
      required = {}
      for i in range(len(nums)):
         if target - nums[i] in required:
            return [required[target - nums[i]],i]
         else:
            required[nums[i]]=i
input_list = [2,8,12,15]
ob1 = Solution()
print(ob1.twoSum(input_list, 20))