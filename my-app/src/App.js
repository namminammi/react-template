import React from 'react';

const ProductRow = ({ ...props }) => {
  const product = props.product;
  const link_name = product.link_name;
  const website = product.website;
  const desc = product.desc;

  return (
    <div className='control'>
      <h4>{link_name}</h4>
      <div className="description">
        <p>{desc}</p>
        <a href={website} target="_blank" rel="noopener noreferrer">link</a></div>
    </div>
  );
}

const ProductTable = ({ ...props }) => {
  
  const filterText = props.filterText;
  const rows = [];

  props.products.forEach((product) => {
    if (product.category.indexOf(filterText) === -1) {
      return;
    }

    rows.push(
      <ProductRow
        product={product}
        key={product.link_name}
      />
    );
  });

  return (
    <div className="container">
      {rows}
    </div>
  );
}

class SearchButtons extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }

  render() {
    return (

      <form>
        <input type="button"
          placeholder="TeamWorks"
          value="TeamWorks"
          onClick={this.handleFilterTextChange}
        />

        <input type="button"
          placeholder="PersonalProjects"
          value="PersonalProjects"
          onClick={this.handleFilterTextChange}
        />

        <input type="button"
          placeholder="FrontEndTests"
          value="FrontEndTests"
          onClick={this.handleFilterTextChange}
        />

        <input type="button"
          placeholder="Etc"
          value="Etc"
          onClick={this.handleFilterTextChange}
        />

        <input type="button"
          placeholder="See All"
          value=""
          onClick={this.handleFilterTextChange}
        /> <label>See All</label>

      </form>
    );
  }
}

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: ''
    };

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  render() {
    return (
      <div>
        <SearchButtons
          filterText={this.state.filterText}
          onFilterTextChange={this.handleFilterTextChange}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
        />
      </div>
    );
  }
}


export default FilterableProductTable;



