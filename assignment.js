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



	










