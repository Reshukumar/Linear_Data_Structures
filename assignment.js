//Write a program to find all pairs of an integer array whose sum is equal to a given number?

function findPair(array,num){
    for (let i=0;i<array.length;i++)
        for (let j=i;j<array.length;j++)
        {
            if (array[i]+array[j] == num )
            {
                console.log(array[i],array[j]);
                break;
            }
            
        }
}

array = [10,20,30,50,70,60,15,15];
num=30;
findPair(array,num)

//ans 1 ends

//Q2. Write a program to reverse an array in place? In place means you cannot create a new array. You have to update the original array.

function reverseArray(array){
    var start=0;end=array.length-1,temp=0;
      while (start < end)
        {
            temp = array[start];
            array[start] = array[end];
            array[end] = temp;
            start++;
            end--;
        }
        console.log(array)
    }
    
array = [10,20,30,50,70,60,15];
reverseArray(array)

//ans2 ends

//Q3.Write a program to check if two strings are a rotation of each other?


	/* Function checks if passed strings (str1 and str2)
	are rotations of each other */
	function areRotations( str1, str2)
	{
		// There lengths must be same and str2 must be
		// a substring of str1 concatenated with str1.
		return (str1.length == str2.length) &&
			((str1 + str1).indexOf(str2) != -1);
	}
	
	

		var str1 = "AACD";
		var str2 = "ACDA";

		if (areRotations(str1, str2))
			document.write("Strings are rotations of each other");
		else
			document.write("Strings are not rotations of each other");

//ans3 ends

//Q4. Write a program to print the first non-repeated character from a string?


const NO_OF_CHARS = 256

/* The function returns index of the first
non-repeating character in a string. If
all characters are repeating then
returns Number.MAX_VALUE */
function firstNonRepeating(str)
{
	let arr = new Array(NO_OF_CHARS)
	for(let i=0;i<NO_OF_CHARS;i++){
		arr[i] = [0,0];
	}

	for (let i=0;i<str.length;i++) {
		arr[str.charCodeAt(i)][0]++;
		arr[str.charCodeAt(i)][1]= i;
	}

	let res = Number.MAX_VALUE;
	for (let i = 0; i < NO_OF_CHARS; i++)

		// If this character occurs only
		// once and appears before the
		// current result, then update the
		// result
		if (arr[i][0] == 1)
			res = Math.min(res, arr[i][1]);

	return res;
}

/* Driver program to test above function */

let str = "geeksforgeeks";
let index = firstNonRepeating(str);
if (index == Number.MAX_VALUE)
	document.write("Either all characters are repeating or string is empty");
else
	document.write("First non-repeating character is ",str[index]);

//ans 4 ends

//Q5. Read about the Tower of Hanoi algorithm. Write a program to implement it.

function towerOfHanoi(n, from_rod,  to_rod,  aux_rod)
{
        if (n == 0)
        {
            return;
        }
        towerOfHanoi(n - 1, from_rod, aux_rod, to_rod);
        document.write("Move disk " + n + " from rod " + from_rod +
        " to rod " + to_rod+"<br/>");
        towerOfHanoi(n - 1, aux_rod, to_rod, from_rod);
    }
  
    // Driver code
    var n = 3; // Number of disks
    towerOfHanoi(n, 'A', 'C', 'B');

    //ans 5 ends

//Q6. Read about infix, prefix, and postfix expressions. Write a program to convert postfix to prefix expression.


// function to check if character
// is operator or not
function isOperator(x)
{

	switch (x) {
	case '+':
	case '-':
	case '/':
	case '*':
		return true;
	}
	return false;
}

// Convert postfix to Prefix expression
function postToPre(post_exp)
{
	let s = [];

	// length of expression
	let length = post_exp.length;

	// reading from right to left
	for (let i = 0; i < length; i++) {

		// check if symbol is operator
		if (isOperator(post_exp[i])) {

			// Pop two operands from stack
			let op1 = s[s.length - 1];
			s.pop();
			let op2 = s[s.length - 1];
			s.pop();

			// concat the operands and operator
			let temp = post_exp[i] + op2 + op1;

			// Push String temp back to stack
			s.push(temp);
		}

		// if symbol is an operand
		else {

			// Push the operand to the stack
			s.push(post_exp[i] + "");
		}
	}

	let ans = "";
	while (s.length > 0)
		ans += s.pop();
	return ans;
}

let post_exp = "ABC/-AK/L-*";
	
// Function call
document.write("Prefix : " + postToPre(post_exp));

