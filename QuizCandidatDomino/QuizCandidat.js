import React from 'react'
// import {Paper} from 'react-md'
import Timer  from './Timer'
import Steps, { Step } from 'rc-steps'
// import {connect} from "react-redux"
// import { Link } from 'react-router-dom'
// import * as QuizActionCreators from '../../actions/quiz'
import './css.scss'
import './QuizCandidat.css'
import 'rc-steps/assets/index.css'
import { DominoImage } from './DominoImage';
// import q from './dominos/q.png'


export class QuizCandidat extends React.Component {

    constructor(props) {
        super(props)
        this.state = ({
            currentQuestion : 0 ,
            categoryNumber : -1 , 
            currentCategory : "",
            // currentUser: window.localStorage.getItem('Current'),
            // currentApplication: this.props.match.params.id,
            // isDone: false,
            // isSaved: null,
            // resultSaved: null,
            line1 : -1 , 
            line2 : -1 ,
            changeBackground1 : 0 ,
            changeBackground2 : 0 ,
            answer : ["","","","","","",""] ,
            Questions : [] ,
            result : {"quizAnswer":[]} ,
            time : 1000000 , //time from redux 
            API : [//from resux
                {
                    "_id": "AAymouch",
                    "quizes": [
                        {
                            "_id": "5b6822f03412f64c55554142",
                            "dominoArray": [
                                {
                                    topHalf : 2 , 
                                    bottomHalf : 1 , 
                                    break : false
                                },
                                {
                                    topHalf : 6 , 
                                    bottomHalf : 0 , 
                                    break : false
                                },
                                {
                                    topHalf : -1 , 
                                    bottomHalf : -1 , 
                                    break : false
                                },
                                {
                                    topHalf : 1 , 
                                    bottomHalf : 1 , 
                                    break : true
                                },
                                {
                                    topHalf : 1 , 
                                    bottomHalf : 1 , 
                                    break : false
                                },
                                {
                                    topHalf : 2 , 
                                    bottomHalf : 5 , 
                                    break : false
                                },
                                {
                                    topHalf : 1 , 
                                    bottomHalf : 1 , 
                                    break : false
                                },
                                {
                                    topHalf : 4 , 
                                    bottomHalf : 6 , 
                                    break : false
                                }
                            ],
                            "type": "khalkhoul",
                            "category": "AAymouch",
                            "__v": 0
                        }
                    ]
                },
                {
                    "_id": "AAAAAymouch",
                    "quizes": [
                        {
                            "_id": "5b69cbd99f8cc8231c8a509e",
                            "dominoArray": [
                                {
                                    topHalf : 2 , 
                                    bottomHalf : 6 , 
                                    break : false
                                }
                            ],
                            "type": "khalkhoul",
                            "category": "AAAAAymouch",
                            "__v": 0
                        },
                        {
                            "_id": "5b69cc349f8cc8231c8a50a0",
                            "dominoArray": [
                                {
                                    topHalf : 2 , 
                                    bottomHalf : 6 , 
                                    break : false
                                }
                            ],
                            "type": "khalkhoul",
                            "category": "AAAAAymouch",
                            "__v": 0
                        },
                    ]
                },
                {
                    "_id": "Aymouch",
                    "quizes": [
                        
                        {
                            "_id": "5b69cbb39f8cc8231c8a508d",
                            "dominoArray": [
                                {
                                    topHalf : 2 , 
                                    bottomHalf : 6 , 
                                    break : false
                                }
                            ],
                            "type": "khalkhoul",
                            "category": "Aymouch",
                            "__v": 0
                        },
                        {
                            "_id": "5b68195bc452f639800db0da",
                            "dominoArray": [
                                {
                                    topHalf : 2 , 
                                    bottomHalf : 6 , 
                                    break : false
                                }
                            ],
                            "type": "khalkhoul",
                            "category": "Aymouch",
                            "__v": 0
                        }
                    ]
                },
                {
                "_id": "Ayzzzzz",
                "quizes": [
                    
                    {
                        "_id": "5b69cbb39f8cc8231c8a508d",
                        "dominoArray": [
                            {
                                topHalf : 2 , 
                                bottomHalf : 6 , 
                                break : false
                            }
                        ],
                        "type": "khalkhoul",
                        "category": "Ayzzzz",
                        "__v": 0
                    },
                    {
                        "_id": "5b68195bc452f639800db0da",
                        "dominoArray": [
                            {
                                topHalf : 2 , 
                                bottomHalf : 6 , 
                                break : false
                            }
                        ],
                        "type": "khalkhoul",
                        "category": "Ayzzzz",
                        "__v": 0
                    },
                    {
                        "_id": "5b68195bc452f639800db0da",
                        "dominoArray": [
                            {
                                topHalf : 2 , 
                                bottomHalf : 6 , 
                                break : false
                            }
                        ],
                        "type": "khalkhoul",
                        "category": "Ayzzzz",
                        "__v": 0
                    }
                ]
            }
            ]

        })
    }

