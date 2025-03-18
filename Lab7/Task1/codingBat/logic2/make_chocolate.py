def make_chocolate(small, big, goal):
    max_big = min(big, goal // 5)
    remainder = goal - (max_big * 5)
    return remainder if remainder <= small else -1

small = int(input("Enter the number of small bars (1 kilo each): "))
big = int(input("Enter the number of big bars (5 kilos each): "))
goal = int(input("Enter the goal weight in kilos: "))
print(make_chocolate(small, big, goal))
