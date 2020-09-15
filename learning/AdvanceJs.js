//Rest Parameter

// function sum(...param){
//     let s=0
//     for(let i of param)
//       s+=i

//       return s
// }

// console.log(sum(1))

// console.log(sum(1,2,3,4,5))


//*****************Arguments array********************

// function sum(){
//     let s=0
//     for(let i of arguments)
//       s+=i

//       return s
// }


// console.log(sum(1))

// console.log(sum(1,2,3,4,5))

//*******************Spread syntax***************************
// let arr=[1,4,14,4,12,3]
// let arr1=[0,2,4,1]
// console.log(Math.max(...arr))  // In maths.max function will require list of args eg arg1,arg2 it wont accept array as parameter so we can use spread syntax here
// let arr3=[1,1,...arr,1,1,...arr1]
// console.log(arr3)

//****************Closure**********************
// function init(){
//     var name="Aditya"
   
//      function say(){
//          console.log("Hello "+name)
//      }
//      return say
// }
// var val=init()
// val()

// function add(x){
//     return function (y){
//         return x+y
//     }
// }

// var add1=add(7)
// console.log(add1(8))
// // alternate way
// console.log(add(5)(3))



//*********************Shedular **************************
// function sayHi(phrase, who) {
//     console.log( phrase + ', ' + who );
//   }

//   console.log("started")
//   setTimeout(sayHi, 4000, "Hello", "John"); // Hello, John

//   setInterval(sayHi, 4000, "Hello", "John"); // Hello, John


  //******************Bind function******************
  // let user = {
  //   firstName: "John"
  // };

  // let users = {
  //   firstName: "Adi"
  // };
  
  // function func(){
  //     console.log("hello "+this.firstName)
  // }
  // let fn=func.bind(users)
  // fn()
  // let f=func.bind(user)
  // f()


  //**********************Promise**************
  

  // let p=new Promise((reslove,reject)=>{
  //   let a=1+5
  //    if(a==2)
  //     reslove('Sucesss')
  //    else
  //      reject('Failed') 
  // })


  // p.then((message)=>{
  //   console.log(message)
  // },(message)=>{
  //   console.log(message)
  // })

  //**************************Genrator*******************/
  // function* generateSequence() {
  //   yield 1;
  //   yield 2;
  //   return 3;
  // }
  
  // // "generator function" creates "generator object"
  // let generator = generateSequence();
  // console.log(generator.next()); // [object Generator]
  // console.log(generator.next());
  // console.log(generator.next());


  // function* squreOfNumbers(max){
  //   let n=0;
  //    while(n<max){
  //      yield n*n
  //      n++
  //    }
  // }

  // for(n of squreOfNumbers(7))
  //  console.log(n)



  var map=new Map([["a",1],["b",2]])
  console.log(map.get("c"))
   if(map.get("c")==undefined)
     {
        console.log("not present")
     }