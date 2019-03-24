import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import { fetchBooks, postBook, deleteBook, fetchUserBooks } from '../actions/bookActions'
import { postEntry, deleteEntry } from '../actions/entryActions'


import BookInput from '../components/BookInput'
import Bookshelf from '../components/Bookshelf'

class BookshelfContainer extends Component{
    
    
    handleClick=(event)=>{
        event.preventDefault();
        
    }
    
    componentDidMount(){
        this.props.fetchUserBooks();
    }
    
    render(){
        //Wrapping the actual content in a check for jwtToken which verifies a login
        //If you're logged in, you get the good stuff
        return (
            <div className="container-fluid">
                
                
                <BookInput postBook={this.props.postBook} />
                <Bookshelf shelfName="My Books" books={this.props.books} deleteBook={this.props.deleteBook} postEntry={this.props.postEntry} deleteEntry={this.props.deleteEntry}/>
                <Bookshelf shelfName="Popular Books" books={this.props.books} />
            </div>
            )
    
        
        
    }
}

const mapStateToProps = state =>{
    return {
        books: state.books
    };
};

const mapDispatchToProps = dispatch =>{
    return {
        fetchBooks: ()=>{dispatch(fetchBooks())},
        postBook: (book)=>{dispatch(postBook(book))},
        deleteBook: (id)=>{dispatch(deleteBook(id))},
        fetchUserBooks: () =>{dispatch(fetchUserBooks())} ,
        addEntry: (payload) => dispatch({type: "ADD_ENTRY", payload: payload}),
        postEntry: (entry) => dispatch(postEntry(entry)),
        deleteEntry: (id) => dispatch(deleteEntry(id)),
       
    }
}



export default withRouter(connect(mapStateToProps,mapDispatchToProps)(BookshelfContainer))