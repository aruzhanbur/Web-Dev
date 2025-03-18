def love6(a, b):
    return a == 6 or b == 6 or a + b == 6 or abs(a - b) == 6

a = int(input("Enter the first number: "))
b = int(input("Enter the second number: "))
print(love6(a, b))
