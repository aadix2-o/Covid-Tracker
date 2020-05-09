import React, { Component } from 'react';
import Cards from './Components/Cards/cards';
import Chart from './Components/Chart/chart';
import CountryPicker from './Components/CountryPicker/countrypicker.js';
import styles from './App.module.css';
import {fetchData} from './api';
import Corona from './images/Covid.png';
class App extends Component {
  state = {
    data:{},
    country:"",
  }
  async componentDidMount(){
    const data = await fetchData();
    this.setState({data:data});
  }
  handleCountryChange=async(country)=>
  {
      const fetchedData = await fetchData(country);
      this.setState({data:fetchedData,country:country});
      console.log(this.state.data);
  }
  render() {
    return (
      <div className='container'>
      <img className = 'image' src = {Corona} alt="Covid-19"/>
        <Cards data={this.state.data}/>
        <CountryPicker handleCountryChange = {this.handleCountryChange}/>
        <Chart data={this.state.data} country={this.state.country}/>
        <div>Made by Adarsh verma github:<a href="https://github.com/aadix2-o">@aadix2-o </a></div>
      </div>
    );
  }
}

export default App;

