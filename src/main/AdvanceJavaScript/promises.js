// There are 3 stage of promises 
//1. pending
//2. reslove
//3.reject


var promise =(num)=>{
 return new Promise((reslove, reject) => {
    setTimeout(function (num) {
        if(num%2==0)
        reslove('Even No')
        else
        reject('Error while running...!!!!')
    }, 2000,num)
})
}

// promise.then((val)=>{
//     if(val%2==0)
//      console.log('Even no')
//     else
//      console.log('Odd no') 
// }).catch((error)=>{
//     console.log(error)
// })

promise(3).then((message)=>{
    console.log(message)
}).catch((message)=>{
    console.log(message)
})