class queue:
    def __init__(self):
        self.queue=[]
    
    def enqueue(self,x):
        self.queue.append(x)
    
    def dequeue(self):
        if self.isempty()!=True:
            self.queue.pop(0)
        else:
            print( "Queue is empty")
        
    
    def display(self):
        if self.isempty()!=True:
            return self.queue
            
        else:
            return "Queue is empty"
        
        
    
    def isempty(self):
          if len(self.queue)<1:
              return True

q=queue()
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.dequeue()
q.dequeue()

print(q.display())  