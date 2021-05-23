import random


class Die:
    def __init__(self, sides):
        self.sides = sides

    def roll_die(self):
        return random.randint(1, self.sides)


my_die = Die(6)
number = my_die.roll_die()
print(f'number is {number}')


class Six_Sided_Die(Die):
    def __init__(self):
        super().__init__(6)


the_die = Six_Sided_Die()

list = [12, 34, 9, 96, 13, 87, 56]

for i in range(len(list)):
    min = i
    for j in range(i+1, len(list)):
        if list[min] < list[j]:
            min = j
    list[i], list[min] = list[min], list[i]

print(f'Sorted List {list}')
