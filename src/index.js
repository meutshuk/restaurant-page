import { navbar } from "./navbar";
import { home } from "./home";
import { menu } from "./menu";

const index = (() => {
  navbar();

  const content = document.querySelector(".content");
  const main = document.createElement("main");
  content.appendChild(main);
  home(main);

  const linkClicked = (e) => {
    if (e.target.id == "Home") {
      main.innerHTML = "";
      home(main);
    } else if (e.target.id == "Menu") {
      main.innerHTML = "";
      menu(main);
    }
  };

  const li = document.querySelectorAll("li");
  li.forEach((li) => li.addEventListener("click", linkClicked));
})();
