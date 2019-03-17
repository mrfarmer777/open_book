import React from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'

//Returns an HOC that takes in a component and gives it the super power to only show it to people if they're logged in.
function Authorize(RenderedComponent){                  //take in any component and its props
    return class extends React.Component{                      //Return a new class of component that...
        
        
        componentDidMount(){
            
            if(localStorage.getItem('jwtToken') &&  this.props.location.pathname==="/login"){   
                //User is logged in and trying to see the login page
                console.log("User is logged in and trying to access the login page. See?:"+ this.props.location.pathname)
                
                //Send them to home path
                this.props.history.push('/home')
                
            } else if(!localStorage.getItem('jwtToken') && this.props.location.pathname !=="/login"){
                //User isn't logged in but they're trying to visit something other than login
                console.log("Not logged in, attempting to get something besides splash screen")
                
                //Send them to login
                this.props.history.push("/login")      
            } else {
                //User is 1) attempting to not logged in and attempting to get login or 2) logged in and attempting anything else
                //Let them go there
                console.log("Proceed!")
            }
        }
        
        render() {
            if(localStorage.getItem('jwtToken') &&  this.props.location.pathname==="/login"){   
            //User is logged in and trying to see the login page
            console.log("User is logged in and trying to access the login page. See?:"+ this.props.location.pathname)
            
            //Send them to home path
            return (
                <Redirect to="/home"/>
                )
                
            } else if(!localStorage.getItem('jwtToken') && this.props.location.pathname !=="/login"){
                //User isn't logged in but they're trying to visit something other than login
                console.log("Not logged in, attempting to get something besides splash screen")
                
                //Send them to login
                return (
                    <Redirect to="/login"/>
                    )      
            } else {
                //User is 1) attempting to not logged in and attempting to get login or 2) logged in and attempting anything else
                //Let them go there
                console.log("Proceed!")
                return(
                    <RenderedComponent {...this.props}/>                    //Return whatever the original component was with its props handed down
                )
            }
                
          
        }
    }

}



const mapStateToProps=state=>{
    return{
        authenticated: state.user.authenticated
    }
}
    





export default Authorize