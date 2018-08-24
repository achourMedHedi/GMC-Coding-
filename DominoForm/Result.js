import React from 'react'
import  DominoImage  from './DominoImage';

const Result = (props) => {
    return (
        // <DominoImage number={el.topHalf} />
        //             <DominoImage number={el.bottomHalf} />

        // <td>
        //                     <DominoImage number={el.topHalf} />
        //                     </td>
        //                     <td>
        //                     <DominoImage number={el.bottomHalf} />
        //                     </td>
        <div>
                <div> 
                    <table>
                        <tbody>
                        <tr>
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
                        </tbody>
                    </table>
                
                </div>
            

            <div>result : 1:<DominoImage number={props.answer.topHalf} /> 2:<DominoImage number={props.answer.bottomHalf} />  </div>
        </div>
    )
}
export default Result