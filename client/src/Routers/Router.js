import React from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
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
                    Dog Ears
                </Navbar.Brand>
                <Navbar.Toggle/>
            </Navbar.Header>
            
            <Navbar.Collapse>    
                <Nav>
                    <NavItem><Link to="/">Home</Link></NavItem>
                    <NavItem><Link to="/stats">Stats</Link></NavItem>
                    <NavItem><Link to="/bookshelf">Bookshelf</Link></NavItem>
                
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        
        
        
            
            
        
        
        
        
        <hr/>
        
        <Route exact path="/" component={Home}/>
        <Route exact path="/stats" component={Stats}/>
        <Route exact path="/bookshelf" component={Bookshelf}/>
        </div>
    </Router>
)

export default MrRouter