import React from 'react';
import './App.css';
// Axios Import
// import 'https://cdnjs.cloudflare.com/ajax/libs/axios/0.20.0/axios.min.js' 
// import 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.min.js'
import axios from 'axios';
import "./info.json";
import Chart from "chart.js";



import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// Import Components
import Menu from './Menu/Menu'
import Hero from './Hero/Hero'
import HomePage from './HomePage/HomePage'
import Footer from './Footer/Footer'
import AboutPage from './AboutPage/AboutPage';
import LoginPage from './LoginPage/LoginPage';

// Load the components with <component/>
function App() {
  return (

    <Router>
      <Menu/>
      <Hero/>
        <div className='mainContainer'>
          <Switch>

            <Route path='/about'>
              <AboutPage/>
            </Route>
            <Route path='/login'>
              <LoginPage/>
            </Route>
            <Route path='/'>
              <HomePage/>
            </Route>

          </Switch>
        </div>
      <HomePage/>
      <Footer/>
     
    </Router>
  );
}

// var dataSource = require('./info.json');

var dataSource = {
  datasets: [
      {
          data: [],
          backgroundColor: [
              '#ffcd56',
              '#ff6384',
              '#36a2eb',
              '#aa7b19',
              '#fffb19',
              '#bbab19',
              '#dd6b19'
          ],
      }
  ],
  labels: [
      
  ]
};

// Axios Code
function getBudget() 
        {
            axios.get('http://localhost:3000/info.json' ).then(function (res) 
            {
                //console.log(res);
                for (var i = 0; i < res.data.budget.myBudget.length; i++) 
                {
                  console.log(dataSource)
                    dataSource.datasets[0].data[i] = res.data.budget.myBudget[i].budget;
                    dataSource.labels[i] = res.data.budget.myBudget[i].title;
                }
                createChart();
            });
        }


function createChart() 
{
    var ctx = document.getElementById("myChart").getContext("2d");
    var myPieChart = new Chart(ctx, 
    {
        type: 'pie',
        data: dataSource
    });
}

getBudget()

export default App;
