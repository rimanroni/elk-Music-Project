 1.let greeting
greetign = {};
console.log(greetign);

A: {}
B: ReferenceError: greetign is not defined
C: undefined

--> ANS : B 
 This code will throw a ReferenceError because the variable greetign is misspelled. It should be greeting. As a result, greetign is not defined, leading to the ReferenceError when attempting to log it to the console


 2.function sum(a, b) {
  return a + b;
}

    sum(1, "2");
    A: NaN
    B: TypeError
    C: "12"
    D: 3
--> ANS : A 
In JavaScript, when you try to add a number to a string, the string is typically coerced into a number. However, if the string cannot be converted into a valid number, the result is NaN (Not a Number). In this case, "2" cannot be converted into a valid number when added to 1, resulting in NaN.

3.const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
A: ['🍕', '🍫', '🥑', '🍔']
B: ['🍝', '🍫', '🥑', '🍔']
C: ['🍝', '🍕', '🍫', '🥑', '🍔']
D: ReferenceError

--> ANS : A 

The info.favoriteFood assignment only modifies the value of the favoriteFood property within the info object. It does not modify the original array food. Therefore, the original array food remains unchanged, resulting in ['🍕', '🍫', '🥑', '🍔'] when logged to the console

4.function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
A: Hi there,
B: Hi there, undefined
C: Hi there, null
D: ReferenceError

--> ANS : B

The sayHi function expects a name parameter, but when it's called without any arguments, name is undefined. Therefore, the returned string includes undefined, resulting in "Hi there, undefined" when logged to the console


5.let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

    console.log(count);
    A: 1
    B: 2
    C: 3
    D: 4
--> ANS : B

    The forEach method iterates over each element in the nums array. In JavaScript, 0 evaluates to false in a conditional statement, so the condition if (num) evaluates to false for the first element 0 and true for the rest. Therefore, count is incremented for each non-zero element, resulting in a final value of 2 when logged to the console.