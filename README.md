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
    └ README.md
```

* **legacy.js** – Original implementation written in older JavaScript style.
* **modern.js** – Refactored implementation using ES6+ features.
* **data.js** – Module containing the dataset used in the program.
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

* **const** instead of `var`
* **Destructuring** for extracting object properties
* **Template literals** for cleaner string formatting
* **Arrow functions** for concise function syntax
* **Array methods** such as:

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





## Assignment 2 — Async Data Dashboard (Vanilla JS)

### Objective
Master Promises + async/await + error handling.

### Task
Build a Node script that:
1) Loads two datasets asynchronously:
   - Option A: use fetch in the browser (if you prefer front-end)
   - Option B (recommended for Node): read from two local JSON files using fs/promises
2) Computes insights using array methods, e.g.:
   - top 3 values
   - average
   - count by category (use reduce)
3) Prints a clean “dashboard” report to the console.

### Step-by-step (recommended approach)
1) Create a folder:
   - week-11/assignment-2-async-dashboard/
2) Create:
   - data/ (put two .json files here)
   - index.js
   - package.json with "type": "module"
3) Read both JSON files with fs/promises *in parallel* using Promise.all.
4) Compute insights with array methods.
5) Print a clear report (use console.table where it helps).

### Requirements
- Must use async/await
- Must have try/catch
- Must demonstrate *parallel* async work with Promise.all

### Starter (optional)
You can copy this starter and modify it:
- starters/assignment-2-async-dashboard/

### Rubric (20 pts)
- Async correctness (8)
- Error handling (4)
- Data insights (4)
- Code quality (4)

---