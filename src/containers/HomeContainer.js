import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import { fetchEntries, postEntry, deleteEntry } from '../actions/entryActions'

import EntryInput from '../components/EntryInput'
import Entries from '../components/Entries'

class HomeContainer extends Component{
    
    
    handleClick=(event)=>{
        event.preventDefault();
        console.log(this.props.fetchEntries())
    }
    
    render(){
        
        return (
            <div>
                <EntryInput addEntry={this.props.addEntry} postEntry={this.props.postEntry} deleteEntry={this.props.deleteEntry} />
                <button onClick={this.handleClick}>Get the Entries</button>
                <Entries entries={this.props.entries} fetchEntries={this.props.fetchEntries} />
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        entries: state.entries,
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        addEntry: (payload) => dispatch({type: "ADD_ENTRY", payload: payload}),
        fetchEntries: () => dispatch(fetchEntries()),  //this.props.fetchEntries is a function that results when you call dispath with the fetchEntries function imported above as an argument. Fetch entries should return a function....
        postEntry: (entry) => dispatch(postEntry(entry)),
        deleteEntry: (id) => dispatch(deleteEntry(id)),
    }
}



export default withRouter(connect(mapStateToProps,mapDispatchToProps)(HomeContainer))