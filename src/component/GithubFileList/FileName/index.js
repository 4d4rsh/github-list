import React from 'react';
import FolderIcon from '../../../assets/icons/folder-icon.svg';
import './style.css';

const FileName = ({name}) => {
    return (
        <td className='file-name-container'>
            <img src={FolderIcon} alt='thumbnail' className='thumbnail'/>
            <p className='text'>{name}</p>
        </td>
    )
}

export default FileName;