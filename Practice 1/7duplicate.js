var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

numbers = numbers.filter((value, index, self) => self.indexOf(value) === index);

console.log(numbers);
