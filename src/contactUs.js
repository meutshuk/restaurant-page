const contactUs = (content) => {
  console.log("apple");
  const contactus = {
    Location: "7/5 Rawson Street, Wollongong, 2500, NSW",
    "Phone Number": "041266623",
    // "Open Hour": {
    //   "Monday - Tuesday": "11am - 11pm",
    //   Saturday: "11am - 10pm",
    //   Sunday: "11am - 9pm",
    // },
  };

  const h2 = document.createElement("h2");
  const divContactUs = document.createElement("div");

  h2.textContent = "Contact Us";

  divContactUs.classList.add("contactUs");

  for (var key in contactus) {
    const div = document.createElement("div");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    const span = document.createElement("span");

    h3.classList.add("name");
    h3.textContent = key;
    span.textContent = contactus[key];

    div.appendChild(h3);
    p.appendChild(span);
    div.appendChild(p);
    divContactUs.appendChild(div);
  }

  const div = document.createElement("div");
  const time = `
  <h3 class="name">Open Hour</h3>
    <p class="openHour">
        <span>Monday - Friday</span> <span>11am - 11pm</span>
    </p>
    <p class="openHour">
        <span>Saturday </span> <span>11am - 10pm</span>
    </p>
    <p class="openHour">
        <span>Sunday - </span> <span>11am - 9pm</span>
    </p>`;

  div.innerHTML = time;
  divContactUs.appendChild(div);
  content.appendChild(divContactUs);
};

export { contactUs };
