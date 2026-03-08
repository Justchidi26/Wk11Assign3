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
    
    

## Assignment 1 — ES6 Refactor Pack

### Objective
Practice modern JS syntax and refactoring for readability.

### Tasks
1) Create week-11/assignment-1-es6-refactor/legacy.js with any “legacy-style” code.
2) Create modern.js that refactors it using ES6+ features.
3) Your modern.js must use:
- let / const (no var)
- destructuring (object and/or array)
- template literals
- at least *3* array methods (map/filter/reduce/find/some/every)
- modules (split code into at least 2 files using import/export)

### Deliverables
- legacy.js
- modern.js (and module files)
- README.md (what changed + why)

### Rubric (20 pts)
- Correctness (6)
- ES6+ coverage (6)
- Readability (4)
- Module structure (4)

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