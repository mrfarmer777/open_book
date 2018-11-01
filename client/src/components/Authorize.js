import React from 'react'


//Creating an HOC that takes in a component and gives it the super power to only show it to people if they're logged in.

function Authorize(RenderedComponent, props){                  //take in any component
    return class extends React.Component{               //Return a new class of component that...
        componentDidMount(){
            if(localStorage.getItem('jwtToken')){       //Can check if you're logged in
                                                        //If you are...no biggie, continue
            } else {
                this.props.history.push("/login")       //if not, push you to login, and write it to history
            }
        }
        render(){
            return(
                <RenderedComponent {...this.props}/>                    //Return whatever the original component was
                )
        }
    }
}


export default Authorize