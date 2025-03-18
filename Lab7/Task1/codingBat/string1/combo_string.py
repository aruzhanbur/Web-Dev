def combo_string(a, b):
    if len(a) < len(b):
        short, long = a, b
    else:
        short, long = b, a
    return short + long + short

a = input("Enter the first string: ").strip()
b = input("Enter the second string: ").strip()

print(combo_string(a, b))