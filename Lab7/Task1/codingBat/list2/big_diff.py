def big_diff(nums):
    return max(nums) - min(nums)

nums = list(map(int, input("Enter space-separated integers: ").split()))
print(big_diff(nums))
