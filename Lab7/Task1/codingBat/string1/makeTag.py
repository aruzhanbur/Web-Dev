def make_tags(tag, word):
    return f"<{tag}>{word}</{tag}>"

tag = input("Enter the HTML tag: ").strip()
word = input("Enter the word: ").strip()

print(make_tags(tag, word))