    componentDidMount = () => {
        this.setState ({
                            Questions : this.state.API.map((el , index) => el.quizes).reduce((res , el) => res.concat(...el) , [] )
                        })
    }

   
    diplayDomino = () => {
        return (
            this.state.Questions[this.state.currentQuestion].dominoArray.map((element , index) => {
                console.log(element.topHalf , element.bottomHalf , element)
                return <span style={{"margin" : "0px"}}>
                    <td style={{"margin" : "0px"}}>
                        <div style={{"margin" : "-1px"}} >{element.topHalf === -1 ? <DominoImage number={this.state.line1} /> : <DominoImage number={element.topHalf } />} </div> 

                        <div style={{"margin" : "-3px -1px 0px -1px"}}>{element.bottomHalf === -1 ? <DominoImage number={this.state.line2} /> : <DominoImage number={element.bottomHalf} /> }</div>  
                    </td> 
                    {element.break && <div style={{"margin" : "-1px"}} ></div>} 
                </span>
            })
        )
    }

   render () { console.log(this.state.Questions)
    return(
        <div
        zDepth={1}
        className="papers__example main"
      >

        <div className="QuestionBlock">
                <div className="Qnumber"><span className="">1</span></div>
                <div className="Qtimer"><span className=""> <Timer /*action={}*/ timestamp={this.state.time} /> </span></div>
                <div className="">{
                    (this.state.currentQuestion < this.state.Questions.length) && 
                    <table style={{"border-spacing" : "0px"}} className="QuestionText">
                    <tbody>
                        <tr>
                        {this.diplayDomino()}
                        </tr>
                    </tbody>
                 </table>
                }
                {
                    (this.state.isSaved && this.state.resultSaved) && (<div>
                        <h2>Your test has been saved!</h2>
                        {/*<Link to={'/profile'}>Go to your profile</Link>*/}
                    </div>
                    )}</div>
        </div>
       
        <span className="AnswerBlock"> 
            line 1 : {this.state.answer.map((el , index) => {return (<span> <button className="line1" id={`line1${index}`} onClick={
                () => {
                    return (
                        document.getElementById(`line1${this.state.changeBackground1}`).classList.remove("line1a") ,                                                
                        document.getElementById(`line1${index}`).classList.add("line1a") ,
                        this.setState({line1 : index , changeBackground1 : index})
                    )
                }
    } ><DominoImage number={index}/></button> </span>)}) }
            <br/>
            line 2 : {this.state.answer.map((el , index) => {return (<span> <button className="line2" id={`line2${index}`} onClick={
                () => {
                    return (
                        document.getElementById(`line2${this.state.changeBackground2}`).classList.remove("line1a") ,                        
                        document.getElementById(`line2${index}`).classList.add("line1a") ,
                        this.setState({line2 : index , changeBackground2 : index})
                    )
                }
    } ><DominoImage number={index}/></button> </span>)}) }
        <div>
            <button onClick={() => {
                return (
                    this.setState({
                        result : {"quizAnswer" : [...this.state.result.quizAnswer , 
                            {
                                questionid:this.state.Questions[this.state.currentQuestion]._id , 
                                topHalf : this.state.line1 ,
                                bottomHalf : this.state.line2 , 
                                // applicationid: this.state.currentApplication,
                                // userid: this.state.currentUser
                             }]
                         } ,
                        currentQuestion: this.state.currentQuestion+1 , 
                        line1 : -1 , 
                        line2 : -1
                    }) , 
                    document.getElementById(`line1${this.state.changeBackground1}`).classList.remove("line1a") ,
                    document.getElementById(`line2${this.state.changeBackground2}`).classList.remove("line1a")                                                                     
                                                                                        
                )
            }}> next question</button>
        </div>
        </span>
        <div className="steps">
        <Steps current={this.state.categoryNumber === -1 ? 0 : this.state.categoryNumber} className="">
            {Object.keys(this.state.API).map((item , i) => (
                <Steps.Step title={this.state.API[item]._id} />
                // console.log(this.state.API[item]._id )
            ))}
        </Steps> 
        </div>
      
      </div>
       
    )
   }
}


export default QuizCandidat