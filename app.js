fetch("http://localhost:3002/products")
  .then((res) => res.json())
  .then((data) => {
    let coffees = data.filter((item) => item.category === "Coffee");
    let desserts = data.filter((item) => item.category === "Dessert");

    let coffeeShowAll = false;
    let dessertShowAll = false;

    function renderCoffee() {
      let list = coffeeShowAll ? coffees : coffees.slice(0, 3);

      document.querySelector("#coffee").innerHTML = list
        .map(
          (item) => `
          <div class="card">
            <div class="card-img">
              <img src="${item.image}" alt="${item.name}">
              <i class="fa-regular fa-heart like-btn"></i>
              <span class="rating">⭐ ${item.rating}</span>
            </div>

            <div class="card-body">
              <h2>${item.name}</h2>
              <p><b>Ta'mi:</b> ${item.description}</p>
            </div>

            <div class="card-bottom">
              <h3>${item.price.toLocaleString()} so'm</h3>
              <button>Buyurtma berish</button>
            </div>
          </div>
        `,
        )
        .join("");
    }

    function renderDessert() {
      let list = dessertShowAll ? desserts : desserts.slice(0, 3);

      document.querySelector("#dessert").innerHTML = list
        .map(
          (item) => `
          <div class="card">
            <div class="card-img">
              <img src="${item.image}" alt="${item.name}">
              <i class="fa-regular fa-heart like-btn"></i>
              <span class="rating">⭐ ${item.rating}</span>
            </div>

            <div class="card-body">
              <h2>${item.name}</h2>
              <p><b>Ta'mi:</b> ${item.description}</p>
            </div>

            <div class="card-bottom">
              <h3>${item.price.toLocaleString()} so'm</h3>
              <button>Buyurtma berish</button>
            </div>
          </div>
        `,
        )
        .join("");
    }

    renderCoffee();
    renderDessert();

    document.querySelector("#coffeeSeeAll").addEventListener("click", () => {
      coffeeShowAll = !coffeeShowAll;
      renderCoffee();

      document.querySelector("#coffeeSeeAll").textContent = coffeeShowAll
        ? "Kamroq ko‘rish"
        : "Hammasini ko‘rish";
    });

    document.querySelector("#dessertSeeAll").addEventListener("click", () => {
      dessertShowAll = !dessertShowAll;
      renderDessert();

      document.querySelector("#dessertSeeAll").textContent = dessertShowAll
        ? "Kamroq ko‘rish"
        : "Hammasini ko‘rish";
    });

    function likeButtons() {
      document.querySelectorAll(".like-btn").forEach((like) => {
        like.addEventListener("click", () => {
          like.classList.toggle("active");
          like.classList.toggle("fa-solid");
          like.classList.toggle("fa-regular");
          like.blur();
        });
      });
    }

    const oldRenderCoffee = renderCoffee;
    const oldRenderDessert = renderDessert;

    document
      .querySelector("#coffeeSeeAll")
      .addEventListener("click", likeButtons);
    document
      .querySelector("#dessertSeeAll")
      .addEventListener("click", likeButtons);

    likeButtons();
  })
  .catch((error) => console.log("Xatolik:", error));
