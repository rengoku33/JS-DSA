// Basic ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // Ascii conversion
  a = 97, A = 65
      'char'.charCodeAt(0) - 'a';

// SET ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // array to set and vice verca: 
      let sett = new Set(arr);
      let arr = [...sett];

// Array ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // create new array of default size and fill it with empty values (initially "empty items" not "undefined" and this is not preferred)
      let arr = new Array(26).fill(0);

  // create array of arrays
      let arr = new Array(size).fill().map(() => []);

  // compare two arrays
      JSON.stringify(arr1) == JSON.stringify(arr2)
