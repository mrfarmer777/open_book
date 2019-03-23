//Trying react-step-progress-bar
import React, {Component} from 'react'
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from 'react-step-progress-bar';





class Bookbar extends Component {
    
    
    render() {
        return(
            <ProgressBar percent={this.props.book.pages_read/this.props.book.pages*100} stepPositions={[0,20,40]}>
                                <Step transition="scale">
                                  {({ accomplished, position, index }) => (
                                    <img
                                      style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                                      width="30"
                                      src="https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/9d/Pichu.png/revision/latest?cb=20170407222851"
                                    />
                                  )}
                                </Step>
                                <Step transition="scale">
                                  {({ accomplished, position, index }) => (
                                    <img
                                      style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                                      width="30"
                                      src="https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/9d/Pichu.png/revision/latest?cb=20170407222851"
                                    />
                                  )}
                                </Step>
                                <Step transition="scale">
                                  {({ accomplished, position, index }) => (
                                    <img
                                      style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                                      width="30"
                                      src="https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/9d/Pichu.png/revision/latest?cb=20170407222851"
                                    />
                                  )}
                                </Step>
                            </ProgressBar>
            
            )
    }
    
}

export default Bookbar;


