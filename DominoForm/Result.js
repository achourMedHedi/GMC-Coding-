import React from 'react'
import  DominoImage  from './DominoImage';
import {Button,ExpansionPanel} from 'react-md'

const Result = (props) => {
    return (
        <div>

        <ExpansionPanel 
        expanded = {true} 
        label={`Previous`}
        footer={null}
        >
                <table>
                        <tbody>
                        <tr>
                        <h3><u><i>Question Dominos : </i></u></h3> <br/>                        
                        {props.dominoArray.map((el ,i) => {
                               return (
                                <span>
                                <td >
                                
                                    <div style={{"margin" : "0 -3px -3px -3px" }}><DominoImage number={el.topHalf} /></div>
                                    <div style={{"margin" : "0 -3px -3px -3px"}}><DominoImage number={el.bottomHalf} /></div>
                                </td>
                                {el.break && <div style={{"margin" : "0 -3px -3px -3px"}} ></div>}
                                
                                </span>
                               )
                        })}
                        </tr>
                        <tr>
                        <td>
                            <h3><u><i>Answer :</i></u></h3> <br/>
                            <div style={{"margin" : "0 -3px -3px -3px" }}><DominoImage number={props.answer.topHalf} /></div>
                            <div style={{"margin" : "0 -3px -3px -3px"}}><DominoImage number={props.answer.bottomHalf} /></div>
                        </td>
            </tr>
                        </tbody>
                </table>
                
        </ExpansionPanel>
            

        </div>
    )
}
export default Result