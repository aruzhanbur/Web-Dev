def make_abba(a, b):
    return a + b + b + a

a = input("Enter first string: ").strip()
b = input("Enter second string: ").strip()

print(make_abba(a, b))
