import React from 'react';
import GithubFileList from './component/GithubFileList';
import data from './data.json';
import './App.css';

const App = () => {
  return (
    <table className='App'>
      <tbody>
      {data.map((el,index) => <GithubFileList key={index} data={el}/>)}
      </tbody>
    </table>
  )
}

export default App;