//ans 6 ends here


//Q7. Write a program to convert prefix expression to infix expression.
	//  program to convert prefix to Infix
	
	// Function to check if character
	// is operator or not
	function isOperator(x)
	{
		switch(x)
		{
			case '+':
			case '-':
			case '*':
			case '/':
			case '^':
			case '%':
				return true;
		}
		return false;
	}

	// Convert prefix to Infix expression
	function convert(str)
	{
		let stack = [];

		// Length of expression
		let l = str.length;

		// Reading from right to left
		for(let i = l - 1; i >= 0; i--)
		{
			let c = str[i];

			if (isOperator(c))
			{
				let op1 = stack[stack.length - 1];
				stack.pop()
				let op2 = stack[stack.length - 1];
				stack.pop()

				// Concat the operands and operator
				let temp = "(" + op1 + c + op2 + ")";
				stack.push(temp);
			}
			else
			{

				// To make character to string
				stack.push(c + "");
			}
		}
		return stack[stack.length - 1];
	}
	
	let exp = "*-A/BC-/AKL";
	
	document.write("Infix : " + convert(exp));

	//ans 7 ends here

//Q8. Write a program to check if all the brackets are closed in a given code snippet.

// Javascript program for checking
// balanced brackets

// Function to check if brackets are balanced
function areBracketsBalanced(expr)
{
	
	// Using ArrayDeque is faster
	// than using Stack class
	let stack = [];

	// Traversing the Expression
	for(let i = 0; i < expr.length; i++)
	{
		let x = expr[i];

		if (x == '(' || x == '[' || x == '{')
		{
			
			// Push the element in the stack
			stack.push(x);
			continue;
		}

		// If current character is not opening
		// bracket, then it must be closing.
		// So stack cannot be empty at this point.
		if (stack.length == 0)
			return false;
			
		let check;
		switch (x){
		case ')':
			check = stack.pop();
			if (check == '{' || check == '[')
				return false;
			break;

		case '}':
			check = stack.pop();
			if (check == '(' || check == '[')
				return false;
			break;

		case ']':
			check = stack.pop();
			if (check == '(' || check == '{')
				return false;
			break;
		}
	}

	// Check Empty Stack
	return (stack.length == 0);
}

// Driver code
let expr = "([{}])";

// Function call
if (areBracketsBalanced(expr))
	document.write("Balanced ");
else
	document.write("Not Balanced ");

// ans 8 completes

//Q9. Write a program to reverse a stack.

// JavaScript code to reverse a stack using recursion


let st = [];

// Below is a recursive function
// that inserts an element
// at the bottom of a stack.
function insert_at_bottom(x)
{
	if(st.length==0)
		st.push(x);
	else
	{
		// All items are held in Function
			// Call Stack until we reach end
			// of the stack. When the stack becomes
			// empty, the st.size() becomes 0, the
			// above if part is executed and
			// the item is inserted at the bottom
			let a = st.pop();
			insert_at_bottom(x);

			// push allthe items held
			// in Function Call Stack
			// once the item is inserted
			// at the bottom
			st.push(a);
	}
	
	
}

// Below is the function that
	// reverses the given stack using
	// insert_at_bottom()
function reverse()
{
	if(st.length > 0)
		{
			
			// Hold all items in Function
			// Call Stack until we
			// reach end of the stack
			let x = st.pop();
			reverse();
			
			// Insert all the items held
			// in Function Call Stack
			// one by one from the bottom
			// to top. Every item is
			// inserted at the bottom
			insert_at_bottom(x);
		}
}

// Driver Code

// push elements into
// the stack
st.push('1');
st.push('2');
st.push('3');
st.push('4');

document.write("Original Stack<br>");

document.write(st.join(" ")+"<br>");

// function to reverse
// the stack
reverse();

document.write("Reversed Stack<br>");

document.write(st.join(" "));


//ans 9 ends here

//Q10. Write a program to find the smallest number using a stack


// Javascript program to find the smallest


function findFirstMissing(array, start, end)
{
	if (start > end)
		return end + 1;

	if (start != array[start])
		return start;

	let mid = parseInt((start + end) / 2, 10);

	// Left half has all elements from 0 to mid
	if (array[mid] == mid)
		return findFirstMissing(array, mid+1, end);

	return findFirstMissing(array, start, mid);
}

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 10];
let n = arr.length;

document.write("smallest Missing element is " +
findFirstMissing(arr, 0, n - 1));

//assignment ends here





	







	










