document.addEventListener("DOMContentLoaded", () => {
  const products = [
    {
      name: "HP Essentials 255 G8 AMD",
      price: 289,
      stars: 4,
      reviews: 250,
      seller: "PcComponentes",
      image:
        "https://thumb.pccomponentes.com/w-300-300/articles/1005/10057282/1639-hp-essential-255-g8-amd-3020e-8gb-256gb-ssd-156.jpg",
    },
    {
      name: "Lenovo IdeaPad 3",
      price: 499,
      stars: 4.5,
      reviews: 350,
      seller: "PcComponentes",
      image:
        "https://thumb.pccomponentes.com/w-300-300/articles/1066/10663113/1517-lenovo-ideapad-3-15itl6-intel-core-i5-1155g7-8gb-512gb-ssd-156.jpg",
    },
    {
      name: "Acer Aspire 5",
      price: 599,
      stars: 4,
      reviews: 200,
      seller: "PcComponentes",
      image:
        "https://thumb.pccomponentes.com/w-300-300/articles/1058/10587572/1790-acer-aspire-3-a315-59-504m-intel-core-i5-1235u-16gb-512gb-ssd-156-caracteristicas.jpg",
    },
    {
      name: "ASUS VivoBook 15",
      price: 449,
      stars: 4.5,
      reviews: 300,
      seller: "PcComponentes",
      image:
        "https://thumb.pccomponentes.com/w-300-300/articles/1066/10665055/17-asus-vivobook-15-f515ja-ej2882w-intel-core-i7-1065g7-8gb-512gb-ssd-156-374cff9a-81b5-4e50-b800-d688f911fb52.jpg",
    },
    {
      name: "Dell Inspiron 15",
      price: 550,
      stars: 4,
      reviews: 225,
      seller: "PcComponentes",
      image:
        "https://thumb.pccomponentes.com/w-300-300/articles/25/250603/75815514-4992870758.jpg",
    },
    {
      name: "Microsoft Surface Laptop Go",
      price: 699,
      stars: 4.5,
      reviews: 400,
      seller: "Microsoft Store",
      image:
        "https://thumb.pccomponentes.com/w-300-300/articles/1050/10502509/192-microsoft-surface-laptop-go-2-intel-core-i5-1135g7-8gb-256gb-ssd-124-tactil-caracteristicas.jpg",
    },
    {
      name: "Apple MacBook Air",
      price: 999,
      stars: 4.5,
      reviews: 450,
      seller: "Apple Store",
      image:
        "https://thumb.pccomponentes.com/w-300-300/articles/1039/10392488/1935-apple-macbook-air-apple-m2-8gb-256gb-ssd-gpu-octa-core-136-gris-espacial.jpg",
    },
    {
      name: "LG Gram",
      price: 1199,
      stars: 4.5,
      reviews: 150,
      seller: "PcComponentes",
      image:
        "https://thumb.pccomponentes.com/w-300-300/articles/1058/10587136/1986-lg-gram-17z90q-intel-core-i7-1260p-16gb-512gb-ssd-rtx-2050-17.jpg",
    },
    {
      name: "Razer Blade Stealth 13",
      price: 1699,
      stars: 4,
      reviews: 100,
      seller: "Razer Store",
      image:
        "https://thumb.pccomponentes.com/w-300-300/articles/1064/10644258/1259-razer-blade-16-qhd-intel-core-i9-13950hx-16gb-1tb-ssd-rtx-4060-16.jpg",
    },
    {
      name: "HP Pavilion 14",
      price: 649,
      stars: 4,
      reviews: 280,
      seller: "PcComponentes",
      image:
        "https://thumb.pccomponentes.com/w-300-300/articles/1057/10579929/1293-hp-pavilion-14-dv2004ns-intel-core-i5-1235u-16gb-512gb-ssd-14-opiniones.jpg",
    },
  ];

  displayProducts(products);
  initializeSellerSelect(products);
  setupFilterListeners(products);
});

function displayProducts(products) {
  const productsContainer = document.querySelector(".products");
  productsContainer.innerHTML = "";

  products.forEach((product) => {
    const productCard = createProductCard(product);
    productsContainer.appendChild(productCard);
  });
}

function createProductCard(product) {
  const card = document.createElement("div");
  card.classList.add("product-card");

  const title = document.createElement("h3");
  title.textContent = product.name;

  const image = document.createElement("img");
  image.src = product.image;
  image.alt = product.name;

  const price = document.createElement("p");
  price.textContent = `Precio: ${product.price.toFixed(2)}€`;

  card.appendChild(title);
  card.appendChild(image);
  card.appendChild(price);

  return card;
}

function initializeSellerSelect(products) {
  const sellers = [...new Set(products.map((product) => product.seller))];
  const sellerSelect = document.getElementById("seller-select");

  sellers.forEach((seller) => {
    const option = document.createElement("option");
    option.value = seller;
    option.textContent = seller;
    sellerSelect.appendChild(option);
  });
}

function setupFilterListeners(products) {
  const sellerSelect = document.getElementById("seller-select");
  const priceInput = document.getElementById("price-input");
  const searchButton = document.getElementById("search-button");
  const clearFiltersButton = document.getElementById("clear-filters-button");

  searchButton.addEventListener("click", () => {
    const selectedSeller = sellerSelect.value;
    const maxPrice = parseFloat(priceInput.value);

    const filteredProducts = products.filter((product) => {
      const sellerFilter = !selectedSeller || product.seller === selectedSeller;
      const priceFilter = !maxPrice || product.price <= maxPrice;

      return sellerFilter && priceFilter;
    });

    displayProducts(filteredProducts);
  });

  clearFiltersButton.addEventListener("click", () => {
    sellerSelect.value = "";
    priceInput.value = "";
    displayProducts(products);
  });
}
