import React, { Component } from 'react';


var data = {
  content: {
      people: [
        {
          name: "Test",
          age : 24
        },
        {
          name: "Foo",
          age: 25
        }
      ]
   }
};




class App extends Component {
  render() {

    var people = data.content.people.map(function(person){
      return (<div>{person.name}</div>);
    });
    
    return (<div>{people}</div>)
  }
}

export default App;








