// Array of Array Products
// Given an array of integers arr, you’re asked to calculate for each index i the product of all integers except the integer at that index (i.e. except arr[i]). Implement a function arrayOfArrayProducts that takes an array of integers and returns an array of the products.

// Solve without using division and analyze your solution’s time and space complexities.

// Examples:

// input:  arr = [8, 10, 2]
// output: [20, 16, 80] # by calculating: [10*2, 8*2, 8*10]

// input:  arr = [2, 7, 3, 4]
// output: [84, 24, 56, 42] # by calculating: [7*3*4, 2*3*4, 2*7*4, 2*7*3]
// Constraints:

// [time limit] 5000ms

// [input] array.integer arr

// 0 ≤ arr.length ≤ 20
// [output] array.integer

function arrayOfArrayProducts(arr) {
    const n = arr.length
      
      // your code goes here
     if (n <= 1) {
       return []
     }
      //arr= [1,0,3,2]
    let results = []
    let left = [1] 
    let right = []  
    
    right[n-1] = 1;
    
    //result.map(v=>p/v);
    for (i = 1; i < n; i++){
      left[i] = left[i-1]*arr[i-1]
    }
      
    
    for (var i = n -2; i > -1; i--){
      right[i] = right[i+1]*arr[i+1];
    }  
    
      leftI = 1;
    for (i = 0; i < n; i++){
      results[i] = left[i]*right[i];
    
    }  
      
    return results  
    }