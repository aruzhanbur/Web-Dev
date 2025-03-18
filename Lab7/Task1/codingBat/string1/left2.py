def left2(string):
    return string[2:] + string[:2] 

string = input("Enter a string (at least length 2): ").strip()

print(left2(string))