import React from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import HomeContainer from '../containers/HomeContainer'
import BookshelfContainer from '../containers/BookshelfContainer'
import StatsContainer from '../containers/StatsContainer'
import SplashContainer from '../containers/SplashContainer'
import Authorize from '../components/Authorize'

const Splash=(props)=>(
    <div>
        <SplashContainer {...props}/>
    </div>
)

const AuthHomeContainer = Authorize(HomeContainer)

const Home = (props) => (
    <div>
      <AuthHomeContainer {...props}/>
    </div>
)


const Stats = () => (
    <div>
      <StatsContainer/>
    </div>
  
  )
  
const Bookshelf = () => (
     <div>
        <h2>Bookshelf</h2>
        <BookshelfContainer/>
     </div>
     
     )
  
const MrRouter = () => (
    <Router>
        <div>
            <Navbar collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/login">Dog Ears</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                
                <Navbar.Collapse>    
                    <Nav>
                        <NavItem><Link to="/home">Home</Link></NavItem>
                        <NavItem><Link to="/stats">Stats</Link></NavItem>
                        <NavItem><Link to="/bookshelf">Bookshelf</Link></NavItem>
                    
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div class='container'>
                <Route exact path="/login" component={Splash}/>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/stats" component={Stats}/>
                <Route exact path="/bookshelf" component={Bookshelf}/>
            </div>
        </div>
    </Router>
)

export default MrRouter