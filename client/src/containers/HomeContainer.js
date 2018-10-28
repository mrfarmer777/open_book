import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Redirect} from 'react-router-dom'
import { fetchEntries, postEntry, deleteEntry } from '../actions/entryActions'
import { fetchBooks, postBook } from '../actions/bookActions'

import EntryInput from '../components/EntryInput'
import Entries from '../components/Entries'
import BookInput from '../components/BookInput'

class HomeContainer extends Component{
    constructor(){
        super()
        this.state={
            bookFormOpen: false,
        }
    }
    
    
    
    componentDidMount(){
        this.props.fetchEntries();
        this.props.fetchBooks();
    }
    
    render(){
        //Wrapping the actual content in a check for jwtToken which verifies a login
        //If you're logged in, you get the good stuff
        if(localStorage.getItem("jwtToken")){
            return (
                <div class="container-fluid">
                    <EntryInput addEntry={this.props.addEntry} postEntry={this.props.postEntry} books={this.props.books} />
                    <BookInput postBook={this.props.postBook} />
                    <Entries entries={this.props.entries} fetchEntries={this.props.fetchEntries} deleteEntry={this.props.deleteEntry} />
                </div>
            
            )
        } else {
            //Otherwise, go login first...
            return <Redirect to="/login" />
        }
        
    }
}

const mapStateToProps = state =>{
    return {
        entries: state.entries,
        books: state.books
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        addEntry: (payload) => dispatch({type: "ADD_ENTRY", payload: payload}),
        fetchEntries: () => dispatch(fetchEntries()),  //this.props.fetchEntries is a function that results when you call dispath with the fetchEntries function imported above as an argument. Fetch entries should return a function....
        postEntry: (entry) => dispatch(postEntry(entry)),
        deleteEntry: (id) => dispatch(deleteEntry(id)),
        
        fetchBooks: () => dispatch(fetchBooks()),
        postBook: (book) => dispatch(postBook(book))
    }
}



export default withRouter(connect(mapStateToProps,mapDispatchToProps)(HomeContainer))