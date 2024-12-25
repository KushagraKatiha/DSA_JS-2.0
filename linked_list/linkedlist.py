class Node:
    def __init__(self, data):
        self.data=data
        self.next=None

class Linked_List:
    def __init__(self):
        self.head=None

    #insertion

    def insert_at_beginning(self,data):
        new_node=Node(data)
        # check if head is already empty
        if(not self.head):
            self.head=new_node
        
        else:
            new_node.next=self.head
            self.head=new_node

    def insert_at_end(self,data):

        new_node=Node(data)
        if(not self.head):
            self.head=new_node
        cur=self.head
        while(cur.next):
            cur=cur.next
        cur.next=new_node

    def insert_at_index(self,index,data):
        new_node=Node(data)
        cur=self.head
        for i in range(index-1):
            cur=cur.next
        new_node.next=cur.next
        cur.next=new_node

    def insert_before_key(self,key,data):
        new_node=Node(data)
        cur=self.head
    
        if(self.head.data==key):
            self.insert_at_beginning(data)
            return 
        
        while(cur.next.data!=key ):
            if(cur.next.next==None):
                print("key not found")
                return
            cur=cur.next
        new_node.next=cur.next
        cur.next=new_node

    def search(self,key):
        cur=self.head
        count=0
        while(cur.next!=None):
            if(cur.data==key):
                print("key found at index:",count)
                return
            cur=cur.next
            count+=1
        print("key not found")
        return 

    def print_ll(self):
        curr=self.head
        while(curr):
          
            print(curr.data,"->",end="")
            curr=curr.next

    #deletion
    def delete_at_beginnig(self):
        self.head=self.head.next
 
    def delete_at_end(self):
        cur=self.head
        while(cur.next.next!=None):
            cur=cur.next
        cur.next=None
    
    def delete_at_index(self,index):
        cur=self.head
        for i in range(index-1):
            cur=cur.next
        cur.next=cur.next.next
    
    def delete_after_a_key(self,key):
        cur=self.head
        while(cur.data!=key):
            cur=cur.next
        cur.next=cur.next.next




    def reverse(self):
        p=None
        c=self.head
        n=None

        while(c):
            n = c.next
            c.next = p
            p = c
            c = n
        self.head=p














my_ll=Linked_List()
my_ll.insert_at_beginning(2)
my_ll.insert_at_beginning(3)
my_ll.insert_at_end(4)
my_ll.insert_at_index(2,5)
my_ll.insert_before_key(4,0)
# my_ll.delete_after_a_key(0)
my_ll.print_ll()
my_ll.reverse()
print("\n")
my_ll.print_ll()
            





         