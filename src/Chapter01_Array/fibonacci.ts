
const Fibonacci: Array<number> = [];

Fibonacci[1] = 1;
Fibonacci[2] = 1;
for (let i = 3; i < 30; i++) {
    Fibonacci[i] = Fibonacci[i - 1] + Fibonacci[i - 2]
};

console.log(JSON.stringify(Fibonacci));


