export function sortByKey (array = [], key, type = 'asc') {
  function compare (a, b) {
    let keyA = a[key];
    let keyB = b[key];

    if (typeof keyA === 'string') {
      keyA = keyA.toLowerCase();
    }

    if (typeof keyB === 'string') {
      keyB = keyB.toLowerCase();
    }

    if (keyA < keyB) {
      return -1;
    }

    if (keyA > keyB) {
      return 1;
    }

    return 0;
  }

  let newArray = [...array];

  if (typeof key !== 'string') return newArray;

  newArray = newArray.sort(compare);

  if (type === 'desc') {
    return newArray.reverse();
  }

  return newArray;
}