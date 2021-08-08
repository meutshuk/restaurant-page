const navbar = () => {
  const navBarSection = ["Home", "Menu"];

  const divContent = document.querySelector(".content");

  const header = document.createElement("header");
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  const divLogo = document.createElement("div");
  const divButtonContactUs = document.createElement("div");

  nav.classList.add("nav");
  divLogo.classList.add("logo");
  divButtonContactUs.classList.add("btn");

  navBarSection.forEach((nav) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = nav;
    a.id=nav
    li.appendChild(a);
    ul.appendChild(li);
  });

  divLogo.innerText = "FoodYouEat";
  divButtonContactUs.innerText = "Contact Us";

  nav.appendChild(ul);
  header.appendChild(nav);
  header.appendChild(divLogo);
  header.appendChild(divButtonContactUs);

  divContent.appendChild(header);
};

export { navbar };
