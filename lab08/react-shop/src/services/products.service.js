import products from "../products";
import PropTypes from "prop-types";

class ProductsService {
  //   static getProducts(filters) {
  //     let filteredProducts = products;

  //     if (filters) {
  //       for (const key in filters) {
  //         filteredProducts = filteredProducts.filter(
  //           product => product[key] === filters[key]
  //         );
  //       }
  //     }
  //     return filteredProducts;
  //   }
  // }

  // ProductsService.getProducts.propTypes = {
  //   filters: PropTypes.object
  // };

  static getProducts() {
    return products;
  }

  static getFilteredProducts(name, manufacture) {
    let filteredProducts = products;
    if (name !== undefined || name.length) {
      filteredProducts = filteredProducts.filter(product =>
        product.name.toLowerCase().indexOf(name) >= 0 ? product : null
      );
    }

    if (manufacture !== "all") {
      filteredProducts = filteredProducts.filter(product =>
        product.manufacture.toLowerCase() === manufacture ? product : null
      );
    }
    return filteredProducts;
  }

  static getFeaturedProducts(category) {
    return products
      .filter(product => product.featured === true)
      .filter(product => product.category === category);
  }
}

ProductsService.getFilteredProducts.propTypes = {
  name: PropTypes.string,
  manufacture: PropTypes.string
};

ProductsService.getFeaturedProducts.propTypes = {
  category: PropTypes.string
};

export default ProductsService;
