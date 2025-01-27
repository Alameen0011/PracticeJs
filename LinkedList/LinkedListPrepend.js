class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    return this.size === 0;
  }

  prepend() { //prepend refers to adding a new node to linked list
     //when we add a node to a list we have to address two scenarios the one was
     //if the list was empty the head should point to the adding node 
     //if the list has existing nodes the refernce of adding node should point to head of list 
     //and head should point to latest added node 

     const node = new Node()
     if(this.isEmpty()){
        this.head = node
     }else{
        node.next = this.head //just visualise in the mind. it's easy
        this.head = node
     }
     this.size++
    
  }
}

const list = new LinkedList()
console.log(list.getSize())
console.log(list.isEmpty())

list.prepend(10)
