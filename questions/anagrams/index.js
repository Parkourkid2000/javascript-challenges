/** Given two strings, find out if they are anagrams of each other.
 * Two strings are anagrams if they both use the exact same characters
 * the same number of times. Spaces are not to be considered as characters.
 * Capital letters are to be considered the same as lower case letters.
 *
 * @example
 * anagrams('save', 'vase') === true
 * anagrams('C A T', 'act') === true
 * anagrams('frontend', 'simplified') === false
 */

const anagrams = (strA, strB) => {

function sortAlpha(str) {
  return  str.toLowerCase().replaceAll(' ', '').split('').sort().join('')
}

return sortAlpha(strA) === sortAlpha(strB)  


    
    // const charMapofA = {};
    // const charMapofB = {};
    // let newStrA = strA.toLowerCase().replaceAll(' ', '')
    // let newStrB = strB.toLowerCase().replaceAll(' ', '')
    
    // if (newStrA.length != newStrB.length)
    //     return false
    // else {
    //         for (let char of newStrA) {
    //                 charMapofA[char] = charMapofA[char] + 1 || 1
    //             }
    //             for (let char of newStrB) {
    //                     charMapofB[char] = charMapofB[char] + 1 || 1
    //                 }
    //             }
    //             return charMapofA == charMapofB

                // {"b": 1, "e": 1, "l": 1, "o": 1, "w": 1}
                // {"b": 1, "e": 1, "l": 1, "o": 1, "w": 1}

                // {"a": 2, "e": 2, "g": 1, "l": 1, "m": 1, "n": 2, "t": 1}
                // {"a": 2, "e": 2, "g": 1, "l": 1, "m": 1, "n": 2, "t": 1}

                // {"f": 2, "h": 1, "j": 1, "l": 1, "o": 2, "r": 1, "t": 1, "u": 2, "y": 1}
                // {"f": 2, "h": 1, "j": 1, "l": 1, "o": 2, "r": 1, "t": 1, "u": 2, "y": 1}


//   const charMapA = buildCharMap(strA);
//   const charMapB = buildCharMap(strB);

//   if (charMapA.size !== charMapB.size) {
//     return false;
//   }

//   for (const [charA, countA] of charMapA)
//     if (charMapB.get(charA) !== countA) {
//       return false;
//     }

//   return true;
// };

// function buildCharMap(str) {
//   const charMap = new Map();
//   for (const char of removeSpacesAndLowerCase(str)) {
//     charMap.set(char, charMap.get(char) + 1 || 1);
//   }
//   return charMap;
// }

// function removeSpacesAndLowerCase(str) {
//   return str.toLowerCase().replaceAll(" ", "");
        }
            
            module.exports = anagrams;
            