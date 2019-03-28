import React, {Component} from 'react';

//Using AuthService component as a prototype for this HOC
import AuthService from './AuthService';



export default function withAuth(AuthComponent){
    
    //Initialize a new AuthService component with usual base url passed to it
    const Auth = new AuthService("http://flatiron-2-mrfarmer7771.c9users.io");
        
    //Returns a new HOC that wraps the passed-in component
    return class AuthWrapped extends Component {
        constructor(){
            super();
            this.state = {
                user: null
            };
        }
        
        authLogout(){
            Auth.logout()
            this.props.history.replace('/login')
        }
        
        componentWillMount(){
            
            //if the Auth service finds the user isn't logged in, send them to login page
            if(!Auth.loggedIn()){
                this.props.history.replace('/login')
            } else {
                
                try{
                    //try to get the user id number by calling getProfile
                    const profile = Auth.getProfile()
                    this.setState({
                        user: profile
                    })
                }
                
                //if there's an error, the user probably didn't log in correctly, send them back to login 
                catch(err){
                    Auth.logout()
                    this.props.history.replace('/login')
                }
            }
        }
        
        render(){
            //If we have a valid user in the state, everything's good.
            if(this.state.user){
                return (
                    <AuthComponent history={this.props.history} user={this.state.user} logout={this.authLogout}/>
                )
            } else {
                return null
            }
        }
        
    };
        
        
    
}