/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  const newArr = [...string];
  const temp = new Set(newArr);
  const arr = [...temp];
  let result = '';

  for (const key of arr) {
    result += key.repeat(size);
  }

  return result;
}

// Не совсем то что нужно, но очень близко :)
