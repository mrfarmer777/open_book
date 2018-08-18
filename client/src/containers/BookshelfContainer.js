import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
//import { fetchEntries, postEntry, deleteEntry } from '../actions/entryActions'

//import EntryInput from '../components/EntryInput'
//import Entries from '../components/Entries'

class BookshelfContainer extends Component{
    
    
    handleClick=(event)=>{
        event.preventDefault();
        console.log(this.props.fetchEntries())
    }
    
    componentDidMount(){
        console.log('Mount for days.')
    }
    
    render(){
        
        return (
            <div>
                <p>The only thing I like more than books is the shelves that contain them. Which I, in turn, contain.</p>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        
    }
}

const mapDispatchToProps = dispatch =>{
    return {
       
    }
}



export default withRouter(connect(mapStateToProps,mapDispatchToProps)(BookshelfContainer))