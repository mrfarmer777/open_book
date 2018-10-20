import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Jumbotron } from 'react-bootstrap'
import SignInInput from "../components/SignInInput.js"


class SplashContainer extends Component{
    componentDidMount(){
        console.log('this was called');
        fetch("http://flatiron-2-mrfarmer7771.c9users.io:8080/welcome")
          .then((res)=>res.json())
          .then((json)=>{
            console.log(json);
        });
     }
    
    render (){
        return(
            <div>
                <Jumbotron>
                    <h1>Dog Ears</h1>
                    <p>Read like you mean it.</p>
                </Jumbotron>
                <div>
                    <SignInInput/>
                </div>
            </div>
            )
    }
}

export default withRouter(SplashContainer)

