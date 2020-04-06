import React, {Component} from 'react';
import { Layout, Card} from 'antd';
import './App.css';
import Button from 'react-bootstrap/Button';

const { Header, Content } = Layout;

var todayDate = new Date();

class App extends Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.state = { one: "", two: "", three: "", four: "", five: "", six: "",  };
  }

       handleClick(){

        var names = ["Eitan","Karthik", "James", "Josh", "Reggie","Nom"];

         names.sort(func);

           function func(a, b) {
               return 0.5 - Math.random();
           }

            this.setState({ one : names[0]});
            this.setState({ two: names[1] });
            this.setState({ three: names[2] });
            this.setState({ four: names[3] });
            this.setState({ five: names[4] });
            this.setState({ six: names[5] });
    }

  render()
  {

      window.onload = function () {

          let eleBtnStart = document.querySelector("#btnStart");
          let eleBtnStop = document.querySelector("#btnStop");
          let eleBtnReset = document.querySelector("#btnReset");
          let eleTimer = document.querySelector("#divTimer");

          let timeTicker = (() => {
              var hours = 0;
              var minutes = 0;
              var seconds = 0;
              var timerTick;
              return {
                  start: () => {
                      if (!timerTick) {
                          timerTick = setInterval(() => {
                              seconds++;
                              if (seconds == 60) {
                                  minutes += 1;
                                  seconds = 0;
                                  if (minutes == 60) {
                                      hours += 1;
                                      minutes = 0;
                                  }
                              }
                              eleTimer.innerHTML = `${hours.toString().length == 1 ? "0" + hours : hours}
: ${minutes.toString().length == 1 ? "0" + minutes : minutes}
: ${seconds.toString().length == 1 ? "0" + seconds : seconds}`;
                          }, 25);
                      }
                  },
                  stop: () => {
                      if (timerTick) {
                          clearInterval(timerTick);
                          timerTick = false;
                      }
                  },
                  reset: () => {
                      seconds = minutes = hours = 0;
                      clearInterval(timerTick);
                      timerTick = false;
                      eleTimer.innerHTML = `0${hours} : 0${minutes} : 0${seconds}`;
                  }
              }
          })();


          eleBtnStart.addEventListener('click', () => {
              timeTicker.start();
          });

          eleBtnStop.addEventListener('click', () => {
              timeTicker.stop();
          })

          eleBtnReset.addEventListener('click', () => {
              timeTicker.reset();
          })

      }



      return(

        <Layout className="App">

          <Header className="App-header">
            <p className="header-class">Random StandUp Generator!</p>
          </Header>

          <Content className="App-content">
            <Card>
              <p style={{fontSize: "x-large"}}>Today's Date: {todayDate.toDateString()} {todayDate.toLocaleTimeString()}</p>

                <p><div className={'text-color'} id="divTimer">00 : 00 : 00</div></p>

                <Button variant="success" id="btnStart">Start</Button>
                &nbsp;
                <Button variant="danger" id="btnStop">Stop</Button>
                &nbsp;
                <Button variant="warning" id="btnReset">Reset</Button>

                <br></br>
                <br></br>

            <Card>
                <h3>{this.state.one}</h3>
                <h3>{this.state.two}</h3>
                <h3>{this.state.three}</h3>
                <h3>{this.state.four}</h3>
                <h3>{this.state.five}</h3>
                <h3>{this.state.six}</h3>
            </Card>

            </Card>

              <br></br>
              <br></br>

              <Button variant="primary" onClick={this.handleClick.bind(this)}>Generate</Button>

          </Content>

          <br></br>
          <br></br>

        </Layout>
    );
  }
}

export default App;
