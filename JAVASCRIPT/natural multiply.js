// Function to apply operations and track results
function processNumbers() {
  let results = {}; // Object to track occurrences of final numbers
  
  // Loop through numbers from 1 to 100
  for (let i = 1; i <= 100; i++) {
    let result = i; // Start with the original number
    
    // Apply operation if divisible by 2
    if (result % 2 === 0) {
      result *= 5; // Multiply by 5 if divisible by 2
    }
    
    // Apply operation if divisible by 3
    if (result % 3 === 0) {
      result /= 3; // Divide by 3 if divisible by 3
    }

    // Track the result
    if (results[result]) {
      results[result].push(i); // Store the original number that leads to this result
    } else {
      results[result] = [i]; // Initialize with the current number
    }
  }

  // Output the repeated results and the corresponding numbers
  console.log("Repeated results and the numbers that produced them:");
  for (let key in results) {
    if (results[key].length > 1) {
      console.log(`Result: ${key}, Numbers: ${results[key].join(", ")}`);
    }
  }
}

// Call the function to process the numbers
processNumbers();
