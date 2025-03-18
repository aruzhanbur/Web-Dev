import re

def count_code(s):
    return len(re.findall(r'co.e', s))

s = input("Enter a string: ")
print(count_code(s))
