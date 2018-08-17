import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

import EntryInput from '../components/EntryInput'
import Entries from '../components/Entries'

class HomeContainer extends Component{
    
    render(){
        return (
            <div>
                <EntryInput addEntry={this.props.addEntry}/>
                <Entries entries={this.props.entries}/>
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
        addEntry: (payload) => dispatch({type: "ADD_ENTRY", payload: payload})
    }
}



export default withRouter(connect(mapStateToProps,mapDispatchToProps)(HomeContainer))