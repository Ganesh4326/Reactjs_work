import React, { Component } from 'react'

export default class DigitalClock extends Component {
    constructor(props) {
        super(props);           
    
        this.state = {
             time:"h"
        }
    }

    componentDidMount(){
        this.tick();
    }

    tick=()=>{
        const h=new Date().getHours();
        const m=new Date().getMinutes();
        const s=new Date().getSeconds();
        const newtime=`${h}:${m}:${s}`;
        this.setState({time:newtime});
    }

    componentDidUpdate(prevProps,prevState){
        this.interval=setInterval(()=>{
            this.tick();
        },1000)
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }
    
  render() {
    return (
      <div>
      <center>
      <h1>{this.state.time}</h1>
      </center>
      </div>
    )
  }
}
