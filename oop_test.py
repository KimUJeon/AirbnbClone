# class Human:
#     def __init__(self, name):
#         self.name = name
#
#     def say_hello(self):
#         print(f"hello my name is {self.name}")
#
# class Player(Human):
#     def __init__(self, name, xp):
#         super().__init__(name)
#         self.xp = xp
#
# class Fan(Human):
#     def __init__(self, name, fav_team):
#         super().__init__(name)
#         self.fav_team = fav_team
#
# nico_player = Player("nico", 10)
# nico_player.say_hello()
# nico_fan = Fan("nico_fan", "dontknow")
# nico_fan.say_hello()
#
# class Dog:
#     def woof(self):
#         print("woof woof")
#
# class Beagle(Dog):
#     def woof(self):
#         super().woof()
#         print("super woof")
#
# beagle = Beagle()
# beagle.woof()

class Dog:
    def __init__(self, name):
        self.name = name
    def __str__(self):
        return f"Dog: {self.name}"
    def __getattribute__(self, name):
        print(f"they want to get {name}")
        return "😂"

jia = Dog("jia")
print(jia.name)
