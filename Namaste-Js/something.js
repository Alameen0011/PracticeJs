// function some() {

//   for (var i = 1; i <= 5; i++) {

//     function referChange(num){
//         setTimeout(function () {
//             console.log(num);
//           }, num * 1000);

//     }
//     referChange(i)

//   }
//incase of var in the copy of function is referring to same i
//so at that time it would be 6 i mean the i
//but in case of let the reference of i at the time of making copy
//of function and putting timer is different , basically the
//reference issue is here , if we can make some reference change
//on each iteration ie each copy of function will hold different
//references so different values. so without doing var i want to
//make a system which wil make the reference different on each copy
//   console.log("Hello js");
// }
// some()

//Got it  - basically this is just memmory and referencing issues

//Callback issues - callback hell, inversion of control

//promises - fetch

// const REST_COUNTRIES_API = "https://restcountries.com/v3.1/name/usa";

// const response = fetch(REST_COUNTRIES_API);

// console.log(response, "response from api");

// response.then(function (res) {
//  return res.json();
// }).then(function(data) {
//   console.log(data,"data from api")
// }).catch((err) => {
//   console.log(err,"error from api")
// })

//createOrder
//proceedToPayment
//show order summary
//updateWallet

// createOrder(cart,function () {
//   showOrderSummary(orderId,function (){
//     proceedToPayment(orderId,function () {
//       updateWallet(orderId,function () {
//         console.log("Order placed successfully")
//       })
//     })
//   })
// })

// createOrder(cart)
// .then(function (orderId){ return showOrderSummary(orderId)  })
// .then(function (payINfo){ return proceedToPayment(payINfo)  })

// function createOrder(cart,callback){
//   console.log("order is placing ..")
//   //logic
//   setTimeout(function (){

//     console.log("order placed")
//     callback()
//   },1000)
// }

// const cart = ["shoe", "short", "pant"];

// creatOrder(cart, function (orderId) {
//   proceedToPayment(orderId, function (orderId) {
//     showOrderSummary(orderId, function () {
//       updateWallet();
//     });
//   });
// });

//basically this cause inversion of controll and callback hell - inorder to solve this
// the error handling mechanism was also very poor on this approach

//callback based style
//promise based style
//async await based style

// =============================================================================

/* const cartItems = ["shoes", "shirt", "short"];
//this is consumer part
const promise = createOrder(cartItems)
console.log(promise)
  promise.then(function (orderId) {
    console.log(orderId,": orderID")
    const newHell = proceedToPayment(orderId);
    console.log(newHell)
    return newHell
  })
  .then((res) => {
    console.log(res,":response from proceed to payment api")
      }).catch(function(err){
    console.log(err)
  })

// now we are going to write create order api , basically an api always return a promise
// and this is producer part we are writing the api
function createOrder(cartItems){
  
  return new Promise(function (resolve,reject) {
    //logic of creating an order
    // validating
    //save to database
    //return a order id  which means the case is resolved i mean an order is created
    //suppose there is some issue in validation so we reject the promise
    console.log(cartItems)
   
    setTimeout(function () {
       const hi = true
      if(hi === true){
        resolve("ORDERID1")
      }else{
        reject("cant create an order at the moment")
      }
  
    },5000)
   
  })

 

}


function proceedToPayment (orderId) {
  return new Promise (function (resolve,reject) {
    
    //basically the logic works here validation , db interaction, resolving or rejcecting ie success or failure

    // so we are here just simulating the delay of actaual api using setTimeout
    
    setTimeout(function(){
      const hello = true
      if(hello){
        resolve("payment successfull")
      }else {
        reject("payment rejected")
      }
    },2000)


  })
}
*/

// ==================================================================
//Async Await very important concept
// async and await is used to handle promises
// two way of handling promises 1. then,catch 2. async await



// function gotName() {
//   getName.then((res) => console.log(res,"response from getName promise"))
//   console.log("hello from everywhere")
// }

// gotName()

// const getData = () => {
//   return new Promise((resolve , reject) => {
//     resolve("HELLO")
//   })
// }

// getData().then((res) => console.log(res,"respones from getData api"))

// async function always returns a promise
// await can only be used inside an async


// const getName = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Alameen"), 20000);
// });

// const getName2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("sayyid"), 40000);
// });

// async function getData() {
//   console.log("Hello world");

//   const startTime = Date.now();  // Record start time
//   const data = await getName;    // Wait for the first Promise
//   console.log("First Promise took:", Date.now() - startTime, "ms");
//   console.log("hi hello");
//   console.log(data);

//   const startTime2 = Date.now();  // Record start time for the second
//   const data2 = await getName2;   // Wait for the second Promise
//   console.log("Second Promise took:", Date.now() - startTime2, "ms");
//   console.log("hi hello");
//   console.log(data2);
// }

// getData();
