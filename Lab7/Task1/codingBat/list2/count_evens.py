def count_evens(nums):
    return sum(1 for num in nums if num % 2 == 0)

nums = list(map(int, input("Enter space-separated integers: ").split()))
print(count_evens(nums))
