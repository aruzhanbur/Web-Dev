n = int(input())
arr = list(map(int, input().split()))

print(sum(1 for num in arr if num > 0))
