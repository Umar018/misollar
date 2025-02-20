//TODO 1-chisi
// drinks = [
//   { name: "lemonade", price: 50 },
//   { name: "lime", price: 10 },
//   { name: "cola", price: 20 },
// ];

// function sortDrink(arr) {
//   arr.sort((a, b) => a.price - b.price);
//   return arr;
// }

// console.log(sortDrink(drinks))

//TODO 2-chisi

// const objectToArray = {
//   likes: 2,
//   dislikes: 3,
//   followers: 10,
// };

// function object2Array(obj) {
//   return Object.entries(obj);
// }

// console.log(object2Array(objectToArray))

//TODO 3-chisi

// let names = []

// let users = [
//   { name: "John", email: "john@example.com" },
//   { name: "Jason", email: "jason@example.com" },
//   { name: "Jeremy", email: "jeremy@example.com" },
//   { name: "Jacob", email: "jacob@example.com" }
// ]

// for (let user of users) {
//     names.push(user.name);
// }

// console.log(names)

//TODO 4-chisi

// let afterNYears = {
//   Joel: 32,
//   Fred: 44,
//   Reginald: 65,
//   Susan: 33,
//   Julian: 13,
// };

// let n = 5

// function afterN(obj,n){
//     for(let key in obj){
//         obj[key] += n
//     }
//     return obj
// }

// console.log(afterN(afterNYears, n))

//TODO 5-chisi

// const database = {
//   studentsList: {
//     xamidullo: {
//       name: "xamidullo",
//       age: 33,
//       id: 123,
//       tolov: false,
//     },
//   },

//   create(user) {
//     this.studentsList[user.name] = user;
//     return this.studentsList;
//   },

//   read(name) {
//     return this.studentsList[name];
//   },

//   update(name, user) {
//     this.studentsList[name] = user;
//     this.studentsList[user.name] = user;
//   },

//   delete(name) {
//     delete this.studentsList[name];
//   },
// };

// database.create({
//   name: "xamidullo",
//   age: 33,
//   id: 123,
//   tolov: false, // yoki true
// });

// database.update("xamidullo", {
//   name: "azizbek",
//   age: 21,
//   id: 154,
//   tolov: true,
// });

// database.delete("xamidullo");

// console.log(database.studentsList);

//TODO bonus6
// let str = "hello";

// function dChar(str) {
//   let newStr = "";
//   for (let i = 0; i < str.length; i++) {
//     newStr += str[i] + str[i];
//   }
//   return newStr;
// }

// console.log(dChar(str))

//TODO bonus7
str = "A Mind Boggling Achievement"

function checkTitle(str){
  let strArr = str.split(" ")
  for(element of strArr){
    if(element[0] !== element[0].toUpperCase()){
        return false
    }
  }
  return true
}

console.log(checkTitle(str))