def lone_sum(a, b, c):
    return sum(x for x in (a, b, c) if (a, b, c).count(x) == 1)

a = int(input("Enter first number: "))
b = int(input("Enter second number: "))
c = int(input("Enter third number: "))
print(lone_sum(a, b, c))
