import React, {useState} from 'react';

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

const SearchButtons = ({ ...props }) => {

  // eslint-disable-next-line
  const [value, setValue] = useState(props);
  const handleFilterTextChange = (e) => {
    setValue(e.target.value);
    props.onFilterTextChange(e.target.value);
  }

  return (
    <form>  
      <input type="button"
        placeholder="TeamWorks"
        value="TeamWorks"
        onClick={handleFilterTextChange}
      />
      <input type="button"
        placeholder="PersonalProjects"
        value="PersonalProjects"
        onClick={handleFilterTextChange}
      />
      <input type="button"
        placeholder="FrontEndTests"
        value="FrontEndTests"
        onClick={handleFilterTextChange}
      />
      <input type="button"
        placeholder="Etc"
        value="Etc"
        onClick={handleFilterTextChange}
      />
      <input type="button"
        placeholder="See All"
        value=""
        onClick={handleFilterTextChange}
      /> 
      <label>See All</label>
    </form>
  );
}

const FilterableProductTable =({...props})=> {

  const [filterText, setFilterText]= useState(props);
  const handleFilterTextChange=(filterText)=>{
      setFilterText(filterText)
  }
    return (
      <div>
        <SearchButtons
          filterText={filterText}
          onFilterTextChange={handleFilterTextChange}
        />
        <ProductTable
          products={props.products}
          filterText={filterText}
        />
      </div>
    )
}


export default FilterableProductTable;



