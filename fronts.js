class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SLL {
    constructor(data) {
        this.head = null;
    }
    // Add Front
    addFront(val) {
        var new_node = new Node(val)
        if (!this.head) { 
            this.head = new_node;
            return this;
        }
        new_node.next = this.head;
        this.head = new_node;
        return this;
    }
    // Remove Front
    removeFront() {
        this.head = this.head.next;
        return this;
    }
    // Front
    front() {
        if (!this.head) {
            return null;
        }
        return this.head.data;
    }
}

SLL1 = new SLL();
SLL1.addFront(18);
SLL1.addFront(5);
SLL1.addFront(73);

SLL1.removeFront();
SLL1.removeFront();

SLL1.front();
SLL1.removeFront();
SLL1.front();