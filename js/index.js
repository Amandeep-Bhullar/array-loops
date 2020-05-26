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
