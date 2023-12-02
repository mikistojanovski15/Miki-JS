// 1.

// function printFunc(seconds) {
//     if (typeof seconds !== 'number') {
//       console.log('Please enter number');
//       return;
//     }

//     if (seconds < 0 || seconds > 9 || !Number.isInteger(seconds)) {
//       console.log('Please enter one digit number');
//       return;
//     }

//     setTimeout(function() {
//       console.log('Coding is not that hard!');
//     }, seconds * 1000);
//   }

// 2.

// function promiseOne() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Function 1 resolved after 1 second");
//     }, 1000);
//   });
// }

//   function promiseTwo() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         reject('Function 2 rejected after 2 seconds');
//       }, 2000);
//     });
//   }

//   function promiseThree() {
//     return Promise.resolve('Function 3 resolved immediately');
//   }

//   function promiseFour() {
//     return Promise.reject('Function 4 rejected immediately');
//   }

//   function promiseFive(condition) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (condition) {
//           resolve('Function 5 resolved after 3 seconds');
//         } else {
//           reject('Function 5 rejected after 3 seconds');
//         }
//       }, 3000);
//     });
//   }

// //   a.

//   promiseOne()
//     .then(result => console.log(result))
//     .catch(error => console.error(error));

//   promiseTwo()
//     .then(result => console.log(result))
//     .catch(error => console.error(error));

// // b.

//   async function executeAsyncFunctions() {
//     try {
//       const result1 = await promiseOne();
//       console.log(result1);

//       const result2 = await promiseTwo();
//       console.log(result2);
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   executeAsyncFunctions();

// 3.

// function checkNumber(number) {
//     return new Promise((resolve, reject) => {
//       if (typeof number !== 'number') {
//         reject('Please enter a valid number');
//         return;
//       }

//       if (number % 2 === 0) {
//         resolve('The number is even');
//       } else {
//         reject('The number is odd');
//       }
//     });
//   }

//   // a.
//   function handleSuccess(message) {
//     console.log(`Success: ${message}`);
//   }

//   // b.
//   function handleError(error) {
//     console.error(`Error: ${error}`);
//   }

//   // c.
//   checkNumber(4)
//     .then(handleSuccess)
//     .catch(handleError);

//   checkNumber(7)
//     .then(handleSuccess)
//     .catch(handleError);

//   checkNumber('not a number')
//     .then(handleSuccess)
//     .catch(handleError);

// 4.

// function fetchData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({
//         name: "John Doe",
//         age: 30,
//         email: "john@example.com",
//       });
//     }, 2000);
//   });
// }

// function fetchData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({
//         name: "John Doe",
//         age: 30,
//         email: "john@example.com",
//       });
//     }, 2000);
//   });
// }

// async function displayUserDetails() {
//   try {
//     const userData = await fetchData();
//     console.log("User Details:");
//     console.log(`Name: ${userData.name}`);
//     console.log(`Age: ${userData.age}`);
//     console.log(`Email: ${userData.email}`);
//   } catch (error) {
//     console.error(`Error fetching user data: ${error}`);
//   }
// }

// 5.

// function calculateSquareRoot(number) {
//     {
//     (number < 0) {
//     new Error("Cannot calculate square root of a negative number")
//     }
//     return Math.sqrt(number)
//     } (error) {
//     new Error("Error occurred during square root calculation")
//     } {
//     console.log("Square root calculation completed.")
//     }
//     }

//     console.log(calculateSquareRoot(10))


// function calculateSquareRoot(number) {
//   if (number < 0) {
//     throw new Error("Cannot calculate square root of a negative number");
//   }

//   try {
//     const result = Math.sqrt(number);
//     if (isNaN(result)) {
//       throw new Error("NaN - Not a valid number");
//     }
//     return result;
//   } catch (error) {
//     throw new Error("Error occurred during square root calculation");
//   } finally {
//     console.log("Square root calculation completed.");
//   }
// }

// console.log(calculateSquareRoot(10));
