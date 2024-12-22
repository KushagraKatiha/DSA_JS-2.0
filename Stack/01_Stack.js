class Stack{
    #stack;
    constructor(){
        this.#stack = []
    }

    push(x){
        this.#stack.push(x)
    }

    pop(){
        this.#stack.pop()
    }

    top(){
        if(this.#stack.length == 0) return null
        else return this.#stack[this.#stack.length-1]
    }
}