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
