import textwrap

def wrap(string, max_width):
    return textwrap.fill(string, max_width)

string = input().strip()
max_width = int(input().strip())

print(wrap(string, max_width))
