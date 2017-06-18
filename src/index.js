import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import 'react-hot-loader/patch'
import 'App.css'
// import 'materialize-css/dist/js/materialize.min'
// import 'materialize-css/dist/css/materialize.min.css'

const App = () => (
    <div className="app">
        HML
        <a className="waves-effect waves-light btn">button</a>
    </div>
)

render(
    <App />,
    document.getElementById("root")
)
if (module.hot) {
    console.log(yeah)
}