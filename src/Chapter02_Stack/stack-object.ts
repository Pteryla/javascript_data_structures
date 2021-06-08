export default class Stack_Object {
  count: number;
  items: {
    [key: string]: any;
  };
  constructor() {
    this.count = 0;
    this.items = {};
  }
  push(element: any) {
    this.items[this.count.toString()] = element;
    this.count++;
  }
  size() {
    return this.count;
  }
  isEmpty() {
    return this.count === 0;
  }
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    const result = this.items[this.count];
    // delete 操作符 连同属性一起删除
    delete this.items[this.count];
    return result;
  }
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }
  clear() {
    this.items = {};
    this.count = 0;

    // while (!this.isEmpty()) {
    //   this.pop();
    // }
  }
  toString() {
    if (this.isEmpty()) {
      return '';
    }
    let objString = `${this.items[0]}`;
    for (let i = 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }
}
