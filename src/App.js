//Using one of the above APIs, build a single page application that 
//  uses fetch() to retrieve information and display it on your website. 

//  Once done, share your project on Github Pages and share it with the community on Discord.
//   I will be featuring my favourite ones in an upcoming video!


import React from "react";
import logo from './astro.jpg';
import './App.css';
import { isCompositeComponentWithType } from "react-dom/test-utils";

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      issp: [],
      DataReceived: false
    };
  }
  /*
  componentDidMount() {
    fetch("http://api.open-notify.org/iss-now.json")
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                issp: json.iss_position,
                DataReceived: true
            });
          })
}
*/
  async componentDidMount(){
      const resp = await fetch("http://api.open-notify.org/iss-now.json");
      const data = await resp.json();
      this.setState({
        issp : data.iss_position,
        DataReceived: true
      });
  }



  render() {
    const {DataReceived, issp } = this.state;
    var longdata = DataReceived? issp.longitude : 'Loading...'; 
    var latdata = DataReceived? issp.latitude : 'Loading...';
   
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />         
          <h1> International Space Station Current Location </h1>
          <h4>Latitude: </h4>
          {latdata}
          <h4>Longitude: </h4>
          {longdata}
        </header>
      </div>
    );
  }
}

export default App;

/*
import React from "react";
import { isCompositeComponentWithType } from "react-dom/test-utils";
import './App.css';
class App extends React.Component {
   
    // Constructor 
    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
   
    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
        fetch(
"http://api.open-notify.org/iss-now.json")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
              })
                
   
    }
    render() {
        const { DataisLoaded, items } = this.state;
        console.log(items)
        
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;
   
        return (
        <div className = "App">
            <h1> International Space Station Current Location </h1>
            <h2>Latitude: </h2>
          { items.iss_position.latitude}
            <h2>Longitude: </h2>
          { items.iss_position.longitude}
               
        </div>
    );
}
}
   
export default App;*/