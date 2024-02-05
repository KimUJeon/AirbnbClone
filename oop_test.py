class Player:
    def __init__(self, name, xp):
        self.name = name
        self.xp = xp

    def say_hello(self):
        print(self.name, self.xp)

nico = Player("nico", 1000)
print(nico.name, nico.xp)