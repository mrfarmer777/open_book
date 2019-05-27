import React from 'react';

const styles={
    height: '20px',
    width: '20px',
    backgroundColor: "red",
    borderRadius: "10px"
}


export function StepBubble(props){
    
    
    
    return <div style={styles}>{props.entryCount}</div>
}

