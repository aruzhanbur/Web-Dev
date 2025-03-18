def without_end(string):
    return string[1:-1] 

string = input("Enter a string (at least length 2): ").strip()

print(without_end(string))