import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import { fetchBooks, postBook, deleteBook } from '../actions/bookActions'

import BookInput from '../components/BookInput'
import Bookshelf from '../components/Bookshelf'
import BookDetails from '../components/BookDetails'

class BookshelfContainer extends Component{
    
    
    handleClick=(event)=>{
        event.preventDefault();
        
    }
    
    componentDidMount(){
        console.log('Mount for days.')
        this.props.fetchBooks();
    }
    
    render(){
        
        return (
            <div class="container-fluid">
                <h2>My Bookshelf</h2>
                <BookInput postBook={this.props.postBook} />
                <Bookshelf books={this.props.books} deleteBook={this.props.deleteBook}/>
                <BookDetails />
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        books: state.books
    }
}

const mapDispatchToProps = dispatch =>{
    return {
       fetchBooks: ()=>{dispatch(fetchBooks())},
       postBook: (book)=>{dispatch(postBook(book))},
       deleteBook: (id)=>{dispatch(deleteBook(id))}
    }
}



export default withRouter(connect(mapStateToProps,mapDispatchToProps)(BookshelfContainer))