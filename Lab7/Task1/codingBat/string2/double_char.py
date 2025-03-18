def double_char(s):
    return ''.join(c * 2 for c in s)

s = input("Enter a string: ")
print(double_char(s))
