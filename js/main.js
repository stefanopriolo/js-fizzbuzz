const fizzbuzz = document.getElementById("fizzbuzz");

for (let i = 1; i <= 100; i++) {
  let fizz = "Fizz";
  let buzz = "FizzBuzz";
  let numb = i;

  const box = document.createElement("div");
  // <div></div>

  box.classList.add("box");
  // <div class="box"></div>

  if (i % 3 === 0) {
    console.log(fizz);
    box.innerHTML = fizz;
    box.classList.add("green");
    // <div class="box">fizz</div>
  } else if (i % 5 === 0) {
    console.log(buzz);
    box.innerHTML = numb;
    box.classList.add("box");
    // <div class="box">numb</div>
  } else {
    console.log(numb);
    box.innerHTML = numb;
    box.classList.add("box");
    // <div class="box">numb</div>
  }

  fizzbuzz.append(box);
}
