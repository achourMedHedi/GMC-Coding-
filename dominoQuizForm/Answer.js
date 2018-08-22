import React from 'react'

class Answer extends React.Component {
    state = ({
        answer : [{},{},{},{},{},{},{},{}]
    })
    render() {
        return (
            <div className="answerBlock">
                    <label>Answer : </label>
                    <span> {this.state.answer.map((el,index) => {return <span> {index <= 6 ? index : -1  } </span> })} </span>
            </div>
        )
    }
}

export default Answer