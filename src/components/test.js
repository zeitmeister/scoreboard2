import React from 'react';
import ReactDOM from 'react-dom';

const desc = 'I just learned something';
const myTitleID = 'main-title';
const name = 'Guil';

const header = (
  <header>
    <h1 id={myTitleID}>{ name }'s First react element!</h1>
    <p className="main-desc">{ desc }</p>
    <input value={10 * 20}/>;
  </header>
);

ReactDOM.render(
    title,
    document.getElementById('root')
);
