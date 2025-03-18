def near_ten(num):
    return num % 10 <= 2 or num % 10 >= 8

num = int(input("Enter a non-negative number: "))
print(near_ten(num))
