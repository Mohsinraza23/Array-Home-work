/*Question 1
Create an array named fruits that contains the following string
elements: "apple", "banana", "mango", "orange".  */


let furits: string[] = ["apple" , "banana" , "mango" , "orange "]
console.log(furits);



/*Question 2
Declare an array named numbers that can contain only number
elements and initialize it with the values 10, 20, 30, and 40. */

let array2 : number[] = [10 ,20 ,30 ,40] 
console.log(array2);


/* Question 3
Access the third element of the fruits array and assign it to a
variable named thirdFruit. */

let furits1 = ["apple" , "banana" , "mango" , "orange "]
let thirdFurite = furits[2]
console.log(thirdFurite);

/* Question 4
Change the second element of the numbers array to 25. */

let numbers : number[] = [10 ,20 ,30 ,40] 
numbers[1] = 25; // Changing the second element to 25
console.log(numbers);

/* Question 5
Add the element "grape" to the end of the fruits array using the
method. */

let furits2 = ["apple" , "banana" , "mango" , "orange "]
furits2.push("grapes");
console.log(furits2);

/*Question 6
Remove the last element from the fruits array using the
method and assign it to a variable named lastFruit. */

let fruits: string[] = ["apple", "banana", "mango", "orange"];
let lastFruit: string | undefined = fruits.pop(); // Removes the last element and as
console.log(lastFruit);

/*  Question 7
Remove the first element from the fruits array using the
method and assign it to a variable named firstFruit.   */

let fruits5: string[] = ["apple", "banana", "mango", "orange"];
let firstFruit: string | undefined = fruits.shift(); // Removes the first element
console.log(firstFruit);


/* Question 8
Add the element "kiwi" to the beginning of the fruits array
using the method.  */

let fruits6: string[] = ["apple", "banana", "mango", "orange"];
fruits.unshift("kiwi"); // Adds "kiwi" to the beginning of the fruits array
console.log(fruits);

/*Question 9
Remove 2 elements from the fruits array starting from index 1
using the method.  */

let fruits9: string[] = ["apple", "banana", "mango", "orange"];
fruits.splice(1, 2); // Removes 2 elements starting from index 1
console.log(fruits);


/* Question 10
Insert the elements "pineapple" and "pear" at index 2 of the
fruits array using the method. */

let fruits8: string[] = ["apple", "banana", "mango", "orange"];
fruits.splice(2, 0, "pineapple", "pear"); // Inserts "pineapple" and "pear"
console.log(fruits);

/* Question 11
Create a new array named citrusFruits that contains the first
two elements of the fruits array using the method.*/

let fruitsArr: string[] = ["apple", "banana", "pineapple", "pear", "mango", "orange"];
let citrusFruits: string[] = fruits.slice(0, 2); // Contains elements 
console.log(fruits);

/* Question 12
Create a new array named lastTwoFruits that contains the last
two elements of the fruits array using the method. */

let fruits4: string[] = ["apple", "banana", "pineapple", "pear", "mango", "orange"];
let lastTwoFruits: string[] = fruits.slice(-2); // Contains the last two elements
console.log(fruits);


























