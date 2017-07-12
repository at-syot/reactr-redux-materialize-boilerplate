import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './components/App.js'

const render = Component => {
    ReactDOM.render(
        // <AppContainer>
            <Component />,
        // </AppContainer>,
        document.getElementById("root")
    )
}

render(App)

if (module.hot) {

    module.hot.accept('./components/App', () => { 
        console.log('app change')
        render(App) 
    })
}