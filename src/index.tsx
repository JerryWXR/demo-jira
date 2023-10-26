import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import "./index.css"
import {DevTools,loadServer} from "jira-dev-tool";
import 'antd/dist/antd.less'
import reportWebVitals from "./reportWebVitals";
import {AppProviders} from "./context";

loadServer(() =>
    ReactDOM.render(
        <React.StrictMode>
            <AppProviders>
                <DevTools></DevTools>
            <App />
            </AppProviders>
        </React.StrictMode>,
        document.getElementById("root")
    ));
reportWebVitals()
