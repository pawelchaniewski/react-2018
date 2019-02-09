import products from "../products";

class ProductsServie {
  static getProducts() {
    return products;
  }

  static getProductsById(id) {
    return products.find(product => products.id === id);
  }
}

export default ProductsServie;
