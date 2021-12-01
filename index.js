

/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 2 */

/* WRITE YOUR ANSWER HERE */

// Ans: variable is which we use store some value or data to use futher in program.

/* EXERCISE 3
Write the code to execute an addition (a sum) of the numbers 12 and 20.
 
*/

/* WRITE YOUR ANSWER HERE */
let sum1 = 12
let sum2  = 20

let totalSum = sum1 + sum2

console.log(totalSum)

/* EXERCISE 4
 Create a variable named x and assign to it the number 12.

   
   

 */
 
/* WRITE YOUR ANSWER HERE */
let x = 12
  
 console.log(x)



/* EXERCISE 5
 Create a variable called name and assign to it the string "John Doe".

   

*/

/* WRITE YOUR ANSWER HERE */

let name = "john Doe"

console.log(name)

/* EXERCISE 6
 Execute a subtraction between the number 12 and the variable x you declared before (which is storing the value 12).
*/

/* WRITE YOUR ANSWER HERE */

console.log(x-12)


/* EXERCISE 7
 Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
*/

/* WRITE YOUR ANSWER HERE */
console.log("------------------Equality-----------")

 let name1 = "john"
 let name2 = "John"

 let equalValue = name1 === name2

 console.log(equalValue)


/* EXERCISE 8
 Create a variable named x, and assign to it a numeric value less than 10.
 Write the code to print the literal value of x (ex.: if x is 1, it should print "one", if x is 5 it should print "five" etc.).
*/

/* WRITE YOUR ANSWER HERE */

let xx = 8

if( xx){
console.log(xx)
}

/* EXERCISE 9
 [Extra] Assign a value to a variable using a ternary operator (this topic has not been covered during lesson yet,
 try to search it by yourself, tomorrow morning we'll discuss it together!)
*/

/* WRITE YOUR ANSWER HERE */

let orinalPrice = 200
let saleprice = 179 

let isOnSale = true


let jacketPrice = isOnSale? saleprice :  orinalPrice

console.log(jacketPrice)

/* WHEN YOU ARE FINISHED
 Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/



/* EXTRA 1
 Use a ternary operator to assign to a variable called gender the string values "male" or "female".
 The choice should be made based on the value of another variable called isMale.
*/

/* WRITE YOUR ANSWER HERE */

 let  gender = "female"
 let doIgender= (gender === "Male") || (gender === "female")

 if (doIgender) {
    console.log("you are male")
    }
    else {
        console.log("you are Female")
    }
    

    /* EXTRA 2
 Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8.
*/

/* WRITE YOUR ANSWER HERE */
console.log("----------------------------------------")

let int1 = 16;
let int2 = 8;



if(int1 ==8 ){
    console.log("Int1 is 8")
}else if(int2 == 8 ){
    console.log("Int2 is 8")
}else if(int1+int2==8){
console.log("Sum Int1 + Int2 = 8")

}
else if(int1-int2 == 8) {

console.log("Difference Int1 - Int2 = 8")
}

else if(int2- int1 == 8 ){
console.log("Difference Int2 - Int1 = 8")
}
else{

    console.log("None of results equal 8")

}
/* EXTRA 3
 Create a variable and assign to it the concatenation of two strings.
*/

/* WRITE YOUR ANSWER HERE */


let firstName = 'Sumrooz';
let secondname = 'Zia';

let cast ="Rajpoot" ;
 
console.log("Your Full Name is:- " + firstName + " " + secondname + " " + cast )

console.log("----------------------------------------")

let ismale = true;

let genderof = ismale? "male" : "female"

console.log(genderof)
 

let a = 3
let b = 5

if(a===8 || b===8 || a-b === 8){
    console.log(true)

}else{
    console.log(false)
}

let ProfileName = "Sumrooz"+ " Zia"
console.log(ProfileName)



console.log("-------------------------------------------------")