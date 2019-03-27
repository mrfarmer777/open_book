import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import { postBook, deleteBook, fetchUserBooks, fetchPopBooks, useBook, fetchUserBook } from '../actions/bookActions'
import { postEntry, deleteEntry } from '../actions/entryActions'


import BookInput from '../components/BookInput'
import Bookshelf from '../components/Bookshelf'
import UserBookshelf from '../components/UserBookshelf'

class BookshelfContainer extends Component{
    
    
    handleClick=(event)=>{
        event.preventDefault();
        
    }
    
    
    componentDidMount(){
        this.props.fetchUserBooks();
        this.props.fetchPopBooks();
    }
    
    render(){
        //Wrapping the actual content in a check for jwtToken which verifies a login
        //If you're logged in, you get the good stuff
        return (
            <div className="container-fluid">
                
                
                <BookInput postBook={this.props.postBook} />
                <UserBookshelf shelfName="My Books" books={this.props.books.userBooks} deleteBook={this.props.deleteBook} postEntry={this.props.postEntry} deleteEntry={this.props.deleteEntry} fetchUserBook={this.props.fetchUserBook}/>
                <Bookshelf shelfName="Popular Books" books={this.props.books.popBooks} useBook={this.props.useBook}/>
            </div>
            )
    
        
        
    }
}

const mapStateToProps = state =>{
    return {
        books: state.books,
        popBooks: state.popBooks
    };
};

const mapDispatchToProps = dispatch =>{
    return {
        postBook: (book)=>{dispatch(postBook(book))},
        deleteBook: (id)=>{dispatch(deleteBook(id))},
        fetchUserBooks: () =>{dispatch(fetchUserBooks())},
        fetchUserBook: (book) => {dispatch(fetchUserBook(book))},
        fetchPopBooks: () => {dispatch(fetchPopBooks())},
        useBook: (book) => {dispatch(useBook(book))},
        addEntry: (payload) => dispatch({type: "ADD_ENTRY", payload: payload}),
        postEntry: (entry) => dispatch(postEntry(entry)),
        deleteEntry: (id) => dispatch(deleteEntry(id)),
       
    }
}



export default withRouter(connect(mapStateToProps,mapDispatchToProps)(BookshelfContainer))