//Equality and Inequality Test. 1
console.log("Equality test with string: ", "Apple" === "Apple");
//Equality and Inequality Test. 2
console.log("Inequality test with string: ", "Apple" != "Orange");
//Test using the lower case function 
console.log("lower case function test: ", "HELLO".toLowerCase() === "hello");
//Numerical tests involving equality 
console.log("Equaility test with numbers: ", 30 === 30);
//Numerical tests involving Inequality 
console.log("InEquaility test with numbers: ", 26 != 35);
//greater than test
console.log("greater than test:", 10 > 5);
//less than test
console.log("less than test:", 5 < 10);
//greater than 0r equal to
console.log("greater than and equal to test:", 10 >= 10);
//less than and equal to
console.log("less than and equal to test: ", 5 <= 10);
//Test using "and" operator
console.log("and operator test: ", 5 === 5 && 10 > 5);
//Test using "or"  operator
console.log("or operator test: ", 5 === 5 || false);
//Test whether an item is in a array 
var fruits = ['Nashpati', 'Banana', 'amrood'];
console.log('Test "Nashpati" in the array:', fruits.includes("Nashpati"));
//Test whether an item is not in a array 
console.log('testing "Apple" is mot in array: ', !fruits.includes('Apple'));
