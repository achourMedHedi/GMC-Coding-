import React from 'react' 
import DominoImage from './DominoImage'
import {ExpansionPanel , Button} from 'react-md'

export default class Answer extends React.Component {
    state = ({
        line1 : -1 ,
        line2 : -1 ,
        images : [0,1,2,3,4,5,6]
        
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
        {
                <ExpansionPanel 
                label={`Answer`}
                footer={null}
                >
                    <div className="dominoX">
                    {/*<button onClick={()=>{
                        this.props.onChangeDomino(index , {"hahaha" : 'lololo'})}
                    }>click me  {index}
                </button>*/}
                    <div className="leftSide">
                        {/*<span>Choose the elements of the domino pieces</span>*/}

                        <div>{this.state.images.map((element,i)=>{return( 
                            this.props.answer.topHalf === i 
                            ? 
                            <button 
                            style={{backgroundColor : 'gray'}} 
                            onClick={()=>this.onChangeTopHalf(element)} > 
                            <DominoImage number={element} 
                            /> 
                            </button>  
                            : 
                            <button 
                            onClick={()=>this.onChangeTopHalf(element)} > 
                            <DominoImage number={element} 
                            /> 
                            </button>
                            // <button onClick={()=>this.onChangeTopHalf(element)} > <DominoImage number={element} /> </button>  
                        )})
                        } 
                            </div> 
                        <div>
                        {this.state.images.map((element,i)=>{return( 
                            this.props.answer.bottomHalf === i 
                            ? 
                            <button 
                            style={{backgroundColor : 'gray'}} 
                            onClick={()=>this.onChangeBottomHalf(element)} > 
                            <DominoImage number={element} 
                            /> 
                            </button>  
                            : 
                            <button 
                            onClick={()=>this.onChangeBottomHalf(element)} > 
                            <DominoImage number={element} 
                            /> 
                            </button>
                            // <button onClick={()=>this.onChangeTopHalf(element)} > <DominoImage number={element} /> </button>  
                        )})
                        } 
                        </div>
                        
                        {console.log(this.props.answer)}
                    
                    </div>
                    <div className="middleSide" >
                        <span className="box" ></span>
                        <span className="triangle" ></span>
                    </div>
                    <div className="rightSide" >
                        <table className="domino" >
                            <tbody>
                                <tr>
                                    <td>
                                        <DominoImage number={this.props.answer.topHalf} />
                                        <div style={{marginTop : "-3px"}} ></div>
                                        <DominoImage number={this.props.answer.bottomHalf} />
                                    </td>
                                    {this.props.answer.break && <td style={{position : 'relative' , top : 32}} className="backLine"></td>}                                    
                                    
                                </tr>
                                <tr>
                                    {this.props.answer.break && <td className="backLineArrow"></td>}                                    
                                </tr>
                            </tbody>
                        </table>                        
                    </div>
                    </div>
                </ExpansionPanel>
            
        }
        
    </div>
   )}
}

// <div>
//         <span>answer : </span>
//         <div>TopHalf : {this.state.line1}, {this.state.images.map((element,i)=>{return( <button onClick={()=>this.onChangeTopHalf(element)} > <DominoImage number={element} /> </button>  )})} </div>
//         <div>bottomHalf : {this.state.line2} , {this.state.images.map((element,i)=>{return( <button onClick={()=>this.onChangeBottomHalf(element)} > <DominoImage number={element} /> </button>  )})} </div>
//         {
//             console.log("tophalf",this.props.answer.topHalf ,"bottomHalf" , this.props.answer.bottomHalf  )
//         }
//         {
//             console.log("line1", this.state.line1 ,"line2", this.state.line2  )
//         }
//        </div>



