import { users } from "./data.js";
import {
  getAdults,
  calculateAverageScore,
  getUserNames
} from "./userUtils.js";

// Call the getAdults function =and stored in the adults array
const adults = getAdults(users);

// The function returns the computed average score and stores in averageScore
const averageScore = calculateAverageScore(adults);

console.log(`Average score of adults is: ${averageScore}`);

// Call the function that Get a list of all user names from the users array and stores it in names
const names = getUserNames(users);

// Join the names into a single string separated by commas
// Then print the result
console.log(`All users: ${names.join(", ")}`);

// Search the users array for a user named "Charlie" and store in user
const user = findUserByName(users, "Charlie");

// Check if the user was found
if (user) {

  // Use object destructuring to extract name and age from the user object
  const { name, age } = user;

  // Print the user's name and age
  console.log(`Found user ${name} aged ${age}`);
}
