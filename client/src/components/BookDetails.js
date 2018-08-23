import React from 'react'
import { Button } from 'react-bootstrap'
export default class BookDetails extends React.Component{
    
    render(){
        return(
            <div class="modal" id="bookModal" tabIndex="-1" role="dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5>A Book Title</h5>
                        <p>A Book Author</p>
                        <p>Total Pages: 3546</p>
                        <p>Total Entries: 16</p>
                    </div>
                </div>
            
            </div>
            )
    }
    
    
}