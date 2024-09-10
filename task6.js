const hello = [1, 2, 3, 4, 5];

function searchElements(arr, value) {
  return arr.filter(x => x > value).length;
}

console.log(searchElements(hello, 3));

export { searchElements };
