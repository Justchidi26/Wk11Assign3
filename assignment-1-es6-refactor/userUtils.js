export const getAdults = (users) => {
  return users.filter(({ age }) => age >= 18);
}; // Filter users who are 18 years or older

export const calculateAverageScore = (users) => {
  const total = users.reduce((sum, { score }) => sum + score, 0);
  return total / users.length;
}; // Calculate the average score of the adult users

export const getUserNames = (users) => {
  return users.map(({ name }) => name);
}; // Get a list of all user names from the users array

export const findUserByName = (users, name) => {
  return users.find(({ name: userName }) => userName === name);
}; // Search the users array 