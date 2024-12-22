class Car:
    def __init__(self,windows,doors,enginetype):
        self.windows = windows
        self.doors=doors
        self.engine=enginetype
    
    def drive(self):
        print(f"the car is driving {self.engine}")
class Tesla(Car):
    def __init__(self, windows, doors, enginetype,is_driving):
        super().__init__(windows,doors,enginetype)
        self.is_driving=is_driving
        
    def selfdriving(self):
        print(f"the car is driving {self.engine} with {self.is_driving} feature")

tesla1=Tesla(4,5,"electric",True)   
tesla1.selfdriving()
tesla1.drive()