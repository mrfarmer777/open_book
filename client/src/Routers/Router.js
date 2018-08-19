import React from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import HomeContainer from '../containers/HomeContainer'
import BookshelfContainer from '../containers/BookshelfContainer'
import StatsContainer from '../containers/StatsContainer'



const Home = () => (
    <div>
      <HomeContainer/>
    </div>
)


const Stats = () => (
  <div>
      <h2>Stats</h2>
      <StatsContainer/>
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
        <nav class="navbar navbar-default">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" >Dog Ears</a>
            </div>
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul class="nav navbar-nav">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/stats">Stats</Link></li>
                    <li><Link to="/bookshelf">Bookshelf</Link></li>
                </ul>
            </div>
            
        </nav>
        
        
        
        <hr/>
        
        <Route exact path="/" component={Home}/>
        <Route exact path="/stats" component={Stats}/>
        <Route exact path="/bookshelf" component={Bookshelf}/>
        </div>
    </Router>
)

export default MrRouter