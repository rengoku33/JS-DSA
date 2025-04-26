// Basic ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
   // Ascii conversion
	a = 97, A = 65
      	'char'.charCodeAt(0) - 'a';

   // "%" - modulus operator returns remainder,   "/" - returns quotient
	10%2 == 0 /* true */  10/2 /* 5 */

   // max || min value initialize
	let max = Infinity, min = -Infinity

// SET ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
   // array to set and vice verca: 
      	let sett = new Set(arr);
      	let arr = [...sett];

// Array ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
   // create new array of default size and fill it with empty values (initially "empty items" not "undefined" and this is not preferred)
      	let arr = new Array(26).fill(0);

   // create "empty" array of arrays
      	let arr = new Array(size).fill().map(() => []);

   // create a 2D array
      	let visited = Array.from({length: board.length}, () => 
		    new Array(board[0].length).fill(false)
	    )	

   // add an array to an array
      	outerArr.push([...innerArr]);

   // compare two arrays
      	JSON.stringify(arr1) == JSON.stringify(arr2)

   // array to string:
	let str = arr.join('') // by default it will join my "," if argument is empty, you can customize it eg: '' will simply merge all, '.' will merge with "." between elements

   // find max or min in an array
	let max = Math.max(...arr)

// String -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
   // string to char array
	let charArray = str.split('');
	//or 
	let charArray = [...str];

// Hashmap -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
   // set value or increment value
	map.set(key, (map.get(value) || 0) + 1);






// ----------------------------------------------------------------------------------------------- PPACTICES ------------------------------------------------------------------------------------------------------------
   // skip dupelicates ( used for permutation / subsets )
	nums.sort((a, b) => a - b); // ✅ sort to handle duplicates (initially)
	// inside dfs() for loop
	if (i > idx && nums[i] === nums[i - 1]) continue; // ✅ skip duplicates at same depth
