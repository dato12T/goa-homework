name = input("შეიყვანე შენი სახელი: ")
age = int(input("შეიყვანე შენი ასაკი: "))
experience = int(input("შეიყვანე გამოცდილება წლებში: "))

if name == "დათო":
    print("Hired")
elif age > 25 and experience > 1:
    print("Hired")
elif age > 22 and experience > 2:
    print("Hired")
elif age > 20 and experience > 3:
    print("Hired")
else:
    print("Not hired")

