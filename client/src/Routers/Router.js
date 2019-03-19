import React from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import HomeContainer from '../containers/HomeContainer'
import BookshelfContainer from '../containers/BookshelfContainer'
import StatsContainer from '../containers/StatsContainer'
import SplashContainer from '../containers/SplashContainer'
import AuthService from '../components/AuthService'
import withAuth from '../components/withAuth'

//Auth service instance to handle logout from this page?!
const Auth = new AuthService();



const Splash= (props) => (
    <div>
        <SplashContainer {...props}/>
    </div>
)





const Home = (props) => (
    <div>
      <HomeContainer {...props}/>
    </div>
)

const AuthStatsContainer = withAuth(StatsContainer)

const Stats = (props) => (
    <div>
      <AuthStatsContainer {...props}/>
    </div>
  
  )
  
const AuthBookshelfContainer = withAuth(BookshelfContainer)

const Bookshelf = (props) => (
     <div>
        <h2>Bookshelf</h2>
        <AuthBookshelfContainer {...props} />
     </div>
     
     )
  
const MrRouter = () => (
    <Router>
        <div>

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        
        
            <Navbar collapseOnSelect expand="lg">
                <Navbar.Brand href="/login">Dog Ears</Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                
                
                <Navbar.Collapse id="responsive-navbar-nav">    
                    <Nav>
                        <Nav.Item><Nav.Link to="/home">Home</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link to="/stats">Stats</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link to="/bookshelf">Bookshelf</Nav.Link></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div className='container'>
                <Route exact path="/login" component={Splash}/>
                <Route exact path="/home" component={withAuth(Home)}/>
                <Route exact path="/stats" component={Stats}/>
                <Route exact path="/bookshelf" component={Bookshelf}/>
            </div>
        </div>
    </Router>
)

export default MrRouter