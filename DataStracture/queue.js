// Queue is follow First In First Out (FIFO) methods

class Queue {
    constructor() {
        this.queue = []
    }
    enqueueItem(item) {
        this.queue.push(item)
    }
    dequeue() {
        if (this.queue.length) {
            return this.queue.shift()
        }
    }
}

const friends = new Queue();
friends.enqueueItem('Sadaf')
friends.enqueueItem("Mamun");
friends.enqueueItem("Arif");
friends.enqueueItem("Johir");
friends.enqueueItem("Asik");
friends.enqueueItem("Maruf");

console.log(friends.queue)
const dequeue = friends.dequeue()
 console.log(dequeue)
console.log(friends.queue)
