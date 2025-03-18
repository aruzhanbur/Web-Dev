import math

a = int(input())
b = int(input())

for num in range(math.ceil(math.sqrt(a)), math.floor(math.sqrt(b)) + 1):
    print(num ** 2, end=" ")
