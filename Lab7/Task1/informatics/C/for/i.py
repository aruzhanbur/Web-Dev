x = int(input())
print(sum(1 for i in range(1, x + 1) if x % i == 0))
