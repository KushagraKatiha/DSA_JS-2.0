class stack:
    def __init__(self):
        self.__stack=[]

    def push(self,x):
        self.__stack.append(x)
    
    def pop(self):
        if self.isempty()!=True:
            self.__stack.pop()
        else:
            print("Stack is empty")
    
    def top(self):
        if(len(self.__stack)==0):return None
        else:return self.__stack[-1]

    def display(self):
        if self.isempty()==True:
            print("Stack is empty")
        else:
            for ele in self.__stack[::-1]:
                print(f"|{ele}|")
    
    def isempty(self):
        if(len(self.__stack)<1):
            return True

s=stack()

s.push(2)
s.push(3)
s.push(4)

# s.pop()
# s.pop()
#print(s.top()) 
s.display()