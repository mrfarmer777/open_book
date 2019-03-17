import decode from 'jwt-decode';
export default class AuthService {
    
    //Sets up basic variables to make things dry
    constructor(domain){
        this.domain = domain || 'http://flatiron-2-mrfarmer7771.c9users.io:8080'
        this.fetch = this.fetch.bind(this) //Handling binding so fetch, login, and whatnot can be called on this class no matter where it is implemented
        this.login = this.login.bind(this)
        this.getProfile=this.getProfile.bind(this)
    }
    
    
    login(loginParams){
        //Gets the token from the rails API using a fetch
        //Makes a post request to the /login end point using email and password provided as credentials
        return this.fetch(`${this.domain}/login`,{
            method: "POST",
            body: JSON.stringify(loginParams)
        }).then(res=>{
            this.setToken (res.token)//This might need to be 'res.jwt'
            return Promise.resolve(res);
        })
    }
    
    loggedIn(){
        const token = this.getToken() //Calls helper method below to get the token from local storage
        return !!token && !this.isTokenExpired(token) //return true if token is truthy (present) and is NOT expired (using helper method below)
    }
    
    isTokenExpired(token){
        //checks to see if token is expired, may be source of issues in future
        try {
            const decoded = decode(token);
            if (decoded.exp < Date.now() /1000){
                return true;
            }
            else 
                return false;
        }
        catch (err){
            return false;
        }
    }
    
    setToken(jwtToken){
        //Saves the user token to localStorage
        localStorage.setItem('jwtToken',jwtToken)
    }
    
    getToken(){
        //Gets token from storage
        return localStorage.getItem('jwtToken')
    }
    
    logout(){
        //Clears the jwtToken to logout
        localStorage.removeItem('jwtToken')
    }
    
    getProfile(){
        //return decoded token
        return decode(this.getToken());
    }
    
    fetch(url, options){
        //actually performs the pre-formatted API calls for us
        const headers = {
            "Accept":"application/json",
            "Content-Type": "application/json"
        }
        
        //Setting authorization header if the user is logged in
        //Authorization has "Bearer" appended to the front of it
        if(this.loggedIn()){
            headers["Authorization"] = "Bearer " + this.getToken()
        }
        
        //Hand back the result of performing the fetch function and promises
        return fetch(url, {
            headers,
            ...options
        })
            .then(this._checkStatus)
            .then(response => response.json())
    }
    

    _checkStatus(response){
        //exposes an error in case response status is not a success
        if(response.status >= 200 && response.status < 300){
            //Successful responses
            return response
        } else {
            var error = new Error(response.statusText)
            error.response = response
            throw error
        }
    }
}