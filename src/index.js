import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { GamerRaider } from "./components/GamerRaider"

import "./index.css"

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <GamerRaider />
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
)
