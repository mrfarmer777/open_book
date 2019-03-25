//Trying react-step-progress-bar
import React, {Component} from 'react'
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from 'react-step-progress-bar';





class Bookbar extends Component {
    
    
    render() {
        return(
          <div style={{padding: "10px"}}>
            <ProgressBar percent={this.props.book.pages_read/this.props.book.pages*100}></ProgressBar>
          </div>
        )
    }
    
}

export default Bookbar;


