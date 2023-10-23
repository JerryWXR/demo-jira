import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {loadDevTools} from "jira-dev-tool";
import reportWebVitals from "./reportWebVitals";


loadDevTools(() =>
    ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        document.getElementById("root")
    ));
reportWebVitals()
