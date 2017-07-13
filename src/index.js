import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'

import React from 'react'
import ReactDOM from 'react-dom'
import Root from './apps/_root'

const render = Component => {
    ReactDOM.render(
        <Component />,
        document.getElementById("root")
    )
}

render(Root)

if (module.hot) {

    module.hot.accept('./components/App', () => {
        render(Root) 
    })
}