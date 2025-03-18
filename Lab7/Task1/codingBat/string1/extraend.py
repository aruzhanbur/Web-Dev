def extra_end(string):
    return string[-2:] * 3 

string = input("Enter a string (at least length 2): ").strip()

print(extra_end(string))
