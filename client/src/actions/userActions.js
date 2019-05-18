//This function logs in a user when provided with the correct params from the signin input form
export function loginUser(loginParams){
    return (dispatch) => {
        //Tell the state that we're starting the request...
        dispatch({type: 'BEGIN_LOGIN_REQUEST', payload: {email: loginParams.email, password: loginParams.password} });
        
        //Set up the login request body by stringifying the login params json object
        const body=JSON.stringify(loginParams);
        
        //Send login post to rails auth controller
        return fetch("http://flatiron-2-mrfarmer7771.c9users.io:8080/login",{
            method:'post',
            body: body,
            //GOTCHA - these headers need to be included to allow my custom json to pass to the back end. Otherwise, it scrubs these off.
            headers: {
                "Accept":"application/json",
                "Content-Type": "application/json"
            }
        })
          .then((res)=>res.json())
          .then((res)=>{
                //Store the jwt token in the localStorage if it is not undefined
                if(res.jwt){
                    localStorage.setItem("jwtToken",res.jwt);
                }
                return res.user
          })
          .then((user)=>{
              
              dispatch({type: "COMPLETE_USER_LOGIN", payload: user});
             
              });
    }
    
}


export function logoutUser(){
    localStorage.removeItem('jwtToken');
}

//Action for accepting an invitation to join a course, takes in a user sectionas an argument
export function acceptInvite(usid){
    return (dispatch) => {
        dispatch({type: "BEGIN_USER_REQUEST", payload: {request_type: "accept invite", id: usid}});     //tell state to wait up while we perform the acceptance of the invitation.

        const authHeader = JSON.stringify("Bearer "+localStorage.getItem("jwtToken"));    //Build the auth header and stringify for use in the fetch (make it happen)
    
        const body=JSON.stringify({us: {approved: "true"}});     //build the request body for use in the fetch, true because we're accepting the invitation
        
        //Send login post to rails auth controller
        return fetch(`http://flatiron-2-mrfarmer7771.c9users.io/user_sections/${usid}`,{
            method:'PATCH',
            body: body,
            //GOTCHA - these headers need to be included to allow my custom json to pass to the back end. Otherwise, it scrubs these off.
            headers: {
                "Accept":"application/json",
                "Content-type": "application/json",
                "Authorization": authHeader
            }
        }).then((res)=>res.json())
        .then((inv)=>{
            dispatch({type: "REMOVE_SECTION_INVITE", payload: inv});
        });
        
    };
    
    
}