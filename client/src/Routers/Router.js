import React from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import HomeContainer from '../containers/HomeContainer'
import BookshelfContainer from '../containers/BookshelfContainer'


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
  
const Bookshelf = () => (
     <div>
        <h2>Bookshelf Container</h2>
        <BookshelfContainer/>
     </div>
     
     )
  
const MrRouter = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/stats">Stats</Link></li>
                <li><Link to="/bookshelf">Bookshelf</Link></li>
            </ul>
        
        
        <hr/>
        
        <Route exact path="/" component={Home}/>
        <Route exact path="/stats" component={Stats}/>
        <Route exact path="/bookshelf" component={Bookshelf}/>
        </div>
    </Router>
)

export default MrRouter