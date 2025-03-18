def in1to10(n, outside_mode):
    return (1 <= n <= 10) if not outside_mode else (n <= 1 or n >= 10)

n = int(input("Enter a number: "))
outside_mode = input("Is outside mode enabled? (True/False): ").strip().lower() == "true"
print(in1to10(n, outside_mode))
