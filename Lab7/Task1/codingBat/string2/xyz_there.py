import re

def xyz_there(s):
    return bool(re.search(r'(?<!\.)xyz', s))

s = input("Enter a string: ")
print(xyz_there(s))
