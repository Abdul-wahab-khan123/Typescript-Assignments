
//Equality and Inequality Test 1.
console.log("Equality test with string:", "Apple" ==="Apple" );

//Equality and Inequality Test 2.
console.log("Inequality test with string:",("Apple" as string) != "Banana" );

//Tests using the lower case function Test 3.
console.log("Lower case test function:", "HELLO".toLowerCase()==="hello");

//Numerical tests involving equality Test 4.
console.log("Equality test with Number:" , 27===27);

//Numerical tests involving inequality Test 5.
console.log("Equality test with Number:" , (27 as number ) != 76);

//greater than Test 6.
console.log("Greater than test:", 21 > 9);

//Less than Test 7.
console.log("Less than test:", 9 < 21 );

//greater than or equal to Test 8.
console.log("Greater than and equal to test:", 10 >= 10);

// less than to equal Test 9.
console.log("Less than or equal to test:",5 <= 10);

// Tests using "and" operators Test 10.
console.log("And operators test:", 5===5 && 10 > 5);

// Tests using "or" operators Test 11.
console.log("And operators test:", 5===5 || 10 > 5);

//Test whether an item is in a array Test 12.
const color :string[] =["Black","Red","Blue"];
console.log('Testing "Black" is the array:',color.includes("Black"));

//Test whether an item is not in a array Test 13.
console.log('Testing "White" is not the array:',!color.includes("white"));

