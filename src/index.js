// import React from 'react';
// import { render } from 'react-dom';

// import './index.css';
// import './style.css';

// import Header from './components/Header';

// const Root = function() {
//   return (
//   	<Header />
//   );
// };


// render(<Root />, document.querySelector('#root'));


import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import Header from './components/Header';
import MainContent from './components/MainContent';
import './index.css';
import './style.css';

ReactDOM.render(
	<div>
	  <Header />
	  <MainContent />
	 </div>,
  document.getElementById('root')
);