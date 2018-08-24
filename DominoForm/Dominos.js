import React from 'react'
import { DominoImage } from './DominoImage';
import {ExpansionPanel,Button } from 'react-md'

class Dominos extends React.Component {

    state = ({
        line1 : -1 , 
        line2 : -1 , 
        break : false ,
        images : [0,1,2,3,4,5,6,-1]
    })

    onChangeTopHalf = (index ,payLoad , bottomHalf) => {
        return this.setState({
            line1 : payLoad
            
        },()=>{
            this.props.onChangeDomino(index , {"topHalf" : this.state.line1 , "bottomHalf" : bottomHalf , "break" : this.state.break})
        })
    }
    onChangeBottomHalf = (index ,payLoad , topHalf) => {
        return this.setState({
            line2 : payLoad
        },()=>{
            this.props.onChangeDomino(index , {"topHalf" : topHalf , "bottomHalf" : this.state.line2 , "break" : this.state.break})
        })
    }
    onChangeBreak = (index , topHalf , bottomHalf) => {
        return this.setState({
            break : !(this.state.break)
        },()=>{
            this.props.onChangeDomino(index , {"topHalf" : topHalf , "bottomHalf" : bottomHalf , "break" : this.state.break})
        })
    }

    onAddDomino = () => {
        return this.props.onAddDomino() , this.setState({line1 : -1 , line2 : -1 , break : false})
    }

    onDeleteDomino = (index) => {
        return this.props.onDeleteDomino(index),console.log(index)
    }

    
    // onClick={()=>this.onChangeTopHalf(index , 1 , el.bottomHalf)} 
    render() {return (
        <div>
            {this.props.domino.map((el , index) => {
                return (
                    <ExpansionPanel 
                    label={`Domino ${index+1}`}
                    footer={null}
                    headerStyle={el.break ? {backgroundColor : 'red'} : {backgroundColor : 'white'}}
                    >
                        <div className="dominoX">
                        {/*<button onClick={()=>{
                            this.props.onChangeDomino(index , {"hahaha" : 'lololo'})}
                        }>click me  {index}
                    </button>*/}
                        <div className="leftSide">
                            {/*<span>Choose the elements of the domino pieces</span>*/}
                            <div>
                                {this.state.images.map((element,i)=>{
                                    return( 
                                        el.topHalf === i 
                                        ? 
                                        <button 
                                        style={{backgroundColor : 'gray'}} 
                                        onClick={()=>this.onChangeTopHalf(index , element , el.bottomHalf)} > 
                                        <DominoImage number={element} 
                                        /> 
                                        </button>  
                                        : 
                                        (
                                            i===7 && el.topHalf === -1 ?
                                            <button 
                                            style={{backgroundColor : 'gray'}}                                             
                                            onClick={()=>this.onChangeTopHalf(index , element , el.bottomHalf)} > 
                                            <DominoImage 
                                            number={element} 
                                            /> 
                                            </button>  :
                                            <button 
                                            onClick={()=>this.onChangeTopHalf(index , element , el.bottomHalf)} > 
                                            <DominoImage 
                                            number={element} 
                                            /> 
                                            </button>  
                                        )
                                    )
                                    }
                                )
                            } 
                            </div>
                            <div>{this.state.images.map((element,i)=>{return( 
                                el.bottomHalf === i 
                                        ? 
                                        <button 
                                        style={{backgroundColor : 'gray'}} 
                                        onClick={()=>this.onChangeBottomHalf(index , element , el.topHalf)} > 
                                        <DominoImage number={element} 
                                        /> 
                                        </button>  
                                        : 
                                        (
                                            i===7 && el.bottomHalf === -1 ?
                                            <button 
                                            style={{backgroundColor : 'gray'}}                                             
                                            onClick={()=>this.onChangeBottomHalf(index , element , el.topHalf)} > 
                                            <DominoImage 
                                            number={element} 
                                            /> 
                                            </button>  :
                                            <button 
                                            onClick={()=>this.onChangeBottomHalf(index , element , el.topHalf)} > 
                                            <DominoImage 
                                            number={element} 
                                            /> 
                                            </button>  
                                        )
                                    )
                                }
                            )
                        } 
                        </div>
                            <div style={{marginLeft : '6px'}} > {el.break ? <Button  flat secondary swapTheming onClick={()=>this.onChangeBreak(index ,el.topHalf , el.bottomHalf)} >Back To Line </Button> : <Button  flat primary swapTheming onClick={()=>this.onChangeBreak(index ,el.topHalf , el.bottomHalf)} >Back To Line </Button>} </div>
                            
                            {console.log(el)}
                        
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
                                            <DominoImage number={el.topHalf} />
                                            <div style={{marginTop : "-3px"}} ></div>
                                            <DominoImage number={el.bottomHalf} />
                                        </td>
                                        {el.break && <td style={{position : 'relative' , top : 32}} className="backLine"></td>}                                    
                                        
                                    </tr>
                                    <tr>
                                        {el.break && <td className="backLineArrow"></td>}                                    
                                    </tr>
                                </tbody>
                            </table>
                            <Button flat secondary swapTheming style={{float : 'right'}} onClick={()=>this.onDeleteDomino(index)} >DELETE </Button>
                            
                        </div>
                        
                        </div>
                    </ExpansionPanel>
                )
            })}
            <Button onClick={()=>{
                this.onAddDomino()
            }}
            style={{backgroundColor : "orange"}}
            className="addDomino"  
            flat  
            swapTheming>add domino</Button>
        </div>
    )
}
}

export default Dominos