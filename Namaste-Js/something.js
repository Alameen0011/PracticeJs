function some() {


  for (var i = 1; i <= 5; i++) {

    function referChange(num){
        setTimeout(function () {
            console.log(num);
          }, num * 1000);

    }
    referChange(i)

  }
//incase of var in the copy of function is referring to same i
//so at that time it would be 6 i mean the i
//but in case of let the reference of i at the time of making copy
//of function and putting timer is different , basically the
//reference issue is here , if we can make some reference change
//on each iteration ie each copy of function will hold different 
//references so different values. so without doing var i want to 
//make a system which wil make the reference different on each copy
  console.log("Hello js");
}
some()

//Got it  - basically this is just memmory and referencing issues
