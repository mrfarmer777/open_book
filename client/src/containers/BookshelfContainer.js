import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import { postBook, deleteBook, fetchUserBooks, fetchPopBooks, useBook, fetchUserBook } from '../actions/bookActions'
import { postEntry, deleteEntry } from '../actions/entryActions';

import MyNav from '../components/MyNav';
import BookInput from '../components/BookInput';
import Bookshelf from '../components/Bookshelf';
import UserBookshelf from '../components/UserBookshelf';
import Invites from '../components/Invites'

import {ButtonGroup} from 'react-bootstrap';

class BookshelfContainer extends Component{
    
    handleClick=(event)=>{
        event.preventDefault();
        
    }
    
    
    componentDidMount(){
        this.props.fetchUserBooks();
        this.props.fetchPopBooks();
    }
    
    render(){
        
        return (
            <div className="container-fluid">
                
                <Invites invites={this.props.invites} />
                <ButtonGroup>
                    <BookInput postBook={this.props.postBook} />
                </ButtonGroup>
                <UserBookshelf shelfName="My Books" books={this.props.books.userBooks} deleteBook={this.props.deleteBook} postEntry={this.props.postEntry} deleteEntry={this.props.deleteEntry} fetchUserBook={this.props.fetchUserBook}/>
                <Bookshelf shelfName="Popular Books" books={this.props.books.popBooks} useBook={this.props.useBook}/>
            </div>
            )
    
        
        
    }
}

const mapStateToProps = state =>{
    return {
        books: state.books,
        popBooks: state.popBooks,
        invites: state.user.section_invites
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
    };
};



export default withRouter(connect(mapStateToProps,mapDispatchToProps)(BookshelfContainer))