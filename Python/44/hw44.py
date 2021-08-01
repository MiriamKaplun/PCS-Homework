import random
name = "Miriam Kaplun"
address = "102 Chateau Dr"
siblings = ['Nomi', "Dovid", "Yaakov", "Nechama"]
print(f'siblings: {siblings}')

print(name[2::3])

second_to_last_person = siblings[-2]
print(second_to_last_person[1:-1])

r = 1
for w in range(1, 11):
    for q in range(1, 11):
        print(f'{w} * {r} = {w * r}')
        r += 1
        if r >= 11:
            r = 1

the_number = random.randint(1, 100)
print(f'Dont tell - the number is {the_number}')
guess = 0
tries = 0
while guess != the_number:
    try:
        guess = int(input('Guess the number '))
        tries += 1
        if guess < 1 or guess > 100:
            print('Please enter a number between 1 and 100 only')
        elif guess < the_number:
            print('Too low! Guess higher next time')
        elif guess > the_number:
            print('Too high! Guess lower next time')
    except ValueError:
        print('Please enter numbers only')
print(f'You won! It took you {tries} tries')

a = 5
b = 6
c = 27
the_numbers = [a,b,c]

more_numbers = [5,6,27]