name = "Miriam Kaplun"
address = "102 Chateau Dr"
siblings = ['Nomi', "Dovid", "Yaakov", "Nechama"]
print(f'siblings: {siblings}')

print(name[2::3])

second_to_last_person = siblings[-2]
print(second_to_last_person[1:-1])

r = 1
for w in range(1,10):
    for q in range(1,11):
        print(f'{w} * {r} = {w*r}')
        r += 1
        if r >= 11:
            r = 1

