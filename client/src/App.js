import React from 'react';
import './App.css';
import {FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";
import axios from 'axios';
import ReactGa from 'react-ga';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      name:'',
      email: ''
    };
    ReactGa.initialize('UA-178009502-1');
    ReactGa.pageview('/');
  }


  handleChange = ({target}) => {
    const{name, value} = target;
    this.setState({[name]: value});
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const payload = {
      name: this.state.name,
      email: this.state.email
    };
    if(this.state.name !== "" && this.state.email !== ""){
      console.log('Fields are filled');
      axios({
        url:'/api/save',
        method:'POST',
        data: payload
      })
      .then(()=>{
        console.log('Data has been sent to the server');
        alert('Thank you for signing up! We will reach out to you soon with more information about the innovations being created by DripTech!');
        this.resetUserInputs();
      })
      .catch(()=>{
        console.log('Internal server error');
      })
    }
    else{
      console.log('Name and email are empty');
      alert('Please enter your name and email before submiting');
    }

  };

  resetUserInputs = () => {
    this.setState({
      name:'',
      email:''
    });
  };


  render() {

    console.log('State: ',this.state);

    return (
      <div className="App">
        <img src="/images/background.jpg"/>
        <div className ="container">
          <h1>DripTech</h1>
          <h2>Launching Soon....</h2>
      
          <div className ="count">
              <div className ="countd">
                  <span id="days">00</span>
                  DAYS
              </div>
              <div className ="countd">
                  <span id="hours">00</span>
                  HOURS
              </div>
              <div className ="countd">
                  <span id="minutes">00</span>
                  MINUTES
              </div>
              <div className ="countd">
                  <span id="seconds">00</span>
                  SECONDS
              </div>
          </div>
          <form onSubmit={this.handleSubmit}>
            <input className="emailInput" placeholder="Name" 
                  value={this.state.name} onChange={this.handleChange} name="name"/>
            <input className="emailInput" placeholder="Email Address" 
                  value={this.state.email} onChange={this.handleChange} name="email"/>
            <button className="notifyButton">Notify Me</button>
          </form>
        </div>
        <Footer/>
      </div> 
    );
  }
}

const count= new Date("September 30 2020, 00:00:00").getTime();
const now = setInterval(function() {
        const now = new Date().getTime();
        const timeLeft = count - now;

        const days = Math.floor(timeLeft/(1000*60*60*24));
        const hours = Math.floor((timeLeft%(1000*60*60*24))/(1000*60*60));
        const minutes = Math.floor((timeLeft%(1000*60*60))/(1000*60));
        const seconds = Math.floor((timeLeft%(1000*60))/1000);

        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;

        /*if(timeLeft >= 0){
            clearInteveral(x);
        }*/
}, 1000);

const Footer = () =>{
  return(
      <div className='footer'>
          <a rel="noopener noreferrer" href = "https://www.facebook.com" target="_blank">
              <FaFacebook className='footer-icon'/>
          </a>
          <a rel="noopener noreferrer" href = "https://www.instagram.com/driptech.official/" target="_blank">
              <FaInstagram  className='footer-icon'/>
          </a>
          <a rel="noopener noreferrer" href = "https://www.twitter.com" target="_blank">
              <FaTwitter className='footer-icon'/> 
          </a>
          <p className="copyright-footer">2020 © DripTech LLC. All rights reserved.</p>
      </div>
      /*For Linkedin
        <a rel="noopener noreferrer" href = "https://www.linkedin.com" target="_blank">
              <FaLinkedin className='footer-icon'/>
        </a>*/
  );
}

export default App;
