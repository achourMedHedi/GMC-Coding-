import React from 'react'
import Category from './Category';
import './DominoForm.css'
import Dominos from './Dominos';
import Answer from './Answer'
import Result from './Result'
import {ExpansionPanel , Slider , ExpansionList} from 'react-md'



export default class DominoForm extends React.Component {

    state = ({
        domino : {
            "_id" : "" , 
            "quizes" : [
                {
                    "_id" : "sfsf",
                    "dominoArray" : [{
                        topHalf : 2 , 
                        bottomHalf : 1 , 
                        break : false
                    }] ,
                    "dominoAnswer" : {
                        topHalf : -1 , 
                        bottomHalf : -1
                    }
                }
            ] , 
            "type" : "" , 
            "category" : "" ,
            "__v" : 0
        } 
    })

    onChangeCategory = (category) => {
        return this.setState({
            domino:{...this.state.domino , "_id" : category , "category" : category}
        })
    }

    onChangeDominoArray = (index , newObject) => {
        let q = this.state.domino 
        q.quizes[0].dominoArray[index] = newObject
        return this.setState({
            domino : q
        })
    }

    onAddDomino = () => {
        let q = this.state.domino
        q.quizes[0].dominoArray = [...q.quizes[0].dominoArray , {'topHalf':-1 , "bottomHalf" : -1 , "break" : false}]
        return this.setState({
            domino: q
        })
    }

    onDeleteDomino = (index) => {
        let q = this.state.domino
        q.quizes[0].dominoArray = this.state.domino.quizes[0].dominoArray.filter((el , i) => i!== index)
        console.log(q)
        
        return this.setState({
            domino:q
        })
    }

    onChangeAnswer = (topHalf , bottomHalf) => {
        let q = this.state.domino
        q.quizes[0].dominoAnswer = {topHalf , bottomHalf} 
        return this.setState({
            domino:q
        })
    }

    render () {
        console.log('====================================');
        console.log(this.state.domino.quizes[0].dominoArray);
        console.log('====================================');
        return (
            <div className="body">
            {/* result */}
                <div className="resultBody">
                    {<Result 
                    dominoArray = {this.state.domino.quizes[0].dominoArray} 
                    answer={this.state.domino.quizes[0].dominoAnswer}
                    />}
                </div>
            {/* form input */}
                <div className="form">
                    <Category 
                    changeCategory={this.onChangeCategory} 
                    />
                   
                    <Dominos 
                    domino={this.state.domino.quizes[0].dominoArray} 
                    onChangeDomino={this.onChangeDominoArray}
                    onAddDomino={this.onAddDomino}
                    onDeleteDomino={this.onDeleteDomino}
                    />
                    <br/><br/>
                    <Answer 
                    onChangeAnswer = {this.onChangeAnswer}
                    answer = {this.state.domino.quizes[0].dominoAnswer}
                    />
                </div>
            
            </div>
        )
    }
}

