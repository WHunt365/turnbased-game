const codeQuestions = [
    {
        question: `function add(a, b) {
    return a + ___;
}`,
        answer: `function add(a, b) {
    return a + b;
}`
    },
    {
        question: `const arr = [1, 2, 3];
arr.push(4);
console.log(arr.length); // Should print ___`,
        answer: `4`
    },
    {
        question: `for(let i = 0; i < 5; i++) {
    console.log(i);
}`,
        answer: `for(let i = 0; i < 5; i++) {
    console.log(i);
}`
    },
    {
        question: `let x = 5;
if (x === ___) {
    console.log("x is five");
}`,
        answer: `let x = 5;
if (x === 5) {
    console.log("x is five");
}`
    },
    {
        question: `function greet(name) {
    console.log("Hello, " + name);
}`,
        answer: `
greet("World");`
    },
    {
        question: `let total = 0;
for(let i = 1; i <= 10; i++) {
    total += i;
}`,
        answer: `let total = 0;
for(let i = 1; i <= 10; i++) {
    total += i;
}
console.log(total);`
    },
    {
        question: `const person = {
    name: "Alice",
    age: 25
};
console.log(person.____);`,
        answer: `const person = {
    name: "Alice",
    age: 25
};
console.log(person.name);`
    },
    {
        question: `function multiply(a, b) {
    return a * b;
}
console.log(multiply(3, ___));`,
        answer: `function multiply(a, b) {
    return a * b;
}
console.log(multiply(3, 4));`
    },
    {
        question: `let fruits = ["apple", "banana", "cherry"];
fruits.____("date");
console.log(fruits.length);`,
        answer: `let fruits = ["apple", "banana", "cherry"];
fruits.push("date");
console.log(fruits.length);`
    },
    {
        question: `if (true) {
    console.log("This is true");
} else {
    console.log("This is false");
}`,
        answer: `if (true) {
    console.log("This is true");
} else {
    console.log("This is false");
}`
    }
];