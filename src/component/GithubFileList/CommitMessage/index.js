import React from 'react';
import './style.css';

const CommitMessage = ({message}) => {
    return(
        <td className='message-container'><p className='message'>{message}</p></td>
    )
}

export default CommitMessage;