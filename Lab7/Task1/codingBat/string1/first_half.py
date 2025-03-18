def first_half(string):
    return string[:len(string) // 2]

string = input("Enter an even-length string: ").strip()

print(first_half(string))