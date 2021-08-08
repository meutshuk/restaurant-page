import Menu from "./menuItem";

const menu = (content) => {
  /**
   * @param divMenu div element with class 'menu'
   * @param h2 h2 element
   * @param divMenuItem div element with class 'menu-tem'
   */
  const divMenu = document.createElement("div");
  const h2 = document.createElement("h2");
  const divMenuItem = document.createElement("div");

  //* assignining h2 text
  h2.textContent = "Menu";
  h2.classList.add('bigText')

  //* assigning class name for the element
  divMenuItem.classList.add("menu-item");
  divMenu.classList.add("menu");

  //*looping through the object Menu
  for (var i in Menu) {
    const div = document.createElement("div");
    const h3 = document.createElement("h3");

    h3.textContent = i;
    div.appendChild(h3);

    //looping through each object to get food name and price
    for (let j = 0; j < Menu[i].length; j++) {
      const divMenuItemItem = document.createElement("div");
      divMenuItemItem.classList.add("menu-item-item");
      const spanName = document.createElement("span");
      const spanBlank = document.createElement("span");
      const spanPrice = document.createElement("span");

      spanName.textContent = Menu[i][j].name;
      spanPrice.textContent = Menu[i][j].price;
      divMenuItemItem.appendChild(spanName);
      divMenuItemItem.appendChild(spanBlank);
      divMenuItemItem.appendChild(spanPrice);
      div.appendChild(divMenuItemItem);
    }

    divMenuItem.appendChild(div);
  }
  divMenu.appendChild(h2);
  divMenu.appendChild(divMenuItem);

  content.appendChild(divMenu);
};

export { menu };
