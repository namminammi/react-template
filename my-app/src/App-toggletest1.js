import React, { Component } from 'react';

var nyc_quiet_public_space = {
  library: {
      location: [
        {
          loc_name: "NYPL Business library at Madison",
          address : "188 Madison Ave, New York, NY 10016",
          "website": "https://www.nypl.org/about/locations/sibl",
          "desc": "Modern and spacious building with huge area for study and reading, including a service to book a room for meeting for free of charge"
        },
        {
          loc_name: "C.Jung library",
          "address": "28 E 39th St, New York, NY 10016",
          "website": "http://junglibrary.org",
          "desc": "A cosy small building filled with books related to psychology, mythology, gender study, religion."
        }
      ]
   },
   museum: {
      location: [
      {
        "loc_name": "Met Breuer",
        "address": "945 Madison Ave, New York, NY 10021",
        "website": "https://www.metmuseum.org/visit/met-breuer",
        "desc": "Formerly Whitney Museum building, hosting exhibitions from modern and contemporary authors. A spacious cafe in downstairs with natural light."
      },
      {
        "loc_name": "Jewish Museum",
        "address": "5th Ave & E 92nd St, New York, NY 10128",
        "website": "http://thejewishmuseum.org",
        "desc": "Free on Saturday, usually not too crowded unless there is some popular author (such as Chagall) is on."
      } 
      ]
   },

   cultural_center: {
    location: [
{
  "loc_name": " Goethe Institute",
  "address": "30 Irving Pl, New York, NY 10003",
  "website": "https://www.goethe.de/ins/us/en/sta/ney.html?wt_sc=newyork",
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
  "website": "http://www.scandinaviahouse.org",
  "desc": "Exhibitions by Scandinavian painters and open library during weekday."
}

    ]
   },
   bookstore: {
    location: [
    {
    "loc_name": "Albertine",
    "address": "972 5th Ave, New York, NY 10075",
    "website": "http://www.albertine.com",
    "desc": "French bookstore/cultural center with magical constellations painted on the ceiling with deep blue sky and warm golden stars."
},
{
    "loc_name": "Kinokuniya",
    "address": "1073 6th Ave, New York, NY 10018",
    "website": "https://usa.kinokuniya.com",
    "desc": "Japanse bookstore with tons of manga and cute stationary beside a wide selections of Japanese and English books & magazines of literature, design, fashion, cooking."
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

        const libraries = nyc_quiet_public_space.library.location.map((libr) =>
        <div>       
        <p>{libr.address}</p>
        <p>{libr.website}</p>
        <p>{libr.desc}</p>
        </div>   
    );
        const lib_names = nyc_quiet_public_space.library.location.map((libr) =>
     
        <div>       
        <p>{libr.loc_name}</p>
        </div>   
    );

    return(
      <div>
        <div className='control' onClick={this.handleClick}> 
        <h4>{lib_names}</h4>
        <div className={contentClass(this.state.isShow)}>{libraries}</div>
      </div>


      </div>
    );
  }
}



export default Toggle;








