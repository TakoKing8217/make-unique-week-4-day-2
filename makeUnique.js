const makeUnique = (string) => [...new Set(string.split(""))].join("");
// const makeUnique = (str) => [...new Set(str)].join("");

// console.log(makeUnique("helloworld"), "should be `helowrd`");

// string = "helloworld"
// const makeUnique = (string) => {
//   let arr = string.split("");
//   // arr = ['h','e','l','l'...]
//   let result = "";
//   for (let i = 0; i < arr.length; i++) {
//     if (!result.includes(arr[i])) {
//       result += arr[i];
//     }
//   }
//   return result;
// };

console.log(makeUnique("helloworld"), "should be `helowrd`");
console.log(makeUnique("iwanttoclimbamountain"), "should be `iwantoclmbu`");
console.log(makeUnique("welovetoseeit"), "should be `welovtsi`");
console.log(makeUnique("uncopyrightable"), "should be `uncopyrightable`");
console.log(makeUnique("dermatoglyphics"), "should be `dermatoglyphics`");
