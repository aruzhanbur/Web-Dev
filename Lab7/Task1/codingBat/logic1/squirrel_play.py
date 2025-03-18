def squirrel_play(temp, is_summer):
    upper_limit = 100 if is_summer else 90
    return 60 <= temp <= upper_limit

temp = int(input("Enter the temperature: "))
is_summer = input("Is it summer? (True/False): ").strip().lower() == "true"
print(squirrel_play(temp, is_summer))
