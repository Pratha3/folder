// function climbingLeaderboard(scores, alice) {
//   // Remove duplicate scores from the leaderboard
//   const uniqueScores = Array.from(new Set(scores));
//   console.log(uniqueScores,"uniqueScores");

//   let aliceRanks = [];

//   let i = uniqueScores.length - 1; // Index for iterating through uniqueScores
//   let j = 0; // Index for iterating through Alice's scores

//   while (j < alice.length) {
//       // If Alice's score is greater or equal to the current score on the leaderboard
//       if (alice[j] >= uniqueScores[i]) {
//           aliceRanks.push(i + 1); // Alice's rank is the current leaderboard position + 1
//           j++;
//       } else {
//           i--; // Move to the next lower score on the leaderboard
//           if (i < 0) {
//               // If we reach the end of the leaderboard, Alice's rank is 1
//               aliceRanks.push(1);
//               j++;
//           }
//       }
//   }

//   return aliceRanks;
// }

const leaderboard = (scores, playerScore) => {
  let latestScores = scores;
  let ans = [];
  for (let item of playerScore) {
    latestScores.push(item);
    let tempArray = [];

    latestScores.map((data) => {
      const find = tempArray.find((tempdata) => tempdata === data);
      if (!find) tempArray.push(data);
    });

    tempArray.sort((a, b) => b - a);
    // console.log("tempArray", tempArray,item);
    // console.log(tempArray.indexOf(item))
    let positionOfPlayer = tempArray.indexOf(item);
    ans.push(positionOfPlayer + 1);
  }
  return ans;
};

// Example usage:
const leaderboardScores = [100, 90, 90, 80, 75, 60]; // Example leaderboard scores
const aliceScores = [50, 65, 77, 90, 102]; // Example Alice's scores

const aliceRanks = leaderboard(leaderboardScores, aliceScores);
console.log(aliceRanks); // Output: [6, 5, 4, 2, 1]
