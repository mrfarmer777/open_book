import React from 'react'


//Creating an HOC that takes in a component and gives it the super power to only show it to people if they're logged in.

function Authorize(RenderedComponent, props){                  //take in any component
    return class extends React.Component{               //Return a new class of component that...
        componentDidMount(){
            if(localStorage.getItem('jwtToken') &&  this.props.location.pathname=="/login"){    
                this.props.history.push('/home')                                               
            } else if(!localStorage.getItem('jwtToken') && this.props.location.pathname !=="/login"){
                this.props.history.push("/login")      
            } else {
                
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