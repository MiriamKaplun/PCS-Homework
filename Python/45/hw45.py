months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
          'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
days_in_the_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]


def month_and_its_days():
    for i, j in zip(days_in_the_month, months):
        (print(f'There is {i} days in {j}'))


month_and_its_days()


months1 = ('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
           'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec')
days_in_the_month1 = (31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31)


def month_and_its_days1():
    for i, j in zip(days_in_the_month, months):
        (print(f'There is {i} days in {j}'))


month_and_its_days1()

months_in_the_year = {
    'Jan': 31,
    'Feb': 28,
    'Mar': 31,
    'Apr': 30,
    'May': 31,
    'Jun': 30,
    'Jul': 31,
    'Aug': 30,
    'Sep': 31,
    'Oct': 30,
    'Nov': 31,
    'Dec': 30
}


def month_and_its_days2():
    print(months_in_the_year)


month_and_its_days2()


def month_and_its_days3(month: str) -> int: #saying that it returns an int
    #return months_in_the_year[month]
    return months_in_the_year.get(month.title(), -1) #second thing is what the default should be 

month_to_get = 'Jan'
print(f'{month_to_get} has {month_and_its_days3(month_to_get)} days')
