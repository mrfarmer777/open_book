import React from 'react'
import { Modal } from 'react-bootstrap'
export default class BookDetails extends React.Component{
    
    render(){
        return(
            <div class="static-modal" id="bookModal" tabIndex="-1" role="dialog">
                <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Title>Book Details</Modal.Title>
                     </Modal.Header>
                </Modal.Dialog>
            
            </div>
            )
    }
    
    
}