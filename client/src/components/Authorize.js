import React from 'react'


//Creating an HOC that takes in a component and gives it the super power to only show it to people if they're logged in.

function Authorize(RenderedComponent, props){                  //take in any component
    return class extends React.Component{               //Return a new class of component that...
        componentDidMount(){
            console.log("MOUNTED")
            if(localStorage.getItem('jwtToken') &&  this.props.location.pathname==="/login"){   
                console.log("User is logged in and trying to access the login page. See?:"+ this.props.location.pathname)
                this.props.history.push('/home')
            } else if(!localStorage.getItem('jwtToken') && this.props.location.pathname !=="/login"){
                console.log("Not logged in, attempting to get something besides splash screen")
                this.props.history.push("/login")      
            } else {
                console.log("Not logged in, attempting to get /login")
            }
        }
        render(){
            return(
                <RenderedComponent {...this.props} {...props}/>                    //Return whatever the original component was
                )
        }
    }
}


export default Authorize