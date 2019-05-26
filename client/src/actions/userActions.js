/*

REMEMBER: Actions are js functions that do several things:
1.) They tell the reducer to manage the state, which tells React to manage the UI.
2.) They also perform the calls and handle responses to/from the server.


I would say that actions are the literal messengers between the front and back ends. The reducers essentially live on the front end and ensure data that is returned is in the proper place. They're like accountants perhaps.

*/


//This function logs in a user when provided with the correct params from the signin input form
export function loginUser(loginParams){
    return (dispatch) => {
        dispatch({type: 'BEGIN_LOGIN_REQUEST', payload: {email: loginParams.email, password: loginParams.password} });         //Tell the state that we're starting the request...
        const body=JSON.stringify(loginParams);        //Set up the login request body by stringifying the login params json object

        return fetch("http://flatiron-2-mrfarmer7771.c9users.io/login",{         //Send login post to rails auth controller
            method:'post',
            body: body,
            //GOTCHA - these headers need to be included to allow my custom json to pass to the back end. Otherwise, it scrubs these off.
            headers: {
                "Accept":"application/json",
                "Content-Type": "application/json"
            }
        })
          .then((res)=>res.json())  //jsonify the response
          .then((res)=>{
                
                if(res.jwt){
                    localStorage.setItem("jwtToken",res.jwt);   //Store the jwt token in the localStorage if it is not undefined
                }
                return res.user
          })
          .then((user)=>{
              
              dispatch({type: "COMPLETE_USER_LOGIN", payload: user});   //update the state with the user data obtained
             
          });
    }
    
}


export function logoutUser(){
    localStorage.removeItem('jwtToken');    //log the user out by removing the jwtToken from localStorage
}

//Action for accepting an invitation to join a course, takes in a user sectionas an argument
export function acceptInvite(usid){
    return (dispatch) => {
        dispatch({type: "BEGIN_USER_REQUEST", payload: {request_type: "accept invite", id: usid}});     //tell state to wait up while we perform the acceptance of the invitation.

        const authHeader = JSON.stringify("Bearer "+localStorage.getItem("jwtToken"));    //Build the auth header and stringify for use in the fetch (make it happen)
    
        const body=JSON.stringify({us: {approved: "true"}});     //build the request body for use in the fetch, true because we're accepting the invitation
        
        
        return fetch(`http://flatiron-2-mrfarmer7771.c9users.io/user_sections/${usid}`,{ //Send login post to rails auth controller
            method:'PATCH', //GOTCHA - PATCH requests must be capitalized, maybe always do that...
            body: body,
            //GOTCHA - these headers need to be included to allow my custom json to pass to the back end. Otherwise, it scrubs these off.
            headers: {
                "Accept":"application/json",
                "Content-type": "application/json",
                "Authorization": authHeader
            }
        }).then((res)=>res.json())  //jsonify the response
        .then((inv)=>{
            dispatch({type: "REMOVE_SECTION_INVITE", payload: inv}); //remove the section invite from the state
        });
        
    };
    
    
}

export function declineInvite(usid){
    return (dispatch) => {
        dispatch({type: "BEGIN_USER_REQUEST", payload: {request_type: "decline invite", id: usid}});     //tell the state we're about to update...

        const authHeader = JSON.stringify("Bearer "+localStorage.getItem("jwtToken"));    //Build the auth header and stringify for use in the fetch (make it happen)

        return fetch(`http://flatiron-2-mrfarmer7771.c9users.io/user_sections/${usid}`,{ //Send login post to rails auth controller
            method:'DELETE', //GOTCHA - PATCH requests must be capitalized, maybe always do that...
            //GOTCHA - these headers need to be included to allow my custom json to pass to the back end. Otherwise, it scrubs these off.
            headers: {
                "Accept":"application/json",
                "Content-type": "application/json",
                "Authorization": authHeader
            }
        }).then((res)=>res.json())  //jsonify the response
        .then((inv)=>{
            dispatch({type: "REMOVE_SECTION_INVITE", payload: inv}); //remove the section invite from the state
        });
        
    };
    
    
}