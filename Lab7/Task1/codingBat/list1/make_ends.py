def make_ends(nums):
    return [nums[0], nums[-1]]

nums = list(map(int, input().split()))
print(make_ends(nums))
