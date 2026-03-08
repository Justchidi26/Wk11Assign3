// Array of user objects containing id, name, age, and score
var users = [
  { id: 1, name: "Alice", age: 22, score: 80 },
  { id: 2, name: "Bob", age: 17, score: 45 },
  { id: 3, name: "Charlie", age: 25, score: 90 },
  { id: 4, name: "David", age: 30, score: 60 }
];

// Function that processes a list of users
function processUsers(list) {

  // Array to store users who are adults (age 18 and above)
  var adults = [];

  // Variable to store the total score of adult users
  var totalScore = 0;

  // Loop through the list of users
  for (var i = 0; i < list.length; i++) {

    // Check if the user is an adult
    if (list[i].age >= 18) {

      // If the user is an adult, add them to the adults array
      adults.push(list[i]);
    }
  }

  // Loop through the adults array to calculate the total score
  for (var j = 0; j < adults.length; j++) {

    // Add each adult user's score to the total score
    totalScore += adults[j].score;
  }

  // Calculate the average score of adult users
  var average = totalScore / adults.length;

  // Print the average score to the console
  console.log("Average score of adults is: " + average);

}

// Call the function and pass the users array
processUsers(users);