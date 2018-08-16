import React from 'react'

class Timer extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = ({
            time : this.props.timestamp
        })
        this.timerFun()
    }

    timerFun = () => {
        if (this.state.time > 0) {
             setTimeout(()=>{
                this.setState({
                    time :this.state.time - 1000
                }) , this.timerFun()
            },1000)
        }
        else {
            //dispatch action 
        } 
    }
    
    render() {
       let msPerSecond = 1000
        let msPerMinute =msPerSecond * 60 
      let   msPerHour = msPerMinute * 60
       
       let hours = Math.floor(this.state.time / msPerHour )
      let  hoursRest = this.state.time % msPerHour
      let  minutes = Math.floor(hoursRest / msPerMinute)
      let  minuteRest = hoursRest % msPerMinute
      let  seconds = Math.floor(minuteRest / msPerSecond)
        return (
            <span>
            {String(hours).padStart(2, '0') +
            ':' + String(minutes).padStart(2, '0') +
            ':' + String(seconds).padStart(2, '0') }
            
        </span>
        )
    }
}

export default Timer

