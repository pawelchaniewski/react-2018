import React from "react";
import PropTypes from "prop-types";

// const Filter = () => {
//   const filterText = this.props.filterText;
//   const filterManufacturer = this.props.filterManufacturer;

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: "",
      filterManufacturer: "all"
      // filterText: this.props.filterText,
      // filterManufacturer: this.props.filterManufacturer
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

  render() {
    return (
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
    );
  }
}

Filter.propTypes = {
  filterText: PropTypes.string,
  filterManufacturer: PropTypes.string.isRequired
};

export default Filter;
