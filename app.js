
                            //  1.Fibonacci Series:
function fibonacci(n) {
    if (n === 0) {
      return 0;
    } else if (n === 1) {
      return 1;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }
  

  console.log(fibonacci(7));
 
                            // 2. The sum of Array Elements:
  function arraySum(arr, n) {
    if (n === 0) {
      return 0;
    } else {
      return arr[n - 1] + arraySum(arr, n - 1);
    }
  }
  
  let arr = [1, 2, 3, 4, 5]; 
  let n = arr.length;
  console.log("Sum of array elements:", arraySum(arr, n));


                                //   3.Reverse a String:
  function reverseString(str) {
    
    if (str.length <= 1) {
      return str;
    } else {
      return reverseString(str.slice(1)) +  str[0];
    }
  }
  
console.log(reverseString("duomham "));



                     // .............................................//  data_structure......................................
                    



                  // 1. Implement a function that returns the minimum element in a stack in constant time complexity.


function minElement(stack) {

   */
  let min = stack[0]; // Initialize the minimum to the first element in the stack
  for (let i = 1; i < stack.length; i++) {
    // Iterate over the remaining elements in the stack
    if (stack[i] < min) {
      // If the current element is smaller than the current minimum, update the minimum
      min = stack[i];
    }
  }
  return min;
}
                         // 2. Given a queue of integers, reverse the order of the elements in the queue.

 
function reverseQueue(queue) {
  /*
   * Reverses the order of elements in the given queue.
   *
   * Args:
   *   queue: a queue represented as an array
   *
   * Returns:
   *   The reversed queue
   */
  let reversed = []; // Create an empty array to hold the reversed queue
  while (queue.length > 0) {
    // While the original queue is not empty
    reversed.push(queue.pop()); // Remove and add the last element of the original queue to the reversed queue
  }
  return reversed;
}



                         // 3.Implement a Queue using 2 stacks s1 and s2.
class Queue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(value) {
    this.stack1.push(value);
  }

  dequeue() {
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }

    return this.stack2.pop();
  }
}
const q = new Queue();

q.enqueue("apple");
q.enqueue("banana");
q.enqueue("cherry");
console.log(q.dequeue()); // "apple"
console.log(q.dequeue()); // "banana"



                      // linked list 4. Create a function that takes a LinkedList and deletes the middle node in it and returns it


class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  deleteMiddleNode() {
    if (this.length < 2) {
      throw new Error('LinkedList must have at least 2 nodes.');
    }

    let slow = this.head;
    let fast = this.head.next;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    // slow is now pointing to the middle node
    const middleNode = slow.next;
    slow.next = middleNode.next;
    middleNode.next = null;
    this.length--;

    return middleNode;
  }
}



                                  //  5. Create a function that takes a LinkedList and reverses it


class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new LinkedListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  print() {
    let current = this.head;
    let result = '';
    while (current) {
      result += current.value;
      current = current.next;
      if (current) result += ' -> ';
    }
    console.log(result);
  }

  reverse() {
    let previous = null;
    let current = this.head;
    let next = null;

    while (current) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }

    this.tail = this.head;
    this.head = previous;
  }
}

function reverseLinkedList(linkedList) {
  let previous = null;
  let current = linkedList.head;
  let next = null;

  while (current) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }

  linkedList.tail = linkedList.head;
  linkedList.head = previous;

  return linkedList;
}

// Create a linked list
const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);

// Print the original linked list
linkedList.print(); // "1 -> 2 -> 3 -> 4"

// Reverse the linked list using the `reverse` method
linkedList.reverse();

// Print the reversed linked list
linkedList.print(); // "4 -> 3 -> 2 -> 1"

// Reverse the linked list using the `reverseLinkedList` function
reverseLinkedList(linkedList);

// Print the reversed linked list
linkedList.print(); // "1 -> 2 -> 3 -> 4"


