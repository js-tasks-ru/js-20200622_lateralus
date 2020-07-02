/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  const temp = [];
  const newArr = string.split('');

  return newArr.map((elem, index) => {
    if (elem === newArr[index + 1]) {
      temp.push(elem);
    } else {
      const final = [elem, ...temp].join('').slice(0, size);
      temp.length = 0;
      return final;
    }
  }).join('');
}

