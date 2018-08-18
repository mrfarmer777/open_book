import React from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import HomeContainer from '../containers/HomeContainer'


const Home = () => (
    <div>
      <h2>HOME</h2>
      <HomeContainer/>
    </div>
)


const Stats = () => (
  <div>
      <h2>Stats</h2>
    </div>
  
  )
  
const MrRouter = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/stats">Stats</Link></li>
            </ul>
        
        
        <hr/>
        
        <Route exact path="/" component={Home}/>
        <Route exact path="/stats" component={Stats}/>
        </div>
    </Router>
)

export default MrRouter