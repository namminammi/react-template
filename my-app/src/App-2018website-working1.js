import React from 'react';
import { render } from 'react-dom';


var projects = {
      
    list : {
      links: [
      {
                "link_name": "Outerplaces.com Events page (Joomla) ",
                "category" : "Team Works",
                "website": "http://www.outerplaces.com/events-directory",
                "desc": "A page for science and science fiction related events, filtering out past events and showing relevant items according to the theme."
            }, 
            {
                "link_name": "LightTV.com (Wordpress)",
                "category" : "Team Works",
                "website": "https://www.lighttv.com/",
                "desc": "A streaming website with family-friendly contents by MGM, integrating video player by Akamai and scheduling by Gracenote."
      
            },
      
            {
                "link_name": "Novo Surgical (Magento) ",
                "category" : "Team Works",
                "website": "https://novosurgical.com/",
                "desc": "Magento-based e-commerce website for an internaltional surgical instrument company."
            }, 
            {
                "link_name": "Movie Search App (React)",
                "category" : "Personal Projects",
                "website": "https://showmemoviesnow.herokuapp.com/",
                "desc": "Movie search app using The Movie Database API."
            },
      
            {
                "link_name": "Scandinavian Countries (AngularJS)",
                "category" : "Personal Projects",
                "website": "http://namminammi.github.io/Scandinavian/Scandinavian_AngularJS_withQuizz.html",
                "desc": "A Single Page App using AngularJS, showing maps and a list of checkbox items for each country along with trivia quizz."
            }, 
            {
                "link_name": "Waterproof Blue Doors",
                "category" : "Personal Projects",
                "website": "http://namminammi.github.io/LegoOnePage/indexLego2.html",
                "desc": "A parallax page anchored to show each character of the story."
            }, 
            {
                "link_name": "2017 American Eclipse App (Ajax calls)",
                "category" : "Personal Projects",
                "website": "http://namminammi.github.io/Eclipse2017/eclipse1.html",
                "desc": "A page to calculate the time and distance of the 2017 Great American Eclipse based on zipcode, using zippopotam, usno.navy and google map API."
      
            },
      
            {
                "link_name": "Dessertful Christmas Card",
                "category" : "Personal Projects",
                "website": "http://namminammi.github.io/Xmas_card/xmas_card.html",
                "desc": "An interactive Christmas card made with jQuery."
            }, 
            {
                "link_name": "Toggle Articles",
                "category" : "Personal Projects",
                "website": "http://namminammi.github.io/ToggleArticle/ToggleArticle.html",
                "desc": "A page to show the same story in different languages when the user clicks the corresponding items."
            },
            {
                "link_name": "Sortable JSON Table",
                "category" : "Front End Tests",
                "website": "http://namminammi.github.io/JSON_sortable_table/task.html",
                "desc": "A table populated with JSON data, sorted by clicking the grey header cell."
            },
            {
                "link_name": "News Module",
                "category" : "Front End Tests",
                "website": "http://namminammi.github.io/News_module/news_module_index.html",
                "desc": "A news module that loads next and previous page, changing the direction of arrows accordingly."
            },
            {
                "link_name": "Page Design Translation (SASS)",
                "category" : "Front End Tests",
                "website": "http://namminammi.github.io/FE_Challenge_scss/FE_Challenge_scss.html",
                "desc": "PSD page translated into code using SASS."
            },
            {
                "link_name": "Tabs Showing Content On Hover",
                "category" : "Front End Tests",
                "website": "http://namminammi.github.io/NamChoi_FE_Task_tab/FE_task_tab2.html",
                "desc": "Tabs showing content on hover using CSS only"
            },
            {
                "link_name": "Custom Numeric Slider",
                "category" : "Front End Tests",
                "website": "http://namminammi.github.io/CustomSlider/custom_slider.html",
                "desc": "A Custom slider that shows the number in range when 1) blue ball is dragged or 2) - or + sign is clicked."
            },
            {
                "link_name": "Parallax page translation",
                "category" : "Front End Tests",
                "website": "http://namminammi.github.io/Demo1/Demo1.html",
                "desc": "Parallax page translated from PSD file."
            },
            {
                "link_name": "Frequently Asked Front End Interview Questions",
                "category" : "Etc",
                "website": "https://github.com/namminammi/frequently-asked-front-end-interview-questions/blob/master/README.md",
                "desc": "Recurring interview questions in job interviews."
            }
            ]
          }
      };


class links extends React.Component {
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
        <div className={this.contentClass(this.state.isShow)}>{this.props.link_name}</div>
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
     const { links } = projects.list;
     const { isShow, id } = this.state;
     return (
     
       <div className="control container">
          {links.map((loc, index) => (
            <div key={index} onClick={() => { this.handleClick(index) }}>
              <h4>{loc.link_name}</h4>
              {(isShow && (id === index)) && <p>{loc.desc} {"\n"} {"\n"} <a href={loc.website} target='_blank'>links</a></p>}
            </div>
           ))}
       </div>


      
      );
   }
}


export default Toggle;

