/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */

const obj = {key: "value"};

export function invertObj(obj) {
  const result = {};

  if (!obj) {
    return undefined;
  } else {
    for (const key in obj) {
      result[obj[key]] = key;
    }
  }

  return result;
}
