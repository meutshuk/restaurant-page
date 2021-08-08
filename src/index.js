import { navbar } from "./navbar";
import { home } from "./home";
import { menu } from "./menu";
import { contactUs } from "./contactUs";

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

  const btn = document.querySelector(".btn");
  btn.addEventListener("click", () => {
    main.innerHTML = "";
    contactUs(main);
  });

  const li = document.querySelectorAll("li");
  li.forEach((li) => li.addEventListener("click", linkClicked));
})();
