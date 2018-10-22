import React from 'react';
import ReactDOM from 'react-dom';

const title = React.cloneElement(
    'h1',
    {id: 'main-title', title: 'This is maaaa title'},
    'My First React Smelement'
);

ReactDOM.render(
    title,
    document.getElementById('root')
);

export default title;