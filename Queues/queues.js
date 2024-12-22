class Queue{
    constructor(){
        this.queue = []
    }

    enqueue(elem){
        this.queue.push(elem)
    }

    dequeue(){
        if(!this.isEmpty){
            this.queue.shift()
        }else{
            return `Queue is already empty !`
        }
    }

    isEmpty(){
        if(!this.queue.length) return true
    }

    display(){
        console.log(this.queue);
    }
}

const myQueue = new Queue()
myQueue.enqueue(5)
myQueue.enqueue(6)
myQueue.enqueue(8)
myQueue.enqueue(2)
myQueue.enqueue(1)

myQueue.dequeue()
myQueue.dequeue()
myQueue.dequeue()

myQueue.display()