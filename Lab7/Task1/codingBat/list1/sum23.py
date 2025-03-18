def has23(nums):
    return 2 in nums or 3 in nums

nums = list(map(int, input().split()))
print(has23(nums))
