/**
 * Starter — Assignment 2: Async Data Dashboard (Node + fs/promises)
 *
 * Run:
 *   npm install
 *   npm run start
 */

import { readFile } from "node:fs/promises";

// Calculate average
function average(numbers) {
  // If the array is empty, return 0 to avoid division by zero
  if (numbers.length === 0) return 0;
  const total = numbers.reduce((sum, num) => sum + num, 0);
  return total / numbers.length;
}

//Count items by a category
function countBy(items, keyFn) {
  return items.reduce((acc, item) => {
    // Determine category for this item
    const key = keyFn(item);

    // If key exists increment, otherwise initialize with 1
    acc[key] = (acc[key] ?? 0) + 1;

    return acc;
  }, {});
}

//Load a JSON file asynchronously
async function loadJson(path) {
  // Read file contents
  const raw = await readFile(path, "utf8");

  // Convert JSON string to JavaScript object
  return JSON.parse(raw);
}

async function main() {
  try {
    // Load both datasets in parallel (faster than sequential for independent work)
    const [users, orders] = await Promise.all([
      loadJson(new URL("./data/users.json", import.meta.url)),
      loadJson(new URL("./data/orders.json", import.meta.url))
    ]);

    // Compute insights with array methods
    // Filter active users
    const activeUsers = users.filter(user => user.isActive);

    // Extract only order amounts
    const orderAmounts = orders.map(order => order.amount);

    // Calculate average order value
    const avgOrder = average(orderAmounts);

    // Count orders grouped by status (paid, pending, failed)
    const ordersByStatus = countBy(orders, order => order.status);

     // Extra: top 3 orders
    //Find the top 3 orders
    const top3 = [...orders].sort((a, b) => 
      b.amount - a.amount).slice(0, 3);

    // Output report
    console.log("\n=== Async Data Dashboard ===");
    // Basic statistics
    console.log(`Total Users: ${users.length}`);
    console.log(`Active Users: ${activeUsers.length}`);
    console.log(`Total Orders: ${orders.length}`);
    console.log(`Average Order Amount: ${avgOrder.toFixed(2)}\n`);

    // Display grouped order status
    console.log("Orders By Status:");
    console.table(
      Object.entries(ordersByStatus).map(([status, count]) => ({
        Status: status,
        Count: count
      }))
    );

    // Display top 3 orders
    console.log("Top 3 Orders:");
    console.table(top3Orders);

  } catch (error) {

    /**
     * Error handling
     * If anything fails (file read, JSON parse, etc.)
     * the error is caught and displayed.
     */
    console.error("Dashboard failed:", error.message);

    // Set exit code so Node knows script failed
    process.exitCode = 1;
  }
}

/**
 * Execute the main function
 * Top-level await works because package.json has "type": "module"
 */
await main();

