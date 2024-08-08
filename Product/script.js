const fetchProduct = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products/13");

    if (!response.ok) {
      throw new Error("Error fetching data");
    }

    const product = await response.json();
    newProduct(product);
  } catch (error) {
    console.error("Fetch failed", error);
  }
};

const newProduct = (product) => {
  const content = document.querySelector(".content-product");
  content.innerHTML = `
<section class="content">

  <div class="content-left">
    <img src="${product.image}" alt="${product.title}" />
    <div class="content-right">
      <p>ProductId: ${product.id}</p>
      <h2>${product.title}</h2>
      <h6>Categorie: ${product.category}</h6>
      <span>Price: ${product.price}€ </span>
      <span>${product.description}</span>
      <span>Rate:${product.rating.rate}</span>
      <span>count:${product.rating.count}</span>
      <button class="btn-cart">Add to Cart</button>
    </div>
  </div>
</section>

    `;
};

fetchProduct();

const fetchRelatedProduct = async () => {
  try {
    const response = await fetch(
      "https://fakestoreapi.com/products/category/electronics"
    );

    if (!response.ok) {
      throw new Error("Error fetching data");
    }

    const data = await response.json();
    productRelated(data);
  } catch (error) {
    console.error("Fetch failed", error);
  }
};

const productRelated = (products) => {
  const relatedContent = document.querySelector(".related-products-content");

  if (relatedContent) {
    products.slice(0, 3).forEach((product) => {
      const productElement = document.createElement("div");
      productElement.classList.add("related-products");
      productElement.innerHTML = `
          <div class="related-subContent">
            <h2>${product.title}</h2>
            <h6>${product.price}</h6>
            <img src="${product.image}" alt="${product.title}" />
                <button class="btn-cart">Add to Cart</button>
          </div>
        `;

      relatedContent.appendChild(productElement);
    });
  }
};

fetchRelatedProduct();

const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);
const productId = params.get("id");
console.log("Product ID:", productId);

const date = new Date();
const footerDate = document.querySelector("footer");
footerDate.textContent = `Copyright ${date.getFullYear()}`;
