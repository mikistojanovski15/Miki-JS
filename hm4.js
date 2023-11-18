//  1.

// const books = [
//   { title: "Book 1", author: "Author A", year: 2000 },
//   { title: "Book 2", author: "Author B", year: 2010 },
//   { title: "Book 3", author: "Author C", year: 2020 },
// ];

// console.log("Titles and Authors:");
// books.forEach((book) => {
//   console.log(`${book.title} by ${book.author}`);
// });

// const firstBookAfter2000 = books.find((book) => book.year > 2000);

// console.log("\nFirst book published after 2000:");
// console.log(firstBookAfter2000);

//  2.

// const person = {
//   firstName: "Miki",
//   lastName: "Stojanovski",
//   age: 28,
//   address: {
//     street: "Vera Jocikj 12",
//     city: "Skopje",
//     state: "MKD",
//     postalCode: "1000",
//   },
//   hobbies: ["Reading", "Traveling", "Cooking"],
// };

// const additionalInfo = {
//   email: "miki.stojanovski@example.com",
//   phone: "123-456-789",
//   education: {
//     degree: "Bachelor",
//     major: "Computer Science",
//   },
// };

// const mergedPerson = { ...person, ...additionalInfo };

// console.log("Merged Person:", mergedPerson);

// const user = {
//   id: 263,
//   username: "mikis",
//   fullName: { firstName: "Miki", lastName: "Stojanovski" },
//   contact: { email: "miki.stojanovski@example.com", phone: "123-456-789" },
//   addresses: [
//     {
//       type: "home",
//       street: "Vera Jocikj 12",
//       city: "Skopje",
//       state: "MKD",
//       zip: "1000",
//     },
//     {
//       type: "work",
//       street: "Harisleer Strasse 91",
//       city: "Flensburg",
//       state: "DE",
//       zip: "24939",
//     },
//   ],
// };

// const {
//   username,
//   fullName: { firstName, lastName },
//   contact: { email },
//   addresses: [home, work],
// } = user;
// const {
//   street: homeStreet,
//   city: homeCity,
//   state: homeState,
//   zip: homeZip,
// } = home;
// const {
//   street: workStreet,
//   city: workCity,
//   state: workState,
//   zip: workZip,
// } = work;

// console.log("Username:", username);
// console.log("Full Name:", `${firstName} ${lastName}`);
// console.log("Email:", email);
// console.log("Home Address:", homeStreet, homeCity, homeState, homeZip);
// console.log("Work Address:", workStreet, workCity, workState, workZip);

//  3.

// const countries = [
//   "Albania",
//   "Bolivia",
//   "Canada",
//   "Denmark",
//   "Ethiopia",
//   "Finland",
//   "Germany",
//   "Hungary",
//   "Ireland",
//   "Japan",
//   "Kenya",
// ];

// console.log("Countries containing 'land':");
// countries
//   .filter((country) => country.toLowerCase().includes("land"))
//   .forEach((country) => {
//     console.log(country.toUpperCase());
//   });

// console.log("\nCountries ending with 'ia' and longer than 7 letters:");
// countries
//   .filter(
//     (country) => country.toLowerCase().endsWith("ia") && country.length > 7
//   )
//   .forEach((country) => {
//     console.log(country);
//   });


//  4.

//  a)

