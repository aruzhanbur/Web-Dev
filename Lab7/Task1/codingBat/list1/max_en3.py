def max_end3(nums):
    max_val = max(nums[0], nums[-1])
    return [max_val] * 3

nums = list(map(int, input().split()))
print(max_end3(nums))
