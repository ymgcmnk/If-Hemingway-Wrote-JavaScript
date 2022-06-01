function fibonacci(size = 10) {
  let first = 0, second = 1, next, count = 2, result = [first, second];

  if (size < 2)
    return console.log("The reguest was made but it was not good");

  while (count++ < size) {
    next = first + second;
    first = second;
    second = next;
    result.push(next);
  }

  console.log(result);

}
