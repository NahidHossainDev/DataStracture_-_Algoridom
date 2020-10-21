// Stack is follow Last In Fast Out (LIFO) method

class Stack {
    constructor(){
        this.stack = []
    }
    add(item) {
        this.stack.push(item)
    }
    removeItem() {
        if (this.stack.length) {
            return this.stack.pop();
        }
    }
}

const guest = new Stack();
guest.add("Jamal")
guest.add("kamal");
guest.add("Samal");
guest.add("Rahman");
guest.add("Tamal");

console.log(guest.stack)
const removeGuest = guest.removeItem()
console.log(removeGuest)
console.log(guest)