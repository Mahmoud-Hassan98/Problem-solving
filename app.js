
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




  
class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(value) {
    this.stack.push(value);
    if (this.minStack.length === 0 || value <= this.getMin()) {
      this.minStack.push(value);
    }
  }

  pop() {
    const value = this.stack.pop();
    if (value === this.getMin()) {
      this.minStack.pop();
    }
    return value;
  }

  getMin() {
    if (this.minStack.length === 0) {
      throw new Error("Stack is empty");
    }
    return this.minStack[this.minStack.length - 1];
  }
}

                         // 2. Given a queue of integers, reverse the order of the elements in the queue.

 
function reverseQueue(queue) {
  const stack = [];
  while (queue.length > 0) {
    stack.push(queue.shift());
  }
  while (stack.length > 0) {
    queue.push(stack.pop());
  }
  return queue;
}

const queue = [1, 2, 3, 4, 5];
reverseQueue(queue); // [5, 4, 3, 2, 1]


                         // 3.Implement a Queue using 2 stacks s1 and s2.
const s1 = []; // stack 1
const s2 = []; // stack 2

function enqueue(value) {
  while (s1.length > 0) {
    s2.push(s1.pop());
  }
  s1.push(value);
  while (s2.length > 0) {
    s1.push(s2.pop());
  }
}

function dequeue() {
  if (s1.length === 0) {
    return undefined;
  }
  return s1.pop();
}

function peek() {
  if (s1.length === 0) {
    return undefined;
  }
  return s1[s1.length - 1];
}

function isEmpty() {
  return s1.length === 0;
}


                      // linked list 4. Create a function that takes a LinkedList and deletes the middle node in it and returns it


function deleteMiddleNode(list) {
  let slow = list.head;
  let fast = list.head;
  let prev = null;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    prev = slow;
    slow = slow.next;
  }

  if (prev !== null) {
    prev.next = slow.next;
  } else {
    list.head = slow.next;
  }

  list.length--;

  return slow.value;
}


const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);

deleteMiddleNode(list); // 3

console.log(list.toArray()); // [1, 2, 4, 5]



                                  //  5. Create a function that takes a LinkedList and reverses it

  function reverseLinkedList(list) {
  let prev = null;
  let current = list.head;

  while (current !== null) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  list.head = prev;
}
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);

reverseLinkedList(list);

console.log(list.toArray()); // [5, 4, 3, 2, 1]
