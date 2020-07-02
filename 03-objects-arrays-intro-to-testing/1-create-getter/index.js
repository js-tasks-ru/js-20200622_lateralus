/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  const tempArr = path.split('.');

  return (obj) => {
    if (Object.keys(obj).length) {
      tempArr.forEach((key) => {
        obj = obj[key];
      });

      return obj;
    }
  };
}
