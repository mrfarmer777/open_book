//Trying react-step-progress-bar
import React, {Component} from 'react'
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from 'react-step-progress-bar';
import { StepBubble } from './StepBubble'





class Bookbar extends Component {
    
    
    render() {
        return(
          <div style={{padding: "10px"}}>
            <ProgressBar percent={this.props.book.pages_read/this.props.book.pages*100} stepPositions={[10,20,30,40,50,60,70,80,90,100]}>
             <Step >
              {()=>(
                <StepBubble entryCount={this.props.book.entry_distribution["10"]}/>
              )}
             </Step>
             <Step >
              {()=>(
                <StepBubble entryCount={this.props.book.entry_distribution["20"]}/>
              )}
             </Step>
             <Step >
              {()=>(
                <StepBubble entryCount={this.props.book.entry_distribution["30"]}/>
              )}
             </Step>
             <Step >
              {()=>(
                <StepBubble entryCount={this.props.book.entry_distribution["40"]}/>
              )}
             </Step>
             <Step >
              {()=>(
                <StepBubble entryCount={this.props.book.entry_distribution["50"]}/>
              )}
             </Step>
             <Step >
              {()=>(
                <StepBubble entryCount={this.props.book.entry_distribution["60"]}/>
              )}
             </Step>
             <Step >
              {()=>(
                <StepBubble entryCount={this.props.book.entry_distribution["70"]}/>
              )}
             </Step>
             <Step >
              {()=>(
                <StepBubble entryCount={this.props.book.entry_distribution["80"]}/>
              )}
             </Step>
             <Step >
              {()=>(
                <StepBubble entryCount={this.props.book.entry_distribution["90"]}/>
              )}
             </Step>
             <Step >
              {()=>(
                <StepBubble entryCount={this.props.book.entry_distribution["100"]}/>
              )}
             </Step>
              


            </ProgressBar>
          </div>
        )
    }
    
}

export default Bookbar;


