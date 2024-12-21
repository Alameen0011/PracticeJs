//Linked list in Javascript

//1. create node for our linked list
class Node {
    constructor (data){
        this.data = data
        this.next = null
    }
}

//2. create a linked list
class LinkedList  {
    constructor(){
        //head is a pointer in linked list which is very crucial for its further operations.
        //when we instantiate linked list there would be no node and the size is also 0 right ?. 
        // so the pointer head and size property would be null    
        this.head = null
        this.size = 0
    }
    //we can define simple method for knowing if the linked list is has any node , or  is that empty or not
    // this is why we add a property called size which help us to to know does the linkedlist is empty or how many
    //node it contains.
    getSize(){
        return this.size
    }
    isEmpty(){
        return this.size === 0
    }
}

const list = new LinkedList()
console.log(list)
console.log(list.isEmpty())
console.log(list.getSize())