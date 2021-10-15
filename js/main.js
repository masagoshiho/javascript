const array = [2, 4, 7, 5, 4, 3, 8];

const result = array.filter(function (item) {
  return item % 2 === 1;
});

console.log(result);