import React from 'react'

class DominoArray extends React.Component {

    state = ({
        Question : [{},{},{},{},{},{},{},{}]
    })
    
   

    render(){
        return(
            <div className="dominoArray">
                <div className="topHalf">
                    <label>topHalf : </label>
                    <span> {this.state.Question.map((el,index) => {return <button onClick={() => this.props.onclick()}> {index <= 6 ? index : -1  } </button> })} </span>
                </div>
                <div className="topBottom">
                    <label>topBottom : </label>
                    <span> {this.state.Question.map((el,index) => {return <span> {index <= 6 ? index : -1  } </span> })} </span>
                </div>
                <div className="isCorrect">
                    <label for="" >is Correct</label>
                    <input type="checkbox" />
                </div>
            </div>
        )
    }
}

export default DominoArray