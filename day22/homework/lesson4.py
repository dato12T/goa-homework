words = ["apple", "sun", "tree", "sky", "book", "elephant", "car"]

short_words = []

for word in words:
    if len(word) < 5:
        short_words.append(word)

print(short_words)