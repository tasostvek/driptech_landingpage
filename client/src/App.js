import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const count= new Date("September 30 2020, 00:00:00").getTime();

    const now = setInterval(function() {
        const now = new Date().getTime();
        const timeLeft = count-now;

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
  return (
    <div className="App">
      <div class="container">
        <h1>DripTech</h1>
        <h2>Launching Soon...</h2>
    
        <div class="count">
            <div class ="countd">
                <span id="days">00</span>
                DAYS
            </div>
            <div class ="countd">
                <span id="hours">00</span>
                HOURS
            </div>
            <div class ="countd">
                <span id="minutes">00</span>
                MINUTES
            </div>
            <div class ="countd">
                <span id="seconds">00</span>
                SECONDS
            </div>
        </div>
        <div>
          <input placeholder="Email Address"/>
        </div>
      </div>
    </div>
    
  );
}

export default App;
