students = []   


for i in range(3):
    name = input("სტუდენტის სახელი: ")
    students.append(name)

students.insert(0, "Teacher")   
students.pop() 

print("სიის სიგრძე:", len(students))
print("საბოლოო სია:", students)
