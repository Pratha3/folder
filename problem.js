//There are n stairs, a person standing at the bottom wants to climb stairs to reach the nth stair.
// The person can climb either 1 stair or 2 stairs at a time, the task is to count the number of ways that a person can reach at the top.

// A Javascript program to count
// number of ways to reach
// n'th stair when a person
// can climb 1, 2, ..m stairs
// at a time.

// A simple recursive
// function to find n'th
// fibonacci number
function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

// Returns number of
// ways to reach s'th stair
function countWays(s) {

//   return fib(s + 1);
  console.log("dfsdfsdf",fib(s + 1));

}

// Driver Code
let s = 5;
countWays(s)

//There are n stairs, a person standing at the bottom wants to climb stairs to reach the nth stair.
// The person can climb either 1 stair or 2 stairs at a time, the task is to count the number of ways that a person can reach at the top.
