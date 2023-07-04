for (let i = 1; i <= 100; i++) {
  let fizz = "Fizz";
  let buzz = "FizzBuzz";
  let numb = i;
  if (i % 3 === 0) {
    console.log(fizz);
  } else if (i % 5 === 0) {
    console.log(buzz);
  } else {
    console.log(numb);
  }
}
