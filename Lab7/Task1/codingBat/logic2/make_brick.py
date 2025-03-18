def make_bricks(small, big, goal):
    return goal % 5 <= small and goal - (big * 5) <= small

small = int(input("Enter the number of small bricks (1 inch each): "))
big = int(input("Enter the number of big bricks (5 inches each): "))
goal = int(input("Enter the goal length in inches: "))
print(make_bricks(small, big, goal))
