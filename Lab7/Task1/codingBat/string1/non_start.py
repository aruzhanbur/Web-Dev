def non_start(a, b):
    return a[1:] + b[1:]

a = input("Enter first string: ").strip()
b = input("Enter second string: ").strip()

print(non_start(a, b))