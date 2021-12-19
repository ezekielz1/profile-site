import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/main';
import './index.css';


ReactDOM.render(
  <React.StrictMode>
    <div className='under-construction'>
      <h5 className='under-construction__text'>This site is currently under construction; Some sections will be incomplete</h5>
    </div>
    <Main/>
  </React.StrictMode>,
  document.getElementById('root')
);
