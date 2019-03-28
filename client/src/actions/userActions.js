//This function logs in a user when provided with the correct params from the signin input form

export function loginUser(loginParams){
    return (dispatch) => {
        //Tell the state that we're starting the request...
        dispatch({type: 'BEGIN_LOGIN_REQUEST', payload: {email: loginParams.email, password: loginParams.password} });
        
        //Set up the login request package
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
              console.log(user);
              dispatch({type: "COMPLETE_USER_LOGIN", payload: user})
              });
    }
    
}


export function logoutUser(){
    localStorage.removeItem('jwtToken');
}