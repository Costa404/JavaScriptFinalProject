const loadProductsList = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");

    if (!response.ok) {
      throw new Error("Failed to fetch products, try again");
    }
    const products = await response.json();

    const productContent = document.getElementById("grid-product");

    products.forEach((product) => {
      const productDiv = document.createElement("div");
      productDiv.className = "product";

      const img = document.createElement("img");
      img.src = product.image;
      img.alt = product.title;
      productDiv.appendChild(img);

      const title = document.createElement("h2");
      title.textContent = product.title;
      productDiv.appendChild(title);

      const btn = document.createElement("button");
      btn.textContent = "Add to cart";
      btn.onclick = () => addToCart(product.id);
      productDiv.appendChild(btn);

      productContent.appendChild(productDiv);
    });
  } catch (e) {
    console.error("Error loading products", e);
  }
};

const addToCart = async (productId) => {
  const cart = {
    userId: 1,
    date: new Date().toISOString().split("T")[0],
    products: [
      {
        productId: productId,
        quantity: 1,
      },
    ],
  };

  try {
    const response = await fetch("https://fakestoreapi.com/carts/7", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(cart),
    });

    if (!response.ok) {
      throw new Error("Error, Failed to add to cart");
    }

    const result = await response.json();
    console.log("Cart updated successfully:", result);
    alert("Sucess, product added to cart!");
  } catch (e) {
    console.error("Error adding to cart, try again", e);
  }
};

document.addEventListener("DOMContentLoaded", loadProductsList);
