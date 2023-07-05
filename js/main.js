const fizzbuzz = document.getElementById("fizzbuzz");

for (let i = 1; i <= 100; i++) {
  let fizz = "Fizz";
  let buzz = "Buzz";
  let fizzBuzz = "FizzBuzz";
  let numb = i;

  const box = document.createElement("div");

  box.classList.add("box");

  if (i % 3 === 0 && i % 5 === 0) {
    console.log(fizzBuzz);
    box.innerHTML = fizzBuzz;
    box.classList.add("red");
  } else if (i % 3 === 0) {
    console.log(fizz);
    box.innerHTML = fizz;
    box.classList.add("green");
  } else if (i % 5 === 0) {
    console.log(buzz);
    box.innerHTML = buzz;
    box.classList.add("yellow");
  } else {
    console.log(numb);
    box.innerHTML = numb;
    box.classList.add("box");
  }

  fizzbuzz.append(box);
}
