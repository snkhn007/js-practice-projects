// take two number as input
//  in place of + -
//  in place of * +
//  in place of - /
//  in place of / **
// does all these mistakes 10% of the time
// use Math.random() in range 0-1
let p = Math.random()
// console.log(a);

let a = 20, b =10;
if(p<=0.10){
    console.log("Addition: ", a-b);
    console.log("Subtraction: ", a/b);
    console.log("Multiplication: ", a+b);
    console.log("Division: ", a**b);
}
else{
    console.log("Addition: ", a+b);
    console.log("Subtraction: ", a-b);
    console.log("Multiplication: ", a*b);
    console.log("Division: ", a/b);
}


