import React, { Component } from 'react'
import './style.css'
export default class ChangeColors extends Component {
    constructor(props){
        super(props);
      
        this.state = {
           showRed:true,
           showYellow:false,
           showGreen:false,
        }
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({showRed:false,showYellow:true,showGreen:false})
        },4000);
    }

    componentDidUpdate(prevProps,prevState){
        console.log("PrevProps:",prevProps);
        console.log("PrevState:",prevState);
        console.log("Currentprops:",this.props);
        console.log("CurrentState:",this.state);
        if(this.state.showYellow){
            setTimeout(()=>{
                this.setState({showYellow:false,showRed:false,showGreen:true});
            },2000);
        }
        if(this.state.showGreen){
            setTimeout(()=>{
                this.setState({showYellow:false,showRed:true,showGreen:false});
            },2000);
        }
        if(this.state.showRed)
            setTimeout(()=>{
                this.setState({showYellow:true,showRed:false,showGreen:false});
            },2000);
        }


    render() {
        return (
            <div className='main'>
            <div className={this.state.showRed? 'circle-red':'circle'}></div>
            <div className={this.state.showYellow? 'circle-yellow':'circle'}/>
            <div className={this.state.showGreen? 'circle-green':'circle'}/>
            </div>
        )
    }
    
}

