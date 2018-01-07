import React, { Component } from 'react';

var places = {
  library: {
      location: [
        {
          loc_name: "library1",
          "desc": "Modern and spacious building"
        },
        {
          loc_name: "library2",
          "desc": "A cosy small building"
        }
      ]
   }
};



function contentClass(isShow) {
  if (isShow) {
    return "content";
  }
  return "content invisible";
}

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isShow: false};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(function(prevState) {
      return {isShow: !prevState.isShow};
    });
  }

  render() {

        const libraries_desc = places.library.location.map((libr) =>
        <div>       
        <p>{libr.desc}</p>
        </div>   
    );
        const lib_names = places.library.location.map((libr) =>
        <div>       
        <p>{libr.loc_name}</p>
        </div>   
    );

    return(
      <div>
        <div className='control' onClick={this.handleClick}> 
        <h4>{lib_names}</h4>
        <div className={contentClass(this.state.isShow)}>{libraries_desc}</div>
      </div>
      </div>
    );
  }
}



export default Toggle;








