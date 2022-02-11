import random
import time

foods = []

while True:
    add_food = input("음식을 추가해주세요 : ")
    if (add_food == "q"):
        break
    else:
        foods.append(add_food)

set_foods = set(foods)

while True:
    delete_food = str(input("음식을 제거해주세요 : "))
    if (delete_food == "q"):
        break
    else:
        set_foods = set_foods - set([delete_food])

print(set_foods, "중에서 선택합니다.")

for i in range (5, 0, -1):
    print(i)
    time.sleep(1)

print(random.choice(list(set_foods)))