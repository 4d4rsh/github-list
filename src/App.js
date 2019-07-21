import React from 'react';
import GithubFileList from './component/GithubFileList';
import './App.css';

const App = () => {
  return (
    <table className='App'>
      <tbody>
      <GithubFileList />
      </tbody>
    </table>
  )
}

export default App;
