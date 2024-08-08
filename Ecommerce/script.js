class Ecommerce {
  constructor() {
    this.productsList = [];
    this.cartList = [];
  }

  addProduct(product) {
    this.productsList.push(product);
  }

  setProductPrice(productId, price) {
    const product = this.productsList.find(
      (product) => product.id === productId
    );
    product ? (product.price = price) : console.error("Product not found");
  }

  getAllProducts() {
    return this.productsList;
  }

  getAllProductsNames() {
    return this.productsList.map((product) => product.name).join(", ");
  }

  getProductById(id) {
    return this.productsList.find((product) => product.id === id);
  }

  getProductByName(name) {
    return this.productsList.find((product) => product.name === name);
  }

  getProductByPrice(initialPrice, finalPrice) {
    return this.productsList.filter(
      (product) => product.price >= initialPrice && product.price <= finalPrice
    );
  }

  addProductToCart(product) {
    return this.cartList.push(product);
  }

  getCart() {
    return this.cartList;
  }

  getCartTotalPrice() {
    return this.cartList.reduce((acc, product) => acc + product.price, 0);
  }
}

const product1 = { id: 1, name: "iphone15", price: 1000 };
const product2 = { id: 2, name: "iphone15Pro", price: 1100 };
const product3 = { id: 3, name: "iphone15ProMax", price: 1200 };

const ecommerce = new Ecommerce();

ecommerce.addProduct(product1);
ecommerce.addProduct(product2);
ecommerce.addProduct(product3);

// console.error
ecommerce.setProductPrice(13, 2000);
ecommerce.setProductPrice(3, 2000);

console.log(ecommerce.getAllProducts());

console.log(ecommerce.getProductByPrice(1000, 1499));
