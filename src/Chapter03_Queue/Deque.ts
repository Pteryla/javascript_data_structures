/* 双端队列（deque，或称double-ended queue）
是一种允许我们同时从前端和后端添加和移除元素的特殊队列。 */

// addFront(element)：该方法在双端队列前端添加新的元素。
// addBack(element)：该方法在双端队列后端添加新的元素（实现方法和 Queue类中的enqueue方法相同）。
// removeFront()：该方法会从双端队列前端移除第一个元素（实现方法和Queue类中的dequeue方法相同）。
// removeBack()：该方法会从双端队列后端移除第一个元素（实现方法和Stack类中的pop方法一样）。
// peekFront()：该方法返回双端队列前端的第一个元素（实现方法和Queue类中的peek方法一样）。
// peekBack()：该方法返回双端队列后端的第一个元素（实现方法和Stack类中的peek方法一样）。
// Deque类同样实现了isEmpty、clear、size和toString方法（你可以下载本书的源代码包查看完整的源代码）。

class Deque {
  count: number;
  lowestCount: number;
  items: {
    [key: number]: any;
  };
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
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
  clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }
  size() {
    return this.count - this.lowestCount;
  }
  isEmpty() {
    return this.count - this.lowestCount === 0;
  }
  addBack(element: any): void {
    this.items[this.count++] = element;
  }
  removeBack(): any {
    if (this.isEmpty()) {
      return undefined;
    } else {
      const result = this.items[this.count - 1];
      delete this.items[this.count - 1];
      this.count--;
      return result;
    }
  }
  peekBack(): any {
    if (this.isEmpty()) {
      return undefined;
    } else {
      const result = this.items[this.count - 1];
      return result;
    }
  }
  addFront(element: any) {
    if (this.isEmpty()) {
      this.addBack(element);
    } else if (this.lowestCount > 0) {
      this.lowestCount--;
      this.items[this.lowestCount] = element;
    } else {
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1];
      }
      this.count++;
      this.lowestCount = 0;
      this.items[0] = element;
    }
  }
  removeFront() {
    if (this.isEmpty()) {
      return undefined;
    } else {
      const result = this.items[this.lowestCount];
      delete this.items[this.lowestCount];
      this.lowestCount++;
      return result;
    }
  }
  peekFront() {
    if (this.isEmpty()) {
      return undefined;
    } else {
      const result = this.items[this.lowestCount];
      return result;
    }
  }
}
