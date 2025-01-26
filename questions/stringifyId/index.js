/** Given an array filled with object ID's, return the
 * list of unique ID's in a string.
 *
 * @example
 * stringifyId([
 *  { id: 1 },
 *  { id: 2 },
 *  { id: 2 },
 *  { id: 3 },
 * ]) === '1, 2, 3'
 *
 * stringifyId([
 *  { id: 'ABC', name: 'David' },
 *  { id: 'abc', name: 'Bragg' },
 *  { id: 'CBA', name: 'Bragg' },
 * ]) === 'ABC, abc, CBA'
 */

const stringifyId = (arr) => {
  const IdArray = arr.map((obj) => obj.id);

  const uniqueArray = [...new Set(IdArray)];
  
  return uniqueArray.join(", ");

  //   const IdArray = arr.map((obj) => obj.id);
  //   const uniqueArray = [];

  //   for (let id of IdArray) {
  //     if (!uniqueArray.includes(id)) {
  //       uniqueArray.push(id);
  //     }
  //   }
  //   return uniqueArray.join(', ')
};

module.exports = stringifyId;
