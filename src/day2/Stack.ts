type Node<T> = {
  value: T;
  prev?: Node<T>;
}

export default class Stack<T> {
  public length: number;
  private head?: Node<T>;

  constructor() {
    this.head = undefined;
    this.length = 0;
  }

  push(item: T): void {
    const node = {value: item} as Node<T>;
    this.length++;
    if (!this.head) {
      this.head = node;
      return;
    }
    node.prev = this.head;
    this.head = node;
  }

  pop(): T | undefined {
    if (!this.head || this.length < 1) {
      return this.head?.value;
    }
    this.length = Math.max(0, this.length - 1);
    const h = {value: this.head.value } as Node<T>;
    this.head = this.head.prev;
    return h.value;
  }

  peek(): T | undefined {
    return this.head?.value;
  }
}
