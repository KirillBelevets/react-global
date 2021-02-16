import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import UsingReactPureComponent from './createComponents/usingReactPureComponent'
import UsingReactComponent from "./createComponents/usingReactComponent";
import UsingFunctionalComponent from './createComponents/usingFunctionalComponent'

const createElementH1 = React.createElement('h1', {}, "Hello World created with createElement")

ReactDOM.render(
    <>
        {createElementH1}
        <UsingReactComponent title="Hello World"/>
        <UsingReactPureComponent title="Hello World"/>
        <UsingFunctionalComponent title="Hello World"/>
    </>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
