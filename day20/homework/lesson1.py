
word = input("შემოიტანე სიტყვა: ")

vowels = "აეიოუ"

count = 0
for letter in word:
    if letter.lower() in vowels:
        count += 1

print("ხმოვანთა რაოდენობა სიტყვაშია:", count)
