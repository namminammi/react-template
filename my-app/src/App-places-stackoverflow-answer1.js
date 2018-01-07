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

class Location extends React.Component {
  constructor(props){
    super(props);
    this.state = { isShow: false};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState(function (prevState){
      return { isShow: !prevState.isShow };
    });
  }

  contentClass(isShow){
    if(isShow){
      return "content";
    }
    return "content invisible";
  }

  render(){
    return (
      <div className ="control" onClick={this.handleClick}>
      <h4>{this.props.loc_name}</h4>
      <div className={this.contentClass(this.state.isShow)}>{this.props.desc}</div>
      </div>
      )
  }
}



class Toggle extends React.Component {
   constructor(props) {
     super(props);
   }

   render() {
     const locations = places.library.location.map(location=>{
      return <Location {...location} />
     })

     return (
        <div>
          {locations}
        </div>
      );
   }
}



export default Toggle;

