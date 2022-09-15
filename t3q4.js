/* Question 04 (stretch)

This is a STRETCH QUESTION.

Given a size in bits convert it to relevant size in B/KB/MB/GB/TB. Round your answers to two decimal places at most. Use base 10 for sizes.

- 1 B
- 1 kB == 1000 B
- 1 MB == 1000 kB
- 1 GB == 1000 MB
- 1 TB == 1000 GB

More info on these in case you are curious:
https://en.wikipedia.org/wiki/Byte#Unit_symbol

Examples:

- filesize(1)        => "1B"
- filesize(1000)     => "1kB"
- filesize(1000000)  => "1MB"
- filesize(1500000)  => "1.5MB"
- filesize(1250000000) => "1.25GB"
- filesize(9000000000000) => "9TB"
//We know that each level is 1000

*/

// const filesize = function (bytes) {
//     //We know that each level is 1000
//     // then we should be checking to see if the number is less than 1000
//     //If it is greater or equal to 1000, we want to keep on dividing that number until it remains a single digit
//     //   if(bytes >= 1000000){
//     //     return bytes/1000000+"mB";
//     //   } else if(bytes >= 1000){
//     //     return bytes/1000+"kB";
//     //   } else {
//     //     return bytes+"B";
//     //   }
//     //one level of recurssion = k
//     //two levels of recurssion = M
//     //three levels of recurssion = G
//     //four levels of recurssion = T
//     //1MB
//     const converter = (number, levelOfRecurssion) => {
//         const arrayOfLetters = ["b", "kB", "MB", "GB", "TB"]
//         if (number >= 1000) {
//             //bytes = 1000
//             //bytes = 1
//             let newLevelOfRecurssion = levelOfRecurssion + 1
//             return converter(number / 1000, newLevelOfRecurssion);
//         } else {
//             return number + arrayOfLetters[levelOfRecurssion];
//         }
//     }
//     return converter(bytes, 0)
// };


const filesize = (bytes) => {
    const suffixArr = ["","k", "M", "G", "T"]
    let index = 0;
    while (bytes >= 1000) {
      bytes = bytes / 1000;
      index++; 
    }
   return `${bytes}${suffixArr[index]}B`;
  }
  

// console.log(filesize(1))
console.log(filesize(1000))
console.log(filesize(1250000000))
console.log(filesize(9000000000000)) //=> "9TB"