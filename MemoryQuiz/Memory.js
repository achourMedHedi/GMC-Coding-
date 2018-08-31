import React from 'react' 
import {Button } from 'react-md'
import {Paper} from 'react-md'


const img1 = require('../DominoForm/dominos/1.png')
const img2 = require('../DominoForm/dominos/2.png')
const img3 = require('../DominoForm/dominos/3.png')
const img4 = require('../DominoForm/dominos/4.png')
const img5 = require('../DominoForm/dominos/5.png')
const img6 = require('../DominoForm/dominos/6.png')
const img0 = require('../DominoForm/dominos/0.png')


export default class Memory extends React.Component {
    constructor(props) {
        super(props) 
        this.state={
            images : [img1 , img2 , img3 , img4 , img5 , img6 ,img0 , img1] , 
            memoryArray : { 
                "_id" : "" , 
                "nbImg" : 4 ,
                "type" : "" , 
                "category" : "" ,
                "__v" : 0
            }  ,
            answer : [] ,
            clicks : 0,
            blockUser : false , 
            shuffle : false
        }
        
    }


    

    componentWillMount = () => {

        //initialize quizes array with empty objects
        this.initializeArray()
        
    }

    componentDidMount = () => {
        // initialize quizes array with (id , token , img , flip)
        this.state.memoryArray.quizes[0].img === undefined && this.addImg() 
        // !this.state.shuffle && this.shuffleImg()
    }
    componentWillUpdate = () => {
        //block user when he get a false answer =====>>>  image 1 !== image 2
        this.state.answer.length === 1 && this.setState({blockUser:true})

        //shuffle images 
        !this.state.shuffle && this.shuffleImg()
        
    }


    //shuffle images 
    shuffleImg = () => {
        return this.setState({
            memoryArray : {...this.state.memoryArray , "quizes" : this.shuffle(this.state.memoryArray.quizes)} , 
            shuffle : true
        })
    }


    //initialize quizes array with empty objects
    initializeArray = () => {
        let array = []
        for (let index = 0; index < this.state.memoryArray.nbImg; index++) {
            // console.log("ena lena");
            array.push({})
        }
        // console.log({array});
        return this.setState({
            memoryArray : {...this.state.memoryArray , "quizes" : array}
        })

            
        }
    


    //initializeArray quizes array with (token , id , img , flip )
    addImg= () => {
        let token = -1     
        let indexImg = -1   
        return this.setState({
            memoryArray : {...this.state.memoryArray , 
                "quizes" : this.state.memoryArray.quizes.map (
                    (el , i) => 
                        {
                            if (token < (this.state.memoryArray.quizes.length / 2) - 1) {
                                token = token + 1 
                                indexImg = indexImg + 1 
                            }
                            else (
                                token = 0 ,
                                indexImg = 0
                            )



                            return (
                            {...el , img : this.state.images[indexImg] , id : i , token : token , flip : false}
                            ) 
                    }
                )}
        })
    }
   
