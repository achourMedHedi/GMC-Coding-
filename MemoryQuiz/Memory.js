import React from 'react' 
import {Button } from 'react-md'
export default class Memory extends React.Component {
    constructor(props) {
        super(props) 
        this.state={
            memory : [
                {img : "https://www.mon-qi.com/test-memoire/memory2/img/3/D.png" , token :1 ,flip : false},
                {img : "https://www.mon-qi.com/test-memoire/memory2/img/3/D.png" , token :1 ,flip : false},
                {img : "https://www.mon-qi.com/test-memoire/memory2/img/3/4.png" , token :2 ,flip : false},
                {img : "https://www.mon-qi.com/test-memoire/memory2/img/3/4.png" , token :2 ,flip : false},
            ],
            answer : [] ,
            clicks : 0
            // result : []
            

        }
        this.setState ({
            memory : this.shuffle(this.state.memory) 
        })
    }
    
     shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }
    
    Answer = (token , index) => {
        this.setState({
            answer : [...this.state.answer ,  token  ]
        }) , this.flip(index)
    }



    flip = (index) => {
        let q = this.state.memory
        // (this.state.answer[1]  && this.state.answer[1] === this.state.answer[0] )? 

        if ((this.state.answer[1] && this.state.answer[1]===this.state.answer[0] ) ) {
            q[index] =  {...q[index] , flip : true }
            return this.setState({
                memory : q
            }) , console.log("1")
            
        }
        else if(!this.state.answer[0])
        {
            q[index] = {...q[index] , flip : true } 
            return this.setState({
                memory : q
            }) , console.log("2")
        } 
        // else if (this.state.answer[1]!==this.state.answer[0] ) 
        // {
        //     q[index] = {...q[index] , flip : true }             
            // return setTimeout(() => {
            //     q[index] = {...q[index] , flip : false } 
            //     this.setState({
            //         memory : q
            //     })
            // }, 2000);
             
        // }
        // q[index] = {...q[index] , flip : true } 
        
        else if (this.state.answer[1]===this.state.answer[0] )
        return setTimeout(() => {
            q[index] = {...q[index] , flip : false } 
            this.setState({
                memory : q
            }) , console.log("3") 
        }, 2000);
        // return this.setState({
        //     memory : q
        // })
    }

    trueUpdateMemory = (index) => {
        let q = this.state.memory
        q[index] = {...q[index] , flip : true}
        return this.setState({
            memory : q
        })
    }
    falseUpdateMemory = (index) => {
        let q = this.state.memory
        return setTimeout(() => {
            q[index] = {...q[index] , flip : false}
            this.setState({
            memory : q
        })
        }, 2000);
    }

    Done = () => {
        let q = this.state.memory.filter(el => el.flip == false)
        let click = this.state.clicks 
        const idealeClicks = this.state.memory.length / 2
        let clickPer = (idealeClicks * 100) / click

        console.log("clicks = " , this.state.clicks)
        console.log("lengthMemory = " ,this.state.memory.length / 2)
        console.log("click per = " , clickPer)
        console.log("q === ",q) 
        if (q.length === 0) {
            return <div>end of test with {Math.floor(clickPer)}% clicks </div>
        }
        else return true
    }



    render () { 
        return (
            <div>
                {this.state.memory.map(
                    (el , index) => 
                    {
                        return <span>
                            {(index === this.state.memory.length/2) && <br/>}                        
                            {el.flip ? 
                                <img key={index} src={el.img}/>
                                :
                                <img key={index} src="https://www.mon-qi.com/test-memoire/memory2/img/face.png" onClick={() => this.Answer(el.token , index)}/>
                            }
                        </span>
                    }
                ) 
            }
                {
                this.state.answer[0] && 
                this.state.answer[1] &&
                this.state.answer[0] === this.state.answer[1] &&
                 this.state.memory.map((el , index) => {
                    if (this.state.answer[0] === el.token) {
                        return this.trueUpdateMemory(index)
                    }
                }) &&
                this.setState({answer:[] , clicks : this.state.clicks + 1}) 
                }
                {
                    this.state.answer[0] && 
                    this.state.answer[1] &&
                    this.state.answer[0] !== this.state.answer[1] &&
                    this.state.memory.map((el , index) => {
                        if (this.state.answer[0] === el.token) {
                            return this.falseUpdateMemory(index)
                        }
                    }) &&
                    this.setState({answer:[] , clicks : this.state.clicks + 1}) 
                }

                {
                    this.Done()
                }
            </div>

        )
    }
}