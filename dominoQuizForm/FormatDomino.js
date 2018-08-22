import React from 'react'
import DominoArray from './DominoArray';
import './FormatDomino.css'
import Answer from './Answer';

class FormatDomino extends React.Component {

    state = ({
        dominoArray : []
    })

    addDomino = ()=> {
        return this.setState({
            dominoArray : [...this.state.dominoArray , {topHalf : -2 , bottomHalf : -2 , break : false}]
        })
    }

    onclick = () => {
        
            let res = this.state.dominoArray 
            console.log(res , this.state.dominoArray)
            
            res = res.map((el , index ) => {
                index === 0 && (el.topHalf = 5 ) && (el.bottomHalf = 5 )
                
            })

            this.setState({
                dominoArray : res 
            })
        //     this.setState({
        //         dominoArray : res
        // })this.setState({
        //         dominoArray : res
        // })
    }

    render () {
        return (
            <div>
                <div className="details">
                    <div className="typeBlock">
                        <labes>type : </labes>
                        <input value="domino" type="text" disabled/>
                    </div>
                    <div className="categoryBlock">
                        <labes for="categoryInput">category</labes>
                        <select id="categoryInput" name="categoryInput">
                            <option>select category</option>
                        </select>
                    </div>
                </div>
                {this.state.dominoArray.map((el , index) => {
                    return <DominoArray topHalf={el.topHalf} bottomHalf={el.bottomHalf} break={el.break} index={index} onclick={this.onclick}  />  
                })}
                <button onClick={this.addDomino} >Add another domino</button>
                <Answer />
            </div> 
        )
    }
}
export default FormatDomino