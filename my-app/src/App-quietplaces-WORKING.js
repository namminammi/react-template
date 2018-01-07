import React from 'react';
import { render } from 'react-dom';


var nyc_quiet_public_space = {
      
    list : {
      location: [
      {
                loc_name: "NYPL Business library at Madison",
                address: "188 Madison Ave, New York, NY 10016",
                "website": "http://nypl.org/about/locations/sibl",
                "desc": "Modern and spacious building with huge area for study and reading, including a service to book a room for meeting for free of charge"
            }, 
            {
                loc_name: "C.Jung library",
                "address": "28 E 39th St, New York, NY 10016",
                "website": "http://junglibrary.org",
                "desc": "A cosy small building filled with books related to psychology, mythology, gender study, religion."
      
            },
      
            {
                "loc_name": "Met Breuer",
                "address": "945 Madison Ave, New York, NY 10021",
                "website": "http://metmuseum.org/visit/met-breuer",
                "desc": "Formerly Whitney Museum building, hosting exhibitions from modern and contemporary authors. A spacious cafe in downstairs with natural light."
            }, 
            {
                "loc_name": "Jewish Museum",
                "address": "5th Ave & E 92nd St, New York, NY 10128",
                "website": "http://thejewishmuseum.org",
                "desc": "Free on Saturday, usually not too crowded unless there is some popular author (such as Chagall) is on."
            },
      
            {
                "loc_name": " Goethe Institute",
                "address": "30 Irving Pl, New York, NY 10003",
                "website": "http://goethe.de/ins/us/en/sta/ney.html?wt_sc=newyork",
                "desc": "Near Union sq, clean and modern space to read and check out German & English books"
            }, 
            {
                "loc_name": "Cervantes Institute",
                "address": "211 E 49th St, New York, NY 10017",
                "website": "http://nyork.cervantes.es/en/default.shtm",
                "desc": "Located in Turtle Bay, a charming space with a garden with tons of Spanish language materials (viva Cervantes y Almodovar!)."
            }, 
            {
                "loc_name": "Scandinavia House",
                "address": "58 Park Ave, New York, NY 10016",
                "website": "http://scandinaviahouse.org",
                "desc": "Close to Grand Central, with Exhibitions by Scandinavian painters and a small library with Scandinavian language books open on weekdays."
      
            },
      
            {
                "loc_name": "Albertine",
                "address": "972 5th Ave, New York, NY 10075",
                "website": "http://albertine.com",
                "desc": "French bookstore/cultural center across Central Park with magical constellations painted on the ceiling with deep blue sky and warm golden stars."
            }, 
            {
                "loc_name": "Kinokuniya",
                "address": "1073 6th Ave, New York, NY 10018",
                "website": "https://usa.kinokuniya.com",
                "desc": "Japanse bookstore by Bryant Park with tons of manga and cute stationary beside a wide selections of Japanese and English books & magazines of literature, design, fashion, cooking."
            }]
          }
      };


class Location extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isShow: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
       isShow: !prevState.isShow 
    }))
  }

  contentClass(isShow) {
    if (isShow) {
      return "content";
    }
    return "content invisible";
  }

  render() {
    return (
      <div className='control' onClick={this.handleClick}>
        <h4>{this.props.desc}</h4>
        <div className={this.contentClass(this.state.isShow)}>{this.props.loc_name}</div>
      </div>
    )
  }
}

class Toggle extends React.Component {
   constructor(props) {
     super(props);
     this.state = { 
       isShow: false,
       id: -1, 
     };
   }

   handleClick = (id) => {
    this.setState({ 
      isShow: !this.state.isShow,
      id: id
    });
   }

   render() {
     const { location } = nyc_quiet_public_space.list;
     const { isShow, id } = this.state;
     return (
     
       <div className="control container">
          {location.map((loc, index) => (
            <div key={index} onClick={() => { this.handleClick(index) }}>
              <h4>{loc.loc_name}</h4>
              {(isShow && (id === index)) && <p>{loc.desc} {"\n"} {"\n"}{loc.address} {"\n"} {"\n"} <a href={loc.website} target='_blank'>{loc.website}</a></p>}
            </div>
           ))}
       </div>


      
      );
   }
}


export default Toggle;

