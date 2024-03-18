function findstem(arr) {
  // Determine size of the array
  let n = arr.length;

  // Take first word from array as reference
  let s = arr[0];
  let len = s.length;

  let res = "";

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j <= len; j++) {
      // generating all possible substrings
      // of our reference string arr[0] i.e s
      let stem = s.substring(i, j);
      let k = 1;
      for (k = 1; k < n; k++) {
        // Check if the generated stem is
        // common to all words
        if (!arr[k].includes(stem)) break;
      }

      // If current substring is present in
      // all strings and its length is greater
      // than current result
      if (k === n && res.length < stem.length) res = stem;
    }
  }

  return res;
}

// Driver Code
// let arr = ["grace", "graceful", "disgraceful", "gracefully"];
let arr = ["tenantzx", "andtzx", "anantzx", "rantz"];

// Function call
let stems = findstem(arr);
console.log(stems);
