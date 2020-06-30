/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
  const result = {};

  for (let [key, value] of Object.entries(obj)) {
    if (fields.includes(key)) {
      result[key] = value;
    }
  }
  return result;
};

// Задачи pick и omit я бы решил до разбора ДЗ на уроке, так как уже делал походите задачи. Последние 4 дня было мало времени, застрял
// на задаче sortStrings и с задачником были проблемы.