    //shuffle function
    shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }
    
    //add images to an array called answers 
    //so we can compare the 2 images flipped
    Answer = (token , index) => {
        this.setState({
            answer : [...this.state.answer ,  {answer : token , index : index}  ]
        }) , this.flip(index)
    }


    // flip the image when user click on it     
    flip = (index) => {
        let q = [...this.state.memoryArray.quizes]
        q[index] = {...q[index] , flip : true } 
        
        return this.setState({
            memoryArray : {...this.state.memoryArray , "quizes" : q}
        })
        
    }


    //when image 1 === image 2 , images will stay flipped  
    trueAnswer = () => {
        return this.setState({
            answer : [] ,
            clicks : this.state.clicks + 1 , 
            blockUser : false
        }) , console.log('true answer')
    }

    // if image 1 !== image 2 after 1 seconds  images will flip to false 
    falseAnswer = () => {
        let q = [...this.state.memoryArray.quizes]
        let answerOne  = this.state.answer[0].index
        let answerTwo  = this.state.answer[1].index
        q[answerOne] = {...q[answerOne] , flip : false}
        q[answerTwo] = {...q[answerTwo] , flip : false}
        return setTimeout(() => {
            this.setState({
                answer : [] ,
                blockUser : false ,
                clicks : this.state.clicks + 1 , 
                memoryArray : {...this.state.memoryArray , "quizes" : q}
            })
        }, 1000);
    }

    // when user finish , this will calculate  the score and percentage  
    Done = () => {
        let q = this.state.memoryArray.quizes.filter(el => el.flip == false)
        let click = this.state.clicks 
        const idealeClicks = this.state.memoryArray.quizes.length / 2
        let clickPer = (idealeClicks * 100) / click

        console.log("clicks = " , this.state.clicks)
        console.log("lengthMemory = " ,this.state.memoryArray.quizes.length / 2)
        console.log("click per = " , clickPer)
        console.log("q === ",q) 
        if (q.length === 0) {
            return <div>end of test with {Math.floor(clickPer)}% clicks </div>
        }
        else return true
    }

    // display the test images 
    displayImg = () => {
        // if images number is 4 or 8 
        if (this.state.memoryArray.nbImg === 8 || this.state.memoryArray.nbImg === 4) {
            return this.state.memoryArray.quizes.map(
                (el , index) => 
                    {
                        return <span>
                            {(index === this.state.memoryArray.quizes.length/2) && <br/>}                        
                            {el.flip ? 
                                <img key={index} src={el.img}/>
                                :
                                (
                                    this.state.blockUser ?
                                    <img key={index} 
                                    src="https://www.mon-qi.com/test-memoire/memory2/img/face.png" 
                                    />
                                    :
                                    <img key={index} 
                                    src="https://www.mon-qi.com/test-memoire/memory2/img/face.png" 
                                    onClick={() => this.Answer(el.token , index)}
                                    />
                                )
                            }
                        </span>
                    }
                ) 
        }
        // if images number is 16
        else if (this.state.memoryArray.nbImg === 16) {
            return this.state.memoryArray.quizes.map(
                (el , index) => 
                    {
                        return <span>
                            {(index%4 === 0) && <br/>}                        
                            {el.flip ? 
                                <img key={index} src={el.img}/>
                                :
                                (
                                    this.state.blockUser ?
                                    <img key={index} 
                                    src="https://www.mon-qi.com/test-memoire/memory2/img/face.png" 
                                    />
                                    :
                                    <img key={index} 
                                    src="https://www.mon-qi.com/test-memoire/memory2/img/face.png" 
                                    onClick={() => this.Answer(el.token , index)}
                                    />
                                )
                            }
                        </span>
                    }
                ) 
        }
        // if images number is 36
        else if (this.state.memoryArray.nbImg === 36) {
            return this.state.memoryArray.quizes.map(
                (el , index) => 
                    {
                        return <span>
                            {(index%6 === 0) && <br/>}                        
                            {el.flip ? 
                                <img key={index} src={el.img}/>
                                :
                                (
                                    this.state.blockUser ?
                                    <img key={index} 
                                    src="https://www.mon-qi.com/test-memoire/memory2/img/face.png" 
                                    />
                                    :
                                    <img key={index} 
                                    src="https://www.mon-qi.com/test-memoire/memory2/img/face.png" 
                                    onClick={() => this.Answer(el.token , index)}
                                    />
                                )
                            }
                        </span>
                    }
                ) 
        }
        // else display all images in same line      
            else {
                return this.state.memoryArray.quizes.map(
                    (el , index) => 
                        {
                            return <span>
                                {el.flip ? 
                                    <img key={index} src={el.img}/>
                                    :
                                    (
                                        this.state.blockUser ?
                                        <img key={index} 
                                        src="https://www.mon-qi.com/test-memoire/memory2/img/face.png" 
                                        />
                                        :
                                        <img key={index} 
                                        src="https://www.mon-qi.com/test-memoire/memory2/img/face.png" 
                                        onClick={() => this.Answer(el.token , index)}
                                        />
                                    )
                                }
                            </span>
                        }
                    ) 
            }
    }



    render () { 
        return (
            <div>
            
                <Paper 
                style={{margin : '100px' }}
                zDepth = {1}
                >
                <center>
                Click on the cards to associate them in pairs of 2. <br/>
                        {
                            // display images 
                            this.state.memoryArray.quizes && this.displayImg()
                        }

                        {
                            //if it's a true answer
                            this.state.answer[0] && 
                            this.state.answer[1] && this.state.answer[0].answer === this.state.answer[1].answer  &&
                            this.trueAnswer() 
                        }
                        {
                            //if it's a false answer
                            this.state.answer[0] && 
                            this.state.answer[1] && this.state.answer[0].answer !== this.state.answer[1].answer  && 
                            this.falseAnswer() 
                        }
                        {
                            //end of question
                            this.Done()
                        }
                       
                    </center>
                </Paper>




                <b />

                
            </div>

        )
    }
}
