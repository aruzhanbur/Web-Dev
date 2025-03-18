def centered_average(nums):
    nums.sort()
    return sum(nums[1:-1]) // (len(nums) - 2)

nums = list(map(int, input("Enter space-separated integers: ").split()))
print(centered_average(nums))
