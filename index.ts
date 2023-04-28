// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

class Node<T> {
  value: T;
  next: Node<T>;
  prev: Node<T>;
  constructor(value: T, next: Node<T>, prev: Node<T>) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList<T> {
  head: Node<T>;
  tail: Node<T>;

  constructor() {
    this.head = new Node<T>(null, null, null);
    this.tail = new Node<T>(null, null, null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  push_front(value: T) {
    let p = this.head.next;
    this.head.next = new Node<T>(value, this.head.next, this.head);
    p.prev = this.head.next;
  }

  push_back(value: T) {
    let p = this.tail.prev;
    this.tail.prev = new Node<T>(value, this.tail, this.tail.prev);
    p.next = this.tail.prev;
  }

  print() {
    let p = this.head;
    console.log(p);
    while (p.next) {
      console.log(p.next.value);
      p = p.next;
    }
  }
}

const dll = new DoublyLinkedList();

dll.push_back(10);
dll.push_back(20);
dll.push_back(30);
dll.push_back(40);
dll.push_back(50);
dll.push_front(50);
dll.push_front(100);

dll.print();

console.log(dll);
