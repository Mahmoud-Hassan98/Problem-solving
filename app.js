function fibonacci(n) {
    if (n === 0) {
      return 0;
    } else if (n === 1) {
      return 1;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }
  

  console.log(fibonacci(7));

  function arraySum(arr, n) {
    if (n === 0) {
      return 0;
    } else {
      return arr[n - 1] + arraySum(arr, n - 1);
    }
  }
  
  let arr = [1, 2, 3, 4, 5]; 
  let n = arr.length;
  console.log("Sum of array elements:", arraySum(arr, n));



  function reverseString(str) {
    
    if (str.length <= 1) {
      return str;
    } else {
      return reverseString(str.slice(1)) +  str[0];
    }
  }
  
console.log(reverseString("duomham "));
  
  