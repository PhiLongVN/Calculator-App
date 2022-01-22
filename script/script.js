/* ============================================ */
/*                     THEME                    */
/* ============================================ */

const themeBlock = document.querySelector(".theme-block");
const ball = document.querySelector(".block-ball");

let dem = 1;
themeBlock.onclick = () => {
  dem++;
  switch (dem) {
    case 4:
      dem = 1;
      document.body.setAttribute("class", "active");
      ball.style.justifyContent = "flex-start";

      break;

    case 2:
      document.body.setAttribute("class", "active2");
      ball.style.justifyContent = "center";
      break;
    case 3:
      document.body.setAttribute("class", "active3");
      ball.style.justifyContent = "flex-end";
      break;
  }
};

/* ============================================ */
/*                     CALC                     */
/* ============================================ */
const number = document.querySelectorAll(".value-number");
const equal = document.querySelector(".equal");
const reset = document.querySelector(".reset");
const del = document.querySelector(".del");
const screen = document.querySelector(".screen");

number.forEach((element) => {
  element.onclick = () => {
    screen.innerText += element.innerText;
  };
});

reset.onclick = () => {
  screen.innerText = "";
};


del.onclick = () => {
  screen.innerText = screen.innerText.slice(0, -1);
};


equal.onclick = () => {
  let a = screen.innerText;
  if (a.includes("x")) {
    a = a.replace("x", "*");
  }
  let result = eval(a);
  screen.innerText = result;
};
