import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import { postBook, deleteBook, fetchUserBooks, fetchPopBooks } from '../actions/bookActions'
import { postEntry, deleteEntry } from '../actions/entryActions'


import BookInput from '../components/BookInput'
import Bookshelf from '../components/Bookshelf'

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
                <Bookshelf shelfName="My Books" books={this.props.books.userBooks} deleteBook={this.props.deleteBook} postEntry={this.props.postEntry} deleteEntry={this.props.deleteEntry}/>
                <Bookshelf shelfName="Popular Books" books={this.props.books.popBooks} />
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
        fetchUserBooks: () =>{dispatch(fetchUserBooks())} ,
        fetchPopBooks: () => {dispatch(fetchPopBooks())},
        addEntry: (payload) => dispatch({type: "ADD_ENTRY", payload: payload}),
        postEntry: (entry) => dispatch(postEntry(entry)),
        deleteEntry: (id) => dispatch(deleteEntry(id)),
       
    }
}



export default withRouter(connect(mapStateToProps,mapDispatchToProps)(BookshelfContainer))