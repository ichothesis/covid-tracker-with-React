import React, {Component} from 'react';
import {Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api';

class App extends Component{

  state={
    data:{}
  }

  async componentDidMount(){
    const data=await fetchData();

    this.setState({data});
  }

  changeHandler = async (country) =>{
    const fetchedData=await fetchData(country);
    this.setState({data:fetchedData, country:country});
    console.log(fetchedData);
    console.log(country);
  }

  render(){
    return (
      <div className={styles.container}>
        <Cards data={this.state.data}></Cards>
        <CountryPicker method={this.changeHandler}></CountryPicker>
        <Chart data={this.state.data} country={this.state.country}></Chart>
      </div>
    );
  }

}

export default App;
