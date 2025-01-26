/** Reverse the provided string.
 *
 * @example
 * reverse('david') === 'divad'
 * reverse('frontend') === 'dnetnorf'
 * reverse('Simplified!') === '!deifilpmiS'
 */

// 'David' => ['D', 'a', 'v', 'i', 'd']
// a = '', c = 'D' => a = 'D' + '' = 'D'
// a = 'D', c = 'a' => a = 'a' + 'D' = 'aD'
// a = 'aD', c = 'v' => a = 'v' + 'aD' = 'vaD'
// a = 'vaD', c = 'i' => a = 'i' + 'vaD' = 'ivaD'
// a = 'ivaD', c = 'd' => a = 'd' + 'ivaD' = 'divaD'

const reverseString = (str) => {
return str.split('').reduce((accumulator, current) => (current + accumulator))



// DO NOT FORGET TO 'RETURN'
// return str.split('').reverse().join('')


// for (let i = 0; i < str.length; ++i) {
//     reverse = str[i] + reverse;
// }
// could also use let 'elem' of 'arr'
// for (let char of str) {
//     reverse = char + reverse
// }

// return reverse



};


module.exports = reverseString;
