import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import "./index.css"
import {loadDevTools} from "jira-dev-tool";
import 'antd/dist/antd.less'
import reportWebVitals from "./reportWebVitals";
import {AppProviders} from "./context";

loadDevTools(() =>
    ReactDOM.render(
        <React.StrictMode>
            <AppProviders>
            <App />
            </AppProviders>
        </React.StrictMode>,
        document.getElementById("root")
    ));
reportWebVitals()
