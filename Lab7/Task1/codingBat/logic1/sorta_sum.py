def sorta_sum(a, b):
    total = a + b
    return 20 if 10 <= total <= 19 else total

a = int(input("Enter the first number: "))
b = int(input("Enter the second number: "))
print(sorta_sum(a, b))
