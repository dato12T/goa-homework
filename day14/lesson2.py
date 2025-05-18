people = int(input("შეიყვანეთ ადამიანების რაოდენობა: "))
time = int(input("შეიყვანეთ დრო (1-დან 12-მდე): "))
switch = input("ჩართულია? (true ან false): ").lower() == "true"

lightsOn = people > 2 and time >= 7 and switch

print(lightsOn)