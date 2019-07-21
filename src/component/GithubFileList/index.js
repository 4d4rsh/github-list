import React from 'react';
import FileName from './FileName';
import CommitMessage from './CommitMessage';
import Time from './Time';

const GithubFileList = () => <tr><FileName /><CommitMessage /><Time /></tr>

export default GithubFileList;