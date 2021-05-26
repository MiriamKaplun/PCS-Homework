class Vehicle:
    def __init__(self, vehicle_color):
        self.vehicle_color = vehicle_color
        self.speed = 0

    def go(self, speed):
        self.speed = speed
        print(f'now going at speed {speed}')

    def __str__(self):
        return f'''
Vehicle Color: {self.vehicle_color} 
Vehicle Speed: {self.speed}
                '''


class Plane(Vehicle):

    def go(self, speed):
        self.speed = speed
        print(f'now flying at speed {speed}')


v1 = Vehicle('red')
v1.go(50)
print(v1)

p1 = Plane('yellow')
p1.go(250)
print(p1)
