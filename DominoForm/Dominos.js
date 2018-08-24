import React from 'react'
import { DominoImage } from './DominoImage';

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
                    <div className="dominoX">
                    {/*<button onClick={()=>{
                        this.props.onChangeDomino(index , {"hahaha" : 'lololo'})}
                    }>click me  {index}
                </button>*/},
                
                    <div>Domino {index} </div>,
                    <div>TopHalf : {el.topHalf} , {this.state.images.map((element,i)=>{return( <button onClick={()=>this.onChangeTopHalf(index , element , el.bottomHalf)} > <DominoImage number={element} /> </button>  )})} </div>
                    <div>BottomHald : {el.bottomHalf},{this.state.images.map((element,i)=>{return( <button onClick={()=>this.onChangeBottomHalf(index , element , el.topHalf)} > <DominoImage number={element} /> </button>  )})}  </div>
                    <div>back to line :  <button onClick={()=>this.onChangeBreak(index ,el.topHalf , el.bottomHalf)} >{el.break ? 'true' : 'false'} </button> </div>
                    
                    <button onClick={()=>this.onDeleteDomino(index)} >DELETE {index} </button>
                    {console.log(el)}

                    </div>
                )
            })}
            <button onClick={()=>{
                this.onAddDomino()
            }} >add domino</button>
        </div>
    )
}
}

export default Dominos