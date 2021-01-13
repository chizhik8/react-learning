import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

// const name = 'All';
// const element = <h1> Hello {name} { 2+2 }! </h1>

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Марья',
  lastName: 'Моревна'
};

const element = (
  <h1>
    Здравствуй, {formatName(user)}!
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);

