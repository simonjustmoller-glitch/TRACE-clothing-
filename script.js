const products = [
  {
    name: "TRACE Cap",
    category: "Cap",
    color: "Sort",
    price: 2450.99,
    image: "hue 2.png"
  },
  {
    name: "TRACE Zip up",
    category: "Zip up",
    color: "Hvid",
    price: 5490.99,
    image: "sip op trace.png"
  },
  {
    name: "TRACE Tee",
    category: "T-shirt",
    color: "Hvid",
    price: 2959.99,
  image: "hvid tee.png"
  },
  {
    name: "TRACE Tote",
    category: "Tote",
    color: "Beige",
    price: 9.500.00,
   image: "mule pose.png"
  }
];

const productGrid = document.getElementById("productGrid");

function showProducts(items) {
  productGrid.innerHTML = "";

  items.forEach(product => {
    const card = document.createElement("article");
    card.className = "product";

    const image = document.createElement("img");
    image.src = product.image;
    image.alt = product.name;

    const name = document.createElement("h3");
    name.textContent = product.name;

    const details = document.createElement("p");
    details.textContent =
      `${product.category} · ${product.color}`;

    const price = document.createElement("p");
    price.textContent = `€${product.price.toFixed(2)}`;

    card.append(image, name, details, price);
    productGrid.appendChild(card);
  });
}

showProducts(products);const imageInput = document.getElementById("imageInput");
const imagePreview = document.getElementById("imagePreview");
const searchButton = document.getElementById("searchButton");
const searchStatus = document.getElementById("searchStatus");

let uploadedImage = null;

imageInput.addEventListener("change", () => {
  const file = imageInput.files[0];

  if (!file) return;

  if (!file.type.startsWith("image/")) {
    searchStatus.textContent = "Vælg venligst et billede.";
    return;
  }

  uploadedImage = file;

  imagePreview.replaceChildren();

  const img = document.createElement("img");
  img.src = URL.createObjectURL(file);
  img.alt = "Dit uploadede billede";

  imagePreview.appendChild(img);

  searchStatus.textContent = "Billedet er klar til søgning.";
});

searchButton.addEventListener("click", () => {
  if (!uploadedImage) {
    searchStatus.textContent = "Upload et billede først.";
    return;
  }

  searchStatus.textContent =
    "Billedet er uploadet. Næste trin er at matche det med produkterne.";
});
