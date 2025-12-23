#Number 1
sum = 0
sum = int(input('Please input a number: '))
while num != 0:
     num = int(input('Please input a number: '))
     sum += num
print(sum)


#Number 2
day = input("Please input a day: ")
if day == 'Monday':
     print('კვირის დასაწყისი')
elif day == "Tuesday" or day == "Wednesday" or day == "Thursday":
     print('შუა კვირა')
elif day == 'Friday':
     print("შაბათ-კვირა ახლოსაა")
elif day == 'Saturday' or day == 'Sunday':
     print('შაბათ-კვირა')
else:
     print('არასწორი დღეა')


