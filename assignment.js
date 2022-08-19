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






