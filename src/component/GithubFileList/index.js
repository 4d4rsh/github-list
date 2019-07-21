import React from 'react';
import FileName from './FileName';
import CommitMessage from './CommitMessage';
import Time from './Time';

const GithubFileList = () => <tr><FileName name='build'/><CommitMessage message='Close #1687, Replace es3ify with Babel ES3 transforms (#1688)'/><Time time='2 months ago'/></tr>

export default GithubFileList;