import React from 'react'


//Creating an HOC that takes in a component and gives it the super power to only show it to people if they're logged in.

function Authorize(RenderedComponent){                  //take in any component
    return class extends React.Component{               //Return a new class of component that...
        componentDidMount(){
            if(localStorage.getItem('jwtToken') &&  this.props.location.pathname==="/login"){   
                console.log("User is logged in and trying to access the login page. See?:"+ this.props.location.pathname)
                this.props.history.push('/home')
            } else if(!localStorage.getItem('jwtToken') && this.props.location.pathname !=="/login"){
                console.log("A re-render happened, but a different way")
                this.props.history.push("/login")      
            } else {
                console.log("hitting here, dammit")
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