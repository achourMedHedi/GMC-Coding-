import React from 'react'
const zero = require('./dominos/0.png')
const one = require('./dominos/1.png')
const two = require('./dominos/2.png')
const three = require('./dominos/3.png')
const four = require('./dominos/4.png')
const five = require('./dominos/5.png')
const six = require('./dominos/6.png')
const unknown = require('./dominos/q.png')
export const DominoImage = (props) => {
    switch (props.number) {
        case 0:
            return <img width="40px" height="40px"src={zero} style={{"margin-bottom":"-1px"}} />
            break;
        case 1:
            return <img width="40px" height="40px"src={one} style={{"margin-bottom":"-1px"}} />
            break;
        case 2:
            return <img width="40px" height="40px"src={two} style={{"margin-bottom":"-1px"}}/>
            break;
        case 3:
            return <img width="40px" height="40px"src={three} style={{"margin-bottom":"-1px"}}/>
            break;
        case 4:
            return <img width="40px" height="40px"src={four} style={{"margin-bottom":"-1px"}}/>
            break;
        case 5:
            return <img width="40px" height="40px"src={five} style={{"margin-bottom":"-1px"}} />
            break;  
        case 6:
            return <img width="40px" height="40px" src={six} style={{"margin-bottom":"-1px ","transform" : "rotate(90deg)" }}/>
            break;  
        default:
            return <img width="40px" height="40px"src={unknown} style={{"margin-bottom":"-1px"}}/>
            break;
    }
}

export default DominoImage