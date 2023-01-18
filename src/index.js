import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom'
// import reducer, { initialState } from "./MyComponents/Data_layer/reducer.js";
import { StateProvider } from "./StateProvider.js";
// import * as serviceWorker from "./Data_layer/serviceWorker.js";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <StateProvider>
            <App />
        </StateProvider>
    </Router>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
