import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import Toggle from './App';
import registerServiceWorker from './registerServiceWorker';

import FilterableProductTable from './App';

// ReactDOM.render(<App />, document.getElementById('root'));

// ReactDOM.render((
//   <Toggle />
// ), document.getElementById('root'));

// const PRODUCTS = [
//   {category: 'SportingGoods', price: '$49.99', stocked: true, name: 'Football'},
//   {category: 'SportingGoods', price: '$9.99', stocked: true, name: 'Baseball'},
//   {category: 'SportingGoods', price: '$29.99', stocked: false, name: 'Basketball'},
//   {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
//   {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
//   {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
// ];


const PRODUCTS = 
      [
      {
                "link_name": "Outerplaces.com Events page (Joomla) ",
                "category" : "TeamWorks",
                "website": "http://www.outerplaces.com/events-directory",
                "desc": "A page for science and science fiction related events, filtering out past events and showing relevant items according to the theme."
            }, 
            {
                "link_name": "LightTV.com (Wordpress)",
                "category" : "TeamWorks",
                "website": "https://www.lighttv.com/",
                "desc": "A streaming website with family-friendly contents by MGM, integrating video player by Akamai and scheduling by Gracenote."
      
            },
      
            {
                "link_name": "Novo Surgical (Magento) ",
                "category" : "TeamWorks",
                "website": "https://novosurgical.com/",
                "desc": "Magento-based e-commerce website for an internaltional surgical instrument company."
            }, 
            {
                "link_name": "Movie Search App (React)",
                "category" : "PersonalProjects",
                "website": "http://movie-search-app.surge.sh/",
                "desc": "Movie search app using The Movie Database API."
            },
      
            {
                "link_name": "Scandinavian Countries (AngularJS)",
                "category" : "PersonalProjects",
                "website": "http://namminammi.github.io/Scandinavian/Scandinavian_AngularJS_withQuizz.html",
                "desc": "A Single Page App using AngularJS, showing maps and a list of checkbox items for each country along with trivia quizz."
            }, 
            {
                "link_name": "Waterproof Blue Doors",
                "category" : "PersonalProjects",
                "website": "http://namminammi.github.io/LegoOnePage/indexLego2.html",
                "desc": "A parallax page anchored to show each character of the story."
            }, 
            {
                "link_name": "2017 American Eclipse App (Ajax calls)",
                "category" : "PersonalProjects",
                "website": "http://namminammi.github.io/Eclipse2017/eclipse1.html",
                "desc": "A page to calculate the time and distance of the 2017 Great American Eclipse based on zipcode, using zippopotam, usno.navy and google map API."
      
            },
      
            {
                "link_name": "Dessertful Christmas Card",
                "category" : "PersonalProjects",
                "website": "http://namminammi.github.io/Xmas_card/xmas_card.html",
                "desc": "An interactive Christmas card made with jQuery."
            }, 
            {
                "link_name": "Toggle Articles",
                "category" : "PersonalProjects",
                "website": "http://namminammi.github.io/ToggleArticle/ToggleArticle.html",
                "desc": "A page to show the same story in different languages when the user clicks the corresponding items."
            },
            {
                "link_name": "Sortable JSON Table",
                "category" : "FrontEndTests",
                "website": "http://namminammi.github.io/JSON_sortable_table/task.html",
                "desc": "A table populated with JSON data, sorted by clicking the grey header cell."
            },
            {
                "link_name": "News Module",
                "category" : "FrontEndTests",
                "website": "http://namminammi.github.io/News_module/news_module_index.html",
                "desc": "A news module that loads nex and previous page, changing the direction of arrows accordingly."
            },
            {
                "link_name": "Page Design Translation (SASS)",
                "category" : "FrontEndTests",
                "website": "http://namminammi.github.io/FE_Challenge_scss/FE_Challenge_scss.html",
                "desc": "PSD page translated into code using SASS."
            },
            {
                "link_name": "Tabs Showing Content On Hover",
                "category" : "FrontEndTests",
                "website": "http://namminammi.github.io/NamChoi_FE_Task_tab/FE_task_tab2.html",
                "desc": "Tabs showing content on hover using CSS only"
            },
            {
                "link_name": "Custom Numeric Slider",
                "category" : "FrontEndTests",
                "website": "http://namminammi.github.io/CustomSlider/custom_slider.html",
                "desc": "A Custom slider that shows the number in range when 1) blue ball is dragged or 2) - or + sign is clicked."
            },
            {
                "link_name": "Parallax page translation",
                "category" : "FrontEndTests",
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


ReactDOM.render((
  <FilterableProductTable products={PRODUCTS}/>
), document.getElementById('root'));


registerServiceWorker();
