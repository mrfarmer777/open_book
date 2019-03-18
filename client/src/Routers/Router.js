import React from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
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
            <Navbar collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/login">Dog Ears</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                
                <Navbar.Collapse>    
                    <Nav>
                        <NavItem>Home</NavItem>
                        <NavItem>Stats</NavItem>
                        <NavItem>Bookshelf</NavItem>

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