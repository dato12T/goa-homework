age = int(input("Enter your age: "))
experience = int(input("Enter your experience in years: "))
height = int(input("Enter your height in cm: "))

isHired = age >= 18 and experience >= 2 and height >= 175

print(f"You are hired: {isHired}")