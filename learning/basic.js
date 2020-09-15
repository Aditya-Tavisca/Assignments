/*(function(){
   function greetMe(yourName){
   console.log('Helo '+yourName)
}
greetMe('World')})()
*/
/*
const my_obj={'name':'value'}
console.log(my_obj.name)

my_obj.name='Aditya'

console.log(my_obj.name)
*/

/*
if(x==undefined)
var x=3

console.log*/

// Array Literals

/*
let myList=[,'Adi',,'raju']  // If there is comma at last then it will get ignored but else it will create empty array record
console.log(myList)
console.log(myList.length)
*/



//Object Literals

/* var sales = 'Toyota';

// function carTypes(name) {
//   if (name === 'Honda') {
//     return name;
//   } else {
//     return "Sorry, we don't sell " + name + ".";
//   }
// }

// var car = { myCar: 'Saturn', getCar: carTypes('Honda'), special: sales };

// console.log(car.myCar);   // Saturn
// console.log(car.getCar);  // Honda
// console.log(car.special);


// var car = { manyCars: {a: {c:'Saab'}, b: 'Jeep'}, 7: 'Mazda' };

// console.log('\n'+car.manyCars.a.c); // Jeep
/ console.log(car[7]); // Mazda
*/

// String interpolation

/*var name='Adi', lname='botre';
var str=`Hello ${name} ${lname}`
console.log(str)
*/

//variable scope

/*var x = 1;
{
  let x = 2;
}
console.log(x); // outputs 2
*/


//Exception Handling
/*
function getMonthName(mo) {
    mo = mo - 1; // Adjust month number for array index (1 = Jan, 12 = Dec)
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
                  'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    if (months[mo]) {
      return months[mo];
    } else {
      throw 'InvalidMonthNo'; // throw keyword is used here
    }
  }
  
  try { // statements to try
    monthName = getMonthName(12); // function could throw exception
    console.log(monthName)    
}
  catch (e) {
    monthName = 'unknown';
    console.log(e); // pass exception object to error handler (i.e. your own function)
  }
*/

// label , break , continue
/*
  for(let i=0;i<5;i++){
    StartPoint:
      for(let j=0;j<2;j++){
      if(i==2)
      continue StartPoint 
       //break StartPoint
      else
        console.log(i)  }
        console.log('\n')
  }

*/
  // we can pass function as arguments
/*
  function map(f, a) {
    let result = []; // Create a new Array
    let i; // Declare variable
    for (i = 0; i != a.length; i++)
      result[i] = f(a[i]);
    return result;
  }
  const cub = function(x) {
     return x * x * x; 
  }
  let numbers = [0, 1, 2, 5, 10];
  let cube = map(cub,numbers);
  console.log(cube);
*/


  //Inner Function

  /*function outside(x) {
    function inside(y) {
      return x + y;
    }
    return inside;
  }
  fn_inside = outside(3); // Think of it like: give me a function that adds 3 to whatever you give
                          // it
  result = fn_inside(7); // returns 8
  
  result1 = outside(3)(5)

  console.log(result)
  console.log(result1)


  function outside() {
    var x = 5;
    function inside(x) {
      return x * 2;
    }
    return inside;
  }
  
  console.log(outside()(10));
*/

  // how to acess inner function arguments
 /* var createPet = function(name) {  // The outer function defines a variable called "name".
  return {
    setName: function(Newname) {    // The enclosed function also defines a variable called "name".
      name = Newname;               // How do we access the "name" defined by the outer function?
    },
    getName: function(){
        return name
    }
  }
}

var fn=createPet('dog')
fn.setName('Monk')
console.log(fn.getName())*/

// Passing parameter to object using arguments

/*
function myConcat(separator) {
    var result = ''; // initialize list
    var i;
    // iterate through arguments
    for (i = 1; i < arguments.length; i++) {
       result += arguments[i] + separator;
    }
    return result;
 }

 console.log(myConcat(',','A','B','C','D'))

 console.log(myConcat('|','1','2','3'))

 // javascript supports default parameters too 
 function add(a,b=10){}

 //date object in javascript
 // year, month, day, hour, minute, and seconds. 
 var dateObjectName = new Date([parameters]);
*/


//Maps

