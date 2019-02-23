import React from "react";
import ProductList from "../ProductList/ProductList";
import ProductsService from "../../services/products.service";

class CatalogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: "",
      filterManufacturer: "all",
      products: ProductsService.getProducts()
    };
  }

  handleOptionChange = changeEvent => {
    this.setState({
      filterManufacturer: changeEvent.target.value
    });
  };

  handleSearchTextChange = changeEvent => {
    this.setState({
      filterText: changeEvent.target.value
    });
  };

  handleClear = changeEvent => {
    changeEvent.preventDefault();
    this.setState({
      filterText: "",
      filterManufacturer: "all"
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.filterText !== prevState.filterText ||
      this.state.filterManufacturer !== prevState.filterManufacturer
    ) {
      this.setState({
        products: ProductsService.getFilteredProducts(
          this.state.filterText,
          this.state.filterManufacturer
        )
      });
    }
  }

  render() {
    return (
      <div className="container">
        <h1 className="header-big">Catalog</h1>

        <div className="catalog">
          <div className="column-left">
            <div className="filter">
              <div className="filter-header">
                <h4>Search</h4>
                <a href="#" className="clear" onClick={this.handleClear}>
                  Clear
                </a>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="search..."
                  value={this.state.filterText}
                  onChange={this.handleSearchTextChange}
                />
              </div>
              <h4>Manufacturer</h4>
              <div>
                <div>
                  <input
                    type="radio"
                    name="manufacturer"
                    id="all"
                    value="all"
                    checked={this.state.filterManufacturer === "all"}
                    onChange={this.handleOptionChange}
                  />
                  <label for="all">All</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="manufacturer"
                    id="apple"
                    value="apple"
                    checked={this.state.filterManufacturer === "apple"}
                    onChange={this.handleOptionChange}
                  />
                  <label for="apple">Apple</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="manufacturer"
                    id="dell"
                    value="dell"
                    checked={this.state.filterManufacturer === "dell"}
                    onChange={this.handleOptionChange}
                  />
                  <label for="dell">Dell</label>
                </div>
              </div>
            </div>
          </div>

          <div className="column-right">
            <div className="products">
              <ProductList productList={this.state.products} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CatalogPage;