// let zooAnimals = [
//     {
//       id: "0938aa23-f153-4937-9f88-4858b24d6bce",
//       name: "lions",
//       popularity: 4,
//       location: "NE",
//       residents: [
//         {
//           name: "Zena",
//           sex: "female",
//           age: 12,
//         },
//         {
//           name: "Maxwell",
//           sex: "male",
//           age: 15,
//         },
//         {
//           name: "Faustino",
//           sex: "male",
//           age: 7,
//         },
//         {
//           name: "Dee",
//           sex: "female",
//           age: 14,
//         },
//       ],
//     },
//     {
//       id: "e8481c1d-42ea-4610-8e11-1752cfc05a46",
//       name: "tigers",
//       popularity: 5,
//       location: "NW",
//       residents: [
//         {
//           name: "Shu",
//           sex: "female",
//           age: 19,
//         },
//         {
//           name: "Esther",
//           sex: "female",
//           age: 17,
//         },
//       ],
//     },
//     {
//       id: "baa6e93a-f295-44e7-8f70-2bcdc6f6948d",
//       name: "bears",
//       popularity: 5,
//       location: "NW",
//       residents: [
//         {
//           name: "Hiram",
//           sex: "male",
//           age: 4,
//         },
//         {
//           name: "Edwardo",
//           sex: "male",
//           age: 4,
//         },
//         {
//           name: "Milan",
//           sex: "male",
//           age: 4,
//         },
//       ],
//     },
//     {
//       id: "ef3778eb-2844-4c7c-b66c-f432073e1c6b",
//       name: "penguins",
//       popularity: 4,
//       location: "SE",
//       residents: [
//         {
//           name: "Joe",
//           sex: "male",
//           age: 10,
//         },
//         {
//           name: "Tad",
//           sex: "male",
//           age: 12,
//         },
//         {
//           name: "Keri",
//           sex: "female",
//           age: 2,
//         },
//         {
//           name: "Nicholas",
//           sex: "male",
//           age: 2,
//         },
//       ],
//     },
//     {
//       id: "533bebf3-6bbe-41d8-9cdf-46f7d13b62ae",
//       name: "otters",
//       popularity: 4,
//       location: "SE",
//       residents: [
//         {
//           name: "Neville",
//           sex: "male",
//           age: 9,
//         },
//         {
//           name: "Lloyd",
//           sex: "male",
//           age: 8,
//         },
//         {
//           name: "Mercedes",
//           sex: "female",
//           age: 9,
//         },
//         {
//           name: "Margherita",
//           sex: "female",
//           age: 10,
//         },
//       ],
//     },
//     {
//       id: "89be95b3-47e4-4c5b-b687-1fabf2afa274",
//       name: "frogs",
//       popularity: 2,
//       location: "SW",
//       residents: [
//         {
//           name: "Cathey",
//           sex: "female",
//           age: 3,
//         },
//         {
//           name: "Annice",
//           sex: "female",
//           age: 2,
//         },
//       ],
//     },
//     {
//       id: "78460a91-f4da-4dea-a469-86fd2b8ccc84",
//       name: "snakes",
//       popularity: 3,
//       location: "SW",
//       residents: [
//         {
//           name: "Paulette",
//           sex: "female",
//           age: 5,
//         },
//         {
//           name: "Bill",
//           sex: "male",
//           age: 6,
//         },
//       ],
//     },
//     {
//       id: "bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5",
//       name: "elephants",
//       popularity: 5,
//       location: "NW",
//       residents: [
//         {
//           name: "Ilana",
//           sex: "female",
//           age: 11,
//         },
//         {
//           name: "Orval",
//           sex: "male",
//           age: 15,
//         },
//         {
//           name: "Bea",
//           sex: "female",
//           age: 12,
//         },
//         {
//           name: "Jefferson",
//           sex: "male",
//           age: 4,
//         },
//       ],
//     },
//     {
//       id: "01422318-ca2d-46b8-b66c-3e9e188244ed",
//       name: "giraffes",
//       popularity: 4,
//       location: "NE",
//       residents: [
//         {
//           name: "Gracia",
//           sex: "female",
//           age: 11,
//         },
//         {
//           name: "Antone",
//           sex: "male",
//           age: 9,
//         },
//         {
//           name: "Vicky",
//           sex: "female",
//           age: 12,
//         },
//         {
//           name: "Clay",
//           sex: "male",
//           age: 4,
//         },
//         {
//           name: "Arron",
//           sex: "male",
//           age: 7,
//         },
//         {
//           name: "Bernard",
//           sex: "male",
//           age: 6,
//         },
//       ],
//     },
  
  
  // for (let i = 0; i < zooAnimals.length; i++) {
  
  //     if (zooAnimals[i].popularity > 4) {
  
  //         console.log(zooAnimals[i].name);
  //     }
  //   }
  
    // b)
  
  //   for (let i = 0; i < zooAnimals.length; i++) {
  //     if (zooAnimals[i].name === 'elephants') {
  
  //         let elephant = zooAnimals[i].residents;
  
  //         let oldestElephantAge = 0;
  
  //         for (let j = 0; j < elephant.length; j++) {
  //             if (elephant[j].age > oldestElephantAge) {
  
  //                 oldestElephantName = elephant[j].name;
  //                 oldestElephantAge = elephant[j].age;
  //             }
  //         }
  //         console.log("The oldest elephant is:", oldestElephantName);
  //     }
  // }
  
  // v)
  
  // for (let i = 0; i < zooAnimals.length; i++) {
  //     if (zooAnimals[i].name === 'penguins') {
  
  //         let penguins = zooAnimals[i].residents;
  
  //         let femalePenguinsUnder10 = penguins.filter(penguin => {
  //             return penguin.sex === 'female' && penguin.age < 10;
  //         });
  
  //         console.log("Female penguins under 10:");
  //         femalePenguinsUnder10.forEach(penguin => {
  //             console.log(penguin.name);
  //         });
  //     }
  // }
  
  // g)
  
  // let animalsWithLongNames = [];
  
  // for (let i = 0; i < zooAnimals.length; i++) {
  //     let animal = zooAnimals[i];
      
  //     if (animal.name.length > 7) {
  //         animalsWithLongNames.push(animal);
  
  //         let totalAge = animal.residents.reduce((sum, resident) => sum + resident.age, 0);
  
  //         console.log(`Summary for ${animal.name}:`);
  //         console.log(`- Total Residents: ${animal.residents.length}`);
  //         console.log(`- Total Age: ${totalAge}`);
  //         console.log('---');
  //     }
  // }
  
  // console.log("Animals with long names:");
  // animalsWithLongNames.forEach(animal => {
  //     console.log(animal.name);
  // });
  
  // d) 
  
  // let leastResidentsGroup = null;
  // let largestResidentsGroup = null;
  
  // zooAnimals.forEach(animal => {
  
  //     if (!leastResidentsGroup || animal.residents.length < leastResidentsGroup.residents.length) {
  //         leastResidentsGroup = animal;
  //     }
  
  //     if (!largestResidentsGroup || animal.residents.length > largestResidentsGroup.residents.length) {
  //         largestResidentsGroup = animal;
  //     }
  // });
  
  // let allResidentsNames = [];
  
  // largestResidentsGroup.residents.forEach(resident => {
  //     allResidentsNames.push(resident.name);
  // });
  
  // console.log("Residents in the group with the least residents:");
  // leastResidentsGroup.residents.forEach(resident => {
  //     console.log(resident.name);
  // });
  
  // console.log("Residents in the group with the largest residents:");
  // largestResidentsGroup.residents.forEach(resident => {
  //     console.log(resident.name);
  // });
  
  // console.log("All residents names:");
  // console.log(allResidentsNames);
  
  
  // 5. 
  
  
  function checkGrade(grade) {
      return grade >= 90 ? 'A' :
             grade >= 80 ? 'B' :
             grade >= 70 ? 'C' :
             grade >= 60 ? 'D' : 'F';
  }
  
  let numericGrade = 85;
  let letterGrade = checkGrade(numericGrade);
  console.log("The letter grade for " + numericGrade + " is " + letterGrade);
  