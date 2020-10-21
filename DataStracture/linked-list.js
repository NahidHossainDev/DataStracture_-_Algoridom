class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(head) {
        this.head = head;
    }
    add(node) {
        const newNode = new Node(node);
        let current = this.head

        while (current.next != null) {
            current = current.next
        }
        current.next= newNode
    }
    remove(value) {
        let current = this.head;
        let previous = null;
        while (current !== null) {
            if(current.value === value){
                previous.next = current.next;
                break;
            }
            previous = current;
            current = current.next;
        }
    }
}

const head = new Node(1500);
const data = new LinkedList(head);
data.add(24)
data.add(78)
data.add(90)

console.log(JSON.stringify(data))

