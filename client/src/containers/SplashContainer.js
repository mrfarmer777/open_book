import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Jumbotron } from 'react-bootstrap'
import SignInInput from "../components/SignInInput.js"
import Authorize from "../components/Authorize"

class SplashContainer extends Component{

    
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

