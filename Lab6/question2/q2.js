const mixedArray = ['Matrix', 1, true, 2, false, 3];
let numbersOnly = (val) => {
  if (typeof(val) === 'number'){
    return val;
  }
}
let numbers = mixedArray.filter(numbersOnly);

const map = numbers.map(x => x * 5);

console.log(numbers);
console.log(map);