
result = []

for i in range(10):
    num = int(input(f"შეიყვანეთ {i+1}-ე რიცხვი: "))
    if num % 2 == 0:  
        result.append(num)

print("ლუწი რიცხვები:", result)



names = ["Gurami", "Gio", "Andria", "Mariami", "Dato"]

long_names = [name for name in names if len(name) > 5]
print("გრძელი სახელები (>5):", long_names)
