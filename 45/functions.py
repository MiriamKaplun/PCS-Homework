import random
from random import randint


def increment(number=0, by=1):
    print(f'inside increment {number} {by}')
    return number + by


print(increment(5, 2))
print(increment(5))
# print(increment('hello'))
print(increment('hello', 'goodbye'))

# if you say what your passing in then you can do in any order
print(increment(by=5, number=2))

print(f'{5} {6}', 'foo', sep=',', end='-')
print('bar')

print(f'{5} {6}', 'foo', ',', '-')


def add(numbers):
    total = 0
    for number in numbers:
        total += number
    return total


print(add([1, 2, 3]))  # this is a list
print(add((1, 2, 3)))  # this is a tuple


def add2(*numbers):
    total = 0
    for number in numbers:
        total += number
    return total


print(add2(1, 2, 3))


def add_user(**user):
    print(user)
    print(user.get('name', 'no name'))


# add_user('Joe')
add_user(name='Joe', email='', foo='bar')
add_user(bar='foo')


def choice(seq):
    spot = randint(0, len(seq) - 1)
    return seq[spot]


print(choice('Joe'))

for x in range(0, 20):
    print(choice(['apple', 'banana', 'pear', 100, 37]))

print('done')
print(random.choice(['apple', 'banana', 'pear', 100, 37]))


x = 5
print(x)


def use_x():
    global x
    x = 15
    print(x)
    q = 1


use_x()
print(x)

if False:
    z = 6
else:
    z = None

print(z)
