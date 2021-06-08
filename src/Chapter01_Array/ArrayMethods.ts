const Arr: Array<number> = [1, 2, 3, 4, 3];

Arr.unshift(0);
console.log(Arr);
// [ 0, 1, 2, 3, 4, 3 ]

Arr.pop();
console.log(Arr);
// [ 0, 1, 2, 3, 4 ]

Arr.shift();
console.log(Arr);
// [ 1, 2, 3, 4 ]

Arr.splice(2, 3, 7, 8, 9);
console.log(Arr);
// [ 1, 2, 7, 8, 9 ]

const itera = Arr[Symbol.iterator]();

for (let value of itera) {
  console.log(value);
}
// 1
// 2
// 7
// 8
// 9
const entrys = Arr.entries();

for (let value of entrys) {
  console.log(value);
}
// [ 0, 1 ]
// [ 1, 2 ]
// [ 2, 7 ]
// [ 3, 8 ]
// [ 4, 9 ]

const newArr = Array.from(Arr);
console.log(newArr);
// [ 1, 2, 7, 8, 9 ]
const newArr2 = Array.from(Arr, x => x % 2 === 0);
console.log(newArr2);
// [ false, true, false, true, false ]

const newArr3 = Array.of([1, 2, 3]);
console.log(newArr3);
// [ [ 1, 2, 3 ] ]

const newArr4 = Array.of(1, 2, 3);
console.log(newArr4);
// [ 1, 2, 3 ]

const newArr5 = newArr3.concat(newArr4);
console.log(newArr5);
// [ [ 1, 2, 3 ], 1, 2, 3 ]

newArr5.fill([0]);
console.log(newArr5);
// [ [ 0 ], [ 0 ], [ 0 ], [ 0 ] ]

const newArr6 = Array.of(1, 2, 3, 4, 5, 6);
newArr6.fill(2);
console.log(newArr6);
// [ 2, 2, 2, 2, 2, 2 ]

const newArr7 = [1, 2, 3, 4, [5]];
newArr7.fill(3, 1);
console.log(newArr7);
// [ 1, 3, 3, 3, 3 ]

const newArr8 = [1, 2, 3, 4, [5]];
newArr8.fill(7, 1, 4);
console.log(newArr8);
// [ 1, 7, 7, 7, [ 5 ] ]

const ones = Array(6);
console.log(ones);
// [ <6 empty items> ]
const ones2 = Array(6).fill(1);
console.log(ones2);
// [ 1, 1, 1, 1, 1, 1 ]

const newArr9 = [1, 2, 3, 4, 5, 6, 7];
newArr9.copyWithin(0, 4, 7);
console.log(JSON.stringify(newArr9));
// [5,6,7,4,5,6,7]
// target （必需）：从该位置开始替换数据。
// start （可选）：从该位置开始读取数据，默认为 0 。如果为负值，表示倒数。
// end （可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示倒数。

newArr9.reverse();
console.log(JSON.stringify(newArr9));
// [7,6,5,4,7,6,5]

newArr9.sort();
console.log(JSON.stringify(newArr9));
// [4,5,5,6,6,7,7]

const friends = [
  { name: 'John', age: 30 },
  { name: 'Ana', age: 20 },
  { name: 'Chris', age: 25 }, // ES2017允许存在尾逗号
];
function comparePerson(a: any, b: any) {
  if (a.age < b.age) {
    return -1;
  }
  if (a.age > b.age) {
    return 1;
  }
  return 0;
}
console.log(friends.sort(comparePerson));
// [
//     { name: 'Ana', age: 20 },
//     { name: 'Chris', age: 25 },
//     { name: 'John', age: 30 }
// ]

const names = ['Ana', 'ana', 'john', 'John']; // 重置数组的初始状态
console.log(
  names.sort((a, b) => {
    if (a.toLowerCase() < b.toLowerCase()) {
      return -1;
    }
    if (a.toLowerCase() > b.toLowerCase()) {
      return 1;
    }
    return 0;
  }),
);
// [ 'Ana', 'ana', 'john', 'John' ]

names.sort((a, b) => a.localeCompare(b));
console.log(names);
// [ 'ana', 'Ana', 'john', 'John' ]

interface Person {
  name: string;
  age: number;
}

// const friends: {name: string, age: number}[];
const myfriends = [
  { name: 'John', age: 30 },
  { name: 'Ana', age: 20 },
  { name: 'Chris', age: 25 },
];

function mycomparePerson(a: Person, b: Person) {
  if (a.age < b.age) {
    return -1;
  }
  if (a.age > b.age) {
    return 1;
  }
  return 0;
  // comparePerson函数的内容
}

myfriends.sort((a, b) => mycomparePerson(a, b));

console.log(myfriends);
// [
//     { name: 'Ana', age: 20 },
//     { name: 'Chris', age: 25 },
//     { name: 'John', age: 30 }
// ]
