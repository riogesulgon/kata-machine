type Node<T> = {
  value: T;
  next: Node<T>;
}

export default class Queue<T> {
  public length: number;

  private head?: Node<T>;
  private tail?: Node<T>;

  constructor() {
    this.head = this.tail = undefined;
    this.length = 0;
  }

  enqueue(item: T): void {
    const node = {value: item} as Node<T>;
    if (!this.tail) {
      this.head = this.tail = node;
    }
    this.tail.next = node;
    this.tail = node;
    this.length++;
  }

  deque(): T | undefined {
    const h = this.head;
    if (!this.head) {
      return undefined;
    }
    this.length--;
    this.head = this.head.next;
    return h?.value;
  }

  peek(): T | undefined {
    return this.head?.value();
  }
}
