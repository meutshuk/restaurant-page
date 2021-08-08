const home = (content) => {
  const divHome = document.createElement("div");
  const divHomeWord = document.createElement("div");
  const img = document.createElement("img");

  divHome.classList.add('home')
  divHomeWord.classList.add('home-word')

  divHomeWord.innerText = "Discover the true Taste of your food";
  img.src = "../src/food3.png";

  divHome.appendChild(divHomeWord);
  divHome.appendChild(img);

  content.appendChild(divHome);
};
export { home };

// <div class="home">
//           <div class='home-word'>Discover the true taste of your food</div>
//           <img src="../src/food3.png" alt="Food" />
// </div> -->
