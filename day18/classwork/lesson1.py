number = int(input("შეიყვანე მთელი რიცხვი: "))


sum = 0


for i in range(1, number + 1):
    sum += i


print("1-იდან", number, "-მდე რიცხვების ჯამი არის:", sum)