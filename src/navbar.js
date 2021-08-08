const navbar = () => {
  const navBarSection = ["Home", "Menu"];

  const divContent = document.querySelector(".content");

  const header = document.createElement("header");
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  const divLogo = document.createElement("div");
  const divButtonContactUs = document.createElement("div");
  const buttonAnchor = document.createElement("a");

  nav.classList.add("nav");
  divLogo.classList.add("logo");
  divButtonContactUs.classList.add("btn");
  buttonAnchor.classList.add("btn-a");

  navBarSection.forEach((nav) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = nav;
    a.id = nav;
    li.appendChild(a);
    ul.appendChild(li);
  });

  divLogo.innerText = "FoodYouEat";
  buttonAnchor.textContent = "Contact Us";
  divButtonContactUs.appendChild(buttonAnchor);

  nav.appendChild(ul);
  header.appendChild(nav);
  header.appendChild(divLogo);
  header.appendChild(divButtonContactUs);

  divContent.appendChild(header);
};

export { navbar };
