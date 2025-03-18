def print_hackerrank_logo(thickness):
    c = 'H'

    # Top cone
    for i in range(thickness):
        print((c * (2 * i + 1)).center(thickness * 2 - 1))

    # Top pillars
    for i in range(thickness + 1):
        print((c * thickness).ljust(thickness * 2) + (c * thickness).rjust(thickness * 6))

    # Middle belt
    for i in range((thickness + 1) // 2):
        print((c * thickness * 5).center(thickness * 6))

    # Bottom pillars
    for i in range(thickness + 1):
        print((c * thickness).ljust(thickness * 2) + (c * thickness).rjust(thickness * 6))

    # Bottom cone
    for i in range(thickness):
        print((c * (2 * (thickness - i) - 1)).center(thickness * 6))


thickness = int(input().strip())


if thickness % 2 != 0: 
    print_hackerrank_logo(thickness)
