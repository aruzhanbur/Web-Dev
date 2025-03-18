def cat_dog(s):
    return s.count("cat") == s.count("dog")

s = input("Enter a string: ")
print(cat_dog(s))
