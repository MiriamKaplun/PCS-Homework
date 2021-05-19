import math
from math import floor, ceil
name = "Joe Biden \"kamala\""
print(name)
name2 = 'Kamala Harris\' \\ \nA new line'
print(name2)

autoConcatenate = 'one' 'two' 'three' 'four'
print(autoConcatenate)

print('''This is line one
This is line two
This is line three''')  # use triple quotes for white space
print('after')

print(name.upper())
print(name.lower())
print('here is some text'.title())

print(name)

print(name.replace('Joe', 'Kamala'))
print(name)

name = name.replace('Joe', 'Kamala')
print(name)

first = 'Joe'
last = 'Biden'
print(f'First: {first} Last: {last}')  # this is better way to do it
print('First: {} Last: {}'.format(first, last))

students = ['Joe', 'Kamala', 'Jan', 'Sam', 'Bob', 'Tim']
print(students)

print(len(students))
print(len(name))

print(students[0])
print(students[-1])

print(name[5])

print(name[2:])
print(name[2:10])
print(name[:10])
print(name[2:15:2])
print(name[::2])

print(name[::-1])

print(students[2:5:2])

students.reverse()
print(students)

students.append('George')
print(students)

print('Hello' * 2)
print(students * 2)

people = ['Joe']
# people[2] = 'Kamala' - this would cause an error
people.append('Kamala')

people.append(['Sam', 'Bob'])
print(people)

people.extend(['George', 'Tim'])
print(people)

people.pop()
print(people)
people.insert(2, 'New #2')
print(people)
people.remove('New #2')
print(people)

ref = people
people.append('New one')
print(ref)

copy = people[:]
people.append('Another New one')
print(copy)

some_more_people = ['Donald', 'Mike']
people.append(some_more_people)
print(people)
copy2 = people.copy()
people.append('Yet another new one')
some_more_people.append('This will be in copy2')
print(copy2)

people = ['Sam', None, None]
people[2] = 'Joe'
print(people)

people = [[None] * 100]
print(people)

print(name.find('Biden'))
print(name.find('biden'))

print(name.index('Biden'))
# print(name.index('biden'))

try:
    print(name.index('Sam'))
except:
    print('OOPS no sam in list')

people.append('Joe')
person_to_look_for = 'Joe'
try:
    print(name.index(person_to_look_for))
except ValueError as error:
    print(f'OOPS no {person_to_look_for} in list - {error}')
except:
    print('Some other error')
else:
    print(f'YAY! we found {person_to_look_for}!')
finally:
    print('All done')
print('Also All done')

if person_to_look_for in people:
    print(f'{person_to_look_for} is not in list')
print('We always see this')

x = 25
if x < 10:
    print('x is < 10')
elif x < 20:
    print('x is < 20')
else:
    print('x >= 20')

if 'j' in name:
    print('There is a j!')
else:
    print('no j')

x = 10 / 3
print(x)
x = 10 // 3
print(x)


print(abs(-100))
#print(math.ceil(3.33))
#print(math.floor(3.33))
print(floor(3.33))
print(ceil(3.33))

#name = input('What is your name? ')
#print (f'Hello {name}!')

age = 0
#while age == 0:
#    try:
#        age = int(input('What is your age? '))
#    except ValueError as e:
#        print('Please enter a valid age!')

print(f'You will 100 in {100 - age} years')

#z = x > 5 : x : 5
message = 'You can buy alcohol' if age > 21 else 'You cant buy alcohol'
print(message)

name = 'Joe Biden'
for foo in name:
    print(foo)

i = 0
for val in people:
    #print(f'{f} - {val}')    
    i += 1

for i in range(len(name)):
    print(f'{i} - {name[i]}')  

for i in range(len(people)):
    print(f'{i} - {people[i]}')    

for i in range(10,20,2):
    print(i)  

for person in people:
    if person == 'Sam':
        print('Found Sam')
        break
else:
    print('We did not find Sam (break)')

for index, value in enumerate(people):
    print(f'{index} - {value}') 

people = ['Joe', 'Kamala', 'Jan']     
scores = [25, 50, 75] 
for name, score in zip(people, scores):
    print(name, score)   

myTuple = (1, 2, 3, 4, 5)
for x in myTuple:
    print(x)

anotherTuple = 6, 7, 8
for x in anotherTuple:
    print(x)    

empty_tuple = () #need parentheses

tuple_of_one = 3,
for x in anotherTuple:
    print(x)

#a = myTuple[0]
#b = myTuple[1]
#c = myTuple[2]
#d = myTuple[3]
#e = myTuple[4]
#you can write the below instead
a,b,c,d,e = myTuple
print(a,b,c,d,e)

a, b, c, *the_rest = myTuple
print(a, b, c, the_rest)

a, b, *the_middle_ones, the_last = myTuple
#print()  didnt finish writing his code