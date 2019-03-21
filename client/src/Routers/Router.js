import React from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import HomeContainer from '../containers/HomeContainer'
import BookshelfContainer from '../containers/BookshelfContainer'
import StatsContainer from '../containers/StatsContainer'
import SplashContainer from '../containers/SplashContainer'
import AuthService from '../components/AuthService'
import withAuth from '../components/withAuth'
import 'bootstrap/dist/css/bootstrap.css'

//Auth service instance to handle logout from this page?!
const Auth = new AuthService();



const Splash= (props) => (
    <div>
        <SplashContainer {...props}/>
    </div>
)




const AuthHomeContainer = withAuth(HomeContainer)
const Home = (props) => (
    <div>
      <AuthHomeContainer {...props}/>
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
        
        
        <Navbar collapseOnSelect expand='lg'>
            <Navbar.Brand href="/login">Dog Ears</Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            
            <Navbar.Collapse>
                
                <Nav>
                    <Nav.Item><Nav.Link href="/home">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/stats">Stats</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/bookshelf">Bookshelf</Nav.Link></Nav.Item>
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