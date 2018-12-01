//This function logs in a user when provided with the correct params from the signin input form

export function loginUser(loginParams){
    return (dispatch) => {
        //Tell the state that we're starting the request...
        dispatch({type: 'BEGIN_LOGIN_REQUEST' });
        
        //Set up the login request package
        const body=JSON.stringify(loginParams);
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
          .then((user)=>{
                //Store the jwt token in the localStorage if it is not undefined
                if(user.jwt){
                    localStorage.setItem("jwtToken",user.jwt);
                }
                return user
          })
          .then((user)=>dispatch({type: "COMPLETE_USER_LOGIN", payload: {email: user, password:""}}));
          this.history.push('/home');
    }
    
}


export function logoutUser(){
    localStorage.removeItem('jwtToken')
}