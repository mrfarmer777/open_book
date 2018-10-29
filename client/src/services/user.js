//This function logs in a user when provided with the correct params from the signin input form

export function loginUser(loginParams){
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
          .then((res)=>res.json());
}


export function logoutUser(){
    localStorage.removeItem('jwtToken')
}