import React from 'react' 
import DominoImage from './DominoImage'
export default class Answer extends React.Component {
    state = ({
        line1 : -1 ,
        line2 : -1 ,
        images : [0,1,2,3,4,5,6,-1]
        
    })
    onChangeTopHalf=(payload)=> {
        return this.setState ({
            line1 : payload
        },()=>{
            this.props.onChangeAnswer(this.state.line1 , this.state.line2)
        })
    }
    onChangeBottomHalf=(payload)=> {
        return this.setState ({
            line2 : payload
        },()=>{
            this.props.onChangeAnswer(this.state.line1 , this.state.line2)
        })
    }
   render(){
       return(
       <div>
        <span>answer : </span>
        <div>TopHalf : {this.state.line1}, {this.state.images.map((element,i)=>{return( <button onClick={()=>this.onChangeTopHalf(element)} > <DominoImage number={element} /> </button>  )})} </div>
        <div>bottomHalf : {this.state.line2} , {this.state.images.map((element,i)=>{return( <button onClick={()=>this.onChangeBottomHalf(element)} > <DominoImage number={element} /> </button>  )})} </div>
        {
            console.log("tophalf",this.props.answer.topHalf ,"bottomHalf" , this.props.answer.bottomHalf  )
        }
        {
            console.log("line1", this.state.line1 ,"line2", this.state.line2  )
        }
       </div>
   )}
}