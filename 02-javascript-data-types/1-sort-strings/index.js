/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = "asc") {
  switch (param) {
    case 'asc':
      return resultSorted(arr, 1);
    case 'desc':
      return resultSorted(arr, -1);
    case 'ascLower':
      return resultSorted(arr, -1);
    case 'descLower':
      return resultSorted(arr, -1);
    default:
      return resultSorted(arr, 1);
  }

  function resultSorted(array, direction) {
    return [...array].sort((str1, str2) =>
      direction * str1.localeCompare(str2, 'default', {caseFirst: 'upper'}));
  }
}
