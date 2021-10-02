// const value = document.getElementById("value");
// const decrease = document.querySelector(".decrease");
// const reset = document.querySelector(".reset");
// const increase = document.querySelector(".increase");

// decrease.addEventListener("click", () => {
//   value.textContent -= 1;
//   textColor();
// });

// increase.addEventListener("click", () => {
//   value.textContent = Number(value.textContent) + 1;
//   textColor();
// });

// reset.addEventListener("click", () => {
//   value.textContent = 0;
//   textColor();
// });

// function textColor() {
//   if (value.textContent == 0) {
//     value.style.color = "black";
//   } else if (value.textContent < 0) {
//     value.style.color = "red";
//   } else if (value.textContent > 0) {
//     value.style.color = "green";
//   }
// }

///////////////////////////////////////////////////////////
//////////////////////// JOHN'S SOLUTION //////////////////
///////////////////////////////////////////////////////////

// set initial count
let count = 0;

// select value and button
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

// console.log(btns);

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;

    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "green";
    } else if (count < 0) {
      value.style.color = "red";
    } else {
      value.style.color = "black";
    }

    value.textContent = count;
  });
});
