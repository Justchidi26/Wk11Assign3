# Wk11Assign3

Minimum required for each:
- A README.md with:
- how to run your code
- what you learned + what was hard
- Clean commits (not one giant commit)
---

# ES6 Refactor Assignment

## Overview

This project demonstrates how legacy JavaScript code can be refactored using modern ES6+ features. The original `legacy.js` file contains traditional JavaScript practices such as the use of `var`, manual loops, and string concatenation. The refactored version improves readability, maintainability, and modularity by using modern JavaScript syntax and features.

---

## Project Structure

```
week-11/
└ assignment-1-es6-refactor/
    ├ legacy.js
    ├ modern.js
    ├ data.js
    ├ userUtils.js
```

**legacy.js** – Original implementation written in older JavaScript style.
**modern.js** – Refactored implementation using ES6+ features.
**data.js** – Module containing the dataset used in the program.
* **userUtils.js** – Utility functions that process user data.

---

## How to Run the Code

### 1. Navigate to the project directory

Open a terminal and move to the assignment folder.

```
cd week-11/assignment-1-es6-refactor
```

### 2. Run the legacy version

```
node legacy.js
```

### 3. Run the modern ES6 version

```
node modern.js
```

Make sure you are using a recent version of Node.js that supports ES modules.

---

## ES6 Features Used in the Refactor

The modern implementation includes several ES6+ features:

**const** instead of `var`
**Destructuring** for extracting object properties
**Template literals** for cleaner string formatting
**Arrow functions** for concise function syntax
**Array methods** such as:

  * `map`
  * `filter`
  * `reduce`
  * `find`
* **Modules** using `import` and `export` to separate code into reusable files

---

## What I Learned

While completing this assignment, I learned how modern JavaScript features make code easier to read and maintain. Using array methods such as `map`, `filter`, and `reduce` helped simplify logic that previously required multiple loops. I also learned how to organize code into modules using `import` and `export`, which makes the project more structured and reusable.

Another key lesson was how destructuring allows direct access to object properties, reducing repetitive code. Template literals also make string formatting cleaner compared to traditional string concatenation.

---

## Challenges

One challenge was understanding how to break the program into separate modules while ensuring the files worked together correctly. Importing and exporting functions between files required careful organization of the project structure.

Another challenge was converting traditional loops into array methods. While loops are straightforward, using methods like `reduce` required thinking differently about how data is processed.

However, after practicing these concepts, the modern approach became much clearer and significantly improved the readability of the code.

---

# Async Data Dashboard

## Project Overview

This project is a Node.js script that reads two datasets (`users.json` and `orders.json`) asynchronously and generates a simple dashboard report in the console. The script analyzes the data using JavaScript array methods and prints useful insights such as total users, active users, average order amount, order counts by status, and the top 3 highest orders.

The goal of this assignment was to practice **asynchronous programming in Node.js**, working with **JSON datasets**, and using **array methods to compute insights**.

---

## Project Structure

```
week-11/
└── assignment-2-async-dashboard/
    ├── data/
    │   ├── users.json
    │   └── orders.json
    ├── index.js
    ├── package-lock.json
    └── package.json
```

---

## How to Run the Project

### 1. Clone or Download the Project

Navigate to the project directory:

```
cd assignment-2-async-dashboard
```

### 2. Install Dependencies

This project does not require external dependencies, but you can run:

```
npm install
```

### 3. Run the Script

Run the program using:

```
npm run start
```

or

```
node index.js
```

---

## What I Learned

While working on this project, I learned several important JavaScript and Node.js concepts:

* How to read files asynchronously in Node.js using `fs/promises`.
* How `async/await` simplifies working with asynchronous operations.
* How `Promise.all()` can run multiple asynchronous operations in parallel.
* How to use array methods such as `map`, `filter`, `reduce`, and `sort` to analyze data.
* How to format console output using `console.table()` for better readability.
* The importance of error handling using `try/catch` when working with asynchronous code.

---

## Challenges I Faced

One of the main challenges was understanding how to correctly load both datasets **in parallel** using `Promise.all()` instead of sequentially. Initially, it was confusing to understand how both promises resolve together and how to destructure the result into `users` and `orders`.

Another challenge was using the `reduce` method to count items by category. It took some time to understand how the accumulator object stores and updates counts dynamically.

Understanding how to properly work with file paths in ES modules using `new URL(..., import.meta.url)` was also something new that required some research.

---



## Technologies Used

* Node.js
* JavaScript (ES Modules)
* fs/promises
* JSON datasets
* Git