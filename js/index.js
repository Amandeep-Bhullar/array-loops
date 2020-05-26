//Ans.1
const anArray=[];//Create an empty Array
anArray.push('Hello');//Manually assign the String 'Hello' to index
console.log(`First manual value is: `+anArray);

anArray[3]='World';//Manually add 'World' to index [3]
console.log(`On the third index: `+anArray);

console.log(`This Array's length is: `+anArray.length);

console.log(`This Array's index[1] has no value actually it is : `+anArray[1]);

// This for() loop will work till the lengh of an array but the drawback is, it will count empty spaces also as undefined
for(let i=0; i<anArray.length; i++){
console.log(`This array has :`+anArray[i]);
}

//do while loop,it will return index and will start adding first then printing

let arrResult='';
let i=0;
do{
    i++;
arrResult=arrResult+i;
}while(i<anArray.length);
console.log(arrResult);


//for-of loop, when the str will be equal to anArray's length then it will break
for(const str of anArray){
if(str<anArray.length){
break
}
console.log(str);
}
//Ans.2 2. Assign the result of querySelectorAll to a `const` variable `allElements`
   // - Use `console.log()` to dump the Array; Describe the results.
   // - Is `allElements` actually of type `Array`? If not, read up on its type on *"MDN"*, then summarize its intended use and how it differs from an Array
    //- After completing the on loops, return back and use the three most common Array-iteration loops to traverse the values of this Array
    //Arrays: NodeLists are a language-agnostic way to access DOM elements, and Arrays are a JavaScript object you can use to contain collections 
    //of stuff. They each have their own methods and properties, and you can convert a NodeList into an Array if you need to (but not the other way around).

const allElements= document.querySelectorAll(".alpha");
console.log(allElements);
for(let i=0; i<allElements.length; i++){
    console.log(allElements[i]);
}
allElements.forEach(ele => console.log(ele));

for(const ele of allElements){
    console.log(ele);
}

//Ans.3 Planet is an array use 5 functions

const planets = ['Neptune', 'Earth', 'Krypton', 'Jupiter', 'Mercury', 'Saturn', 'Venus']

// Must result in the Array:
// ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']
console.log(planets);
planets.shift();
planets.unshift('Mercury');
planets.pop();
planets.push('Neptune');
planets.splice(1,0,'Venus');
planets.splice(3,4,'Mars','Jupiter','Saturn','Uranus');
console.log(planets);


//Start Loops
// 1. Given the Array `[1, 2, 4, 8, 16, 32, 64]`, use a counted `for` loop to:
//     - Print each values from the Array to a new line of the console, ***forward***
//     - Print each values from the Array to a new line of the console, ***backward***
const Array = [1, 2, 4, 8, 16, 32, 64];
for(let i=0; i<Array.length; i++){
    console.log(Array[i]);
}

for(let i=Array.length-1; i>=0; i--){
    console.log(Array[i]);
}


// 2. Using a JavaScript speed benchmarking tool (like [https://jsbench.me/](https://jsbench.me/) or [https://jsben.ch/](https://jsben.ch/)), determine which looping method, between `for`, `for-of`, and `forEach()`, is the fastest for iterating over the following Arrays:
//     Q: `[1, 2, 3, 4, 5]` 
//     A: forEach is fastest. 22,808 ops/s ±1.12%
//     Q: `['hello', 'world']`
//     A: forEach is fastest 58,685 ops/s ±1.03%
//     Q: `[1, 'hello', 3, 'world, 5]`
//     A:  forEach is fastest 23,645 ops/s ±0.84%
//     Q: `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]`
//     A:  forEach loop is fastest. 5,580 ops/s ±1.91%
//     Q: `['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']` 
//     A:    forEach loop is fastest. 4,391 ops/s ±0.91%
//     Q: In HTML, create a `<ul>` with *ten* children `<li>`. Use `querySelectorAll` to select all `<li>`, then iterate over the resulting `NodeList`
//     A:  for loop is fastest. 9,497 ops/s ±1.33%
//     - The String: `'Hello, world!'`
//       - Note, `forEach()` cannot iterate a String because it's not part of the String prototype, so a function must first convert the String to an Array (or similar)
//     A: Converted to array using split() method.
//      forEach loop is fastest, 105,498 ops/s ±1.43%
let Arr = [1, 2, 3, 4, 5];
for(let i=0; i<Arr.length; i++){
    console.log(Arr[i]);
}
Arr.forEach(ele => console.log(ele));

for(const ele of Arr){
    console.log(ele);
}

const alphabets= document.querySelectorAll(".alpha");

// 3. Do the answers to the above question change if using a browser with a different JavaScript engine (Firefox vs Chrome, for example)?
//     - Note, Chrome and Edge now use the same engine, so like have relatively similar outcomes
// Ans. On Firefox,for loop became fastest as compared to chrome when tested for most of the above
// Foreach was fastest only for last 2 cases
