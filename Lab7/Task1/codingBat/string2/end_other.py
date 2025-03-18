def end_other(a, b):
    a, b = a.lower(), b.lower()
    return a.endswith(b) or b.endswith(a)

a = input("Enter first string: ")
b = input("Enter second string: ")
print(end_other(a, b))