/*
let sayings = new Map();
sayings.set('dog', 'woof');
sayings.set('cat', 'meow');
sayings.set('elephant', 'toot');
sayings.size; // 3
sayings.get('dog'); // woof
sayings.get('fox'); // undefined
sayings.has('bird'); // false
sayings.delete('dog');
sayings.has('dog'); // false

for (let [key, value] of sayings) {
  console.log(key + ' goes ' + value);
}
// "cat goes meow"
// "elephant goes toot"

sayings.clear();
*/

//Sets

/*let mySet = new Set();
mySet.add('Adi')
mySet.add(1);
mySet.add('some text');
mySet.add('foo');

mySet.has(1); // true
mySet.delete('foo');
mySet.size; // 2

for (let item of mySet) console.log(item);*/

//Objects in js
/*
var obj={
str1:'Adi',
str2:Math.random(),
str3:'String2'
}
console.log(obj.str2)
obj.str2=12222
console.log(obj.str2)

console.table(obj)
*/

//Methods of objects

// var user={
//   fname:'Adi',
//   lname:'Botre',
//   subscription:[],

//   addSubscription:function(name){
//     this.subscription.push(name)
//   },

//   getSubscription:function(){
//     return `${this.fname} have ${this.subscription.length} subscriptions`
//   }
// }

// console.log(user.getSubscription())
// user.addSubscription('Hot Star')
// user.addSubscription('Amazon')
// user.fname='Manav'
// console.log(user.getSubscription())


//for each loop

//var arry=[1,2,3,4,5,6,7]

//arry.forEach((a)=>(console.log(a)))

// for off and for in loop
//  for(let i of arry){   //// for of loop is use for array 
//    console.log(i)}

//    //and for in loop is use for objects

//    var user={
//       fname:'Adi',
//       lname:'Botre',
//    }

//    for(let n in user)
//     {
//       console.log(user[n])
//     }


// Constructor function

// function Users(fname,lname){
//   this.fname=fname
//   this.lname=lname
// }

// var use=new Users('Adi','botre')

// console.log(use.fname+'\n'+use.lname)

// var mn=new Users('Man','Tan')

// console.log(mn.fname+'\n'+mn.lname)


// Symbol.toPrimitive data conversion

// let user = {
//   name: "John",
//   money: 1000,

//   [Symbol.toPrimitive](hint) {
//     console.log(`hint: ${hint}`);
//     return hint == "string" ? `{name: "${this.name}"}` : this.money;
//   }
// };

// // conversions demo:
// //console.log(user); // hint: string -> {name: "John"}
// console.log(+user); // hint: number -> 1000
// console.log(user + 500); // hint: default -> 1500
// console.log('Aditya' + 500);


//JSON

//stringify
// var user={
//     fname:'Adi',
//     lname:'Botre',
//     address:110}

//     let json=JSON.stringify(user,['fname'])
//     console.log(json)

    
//parse
// let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

// let meetup = JSON.parse(str, function(key, value) {
//   if (key == 'date') return new Date(value);
//   return value;
// });

// console.log(meetup.date.getMonth())


// Classes
// class FirstClass{
//    fname='Adi'
//    lname='Botre'
//      // In javascript class will have onle one constructor
//        constructor(fname,lname){
//        this.fname=fname
//        this.lname=lname
//      }

//      sayHi(){
//        console.log(`Hello Mrs ${this.fname} ${this.lname}`)
//      }
// }

// let user=new FirstClass("Shubh","Anand")
// user.sayHi()



//MixIn

// let sayHiMixin = {
//   sayHi() {
//     console.log(`Hello ${this.name}`);
//   },
//   sayBye() {
//     console.log(`Bye ${this.name}`);
//   }
// };

// // usage:
// class User {
//   constructor(name) {
//     this.name = name;
//   }
// }

// // copy the methods
// Object.assign(User.prototype, sayHiMixin);

// // now User can say hi
// new User("Dude").sayHi(); 

// // For instance, here sayHiMixin inherits from sayMixin:

// let sayMixin = {
//   say(phrase) {
//     console.log(phrase);
//   }
// };

// let sayHiMixin1 = {
//   __proto__: sayMixin, // (or we could use Object.create to set the prototype here)

//   sayHi() {
//     // call parent method
//     super.say(`Hello ${this.name}`); // (*)
//   },
//   sayBye() {
//     super.say(`Bye ${this.name}`); // (*)
//   }
// };



// Object.assign(User.prototype, sayHiMixin1);

// // now User can say hi
// new User("Dude").sayBye(); 


let str="  Hello word  "
str=str.split(' ').join('')
console.log(str)