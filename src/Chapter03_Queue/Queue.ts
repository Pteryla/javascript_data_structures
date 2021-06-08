/* 队列是遵循先进先出（FIFO，也称为先来先服务）原则的一组有序的项。
队列在尾部添加新元素，并从顶部移除元素。最新添加的元素必须排在队列的末尾。
在现实中，最常见的队列的例子就是排队。 */
class Queue {
  count: number;
  lowestCount: number;
  items: {
    [key: number]: any;
  };
  constructor() {
    this.count = 0;
    // 追踪第一个元素
    this.lowestCount = 0;
    this.items = {};
  }
  enqueue(element: any) {
    this.items[this.count] = element;
    this.count++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }
  isEmpty() {
    return this.count - this.lowestCount === 0;
  }
  size() {
    return this.count - this.lowestCount;
  }
  clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }
  toString() {
    if (this.isEmpty()) {
      return '';
    }
    let objString = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }
}

const myQ = new Queue();
myQ.enqueue(1);
myQ.enqueue(2);
myQ.enqueue(3);
myQ.dequeue();
myQ.dequeue();
// myQ.dequeue();
// myQ.dequeue();

console.log(myQ);
