import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()
const rootPath = history.location.pathname

import LandingPage from '../LandingPage'
import Dashboard from '../Dashboard'

const Root = () => {
    return (
        <Router history={history}>
            <div>
                <Route exact path={rootPath} component={LandingPage} />
                <Route path={rootPath + 'dashboard'} component={Dashboard} />
            </div>
        </Router>
    )
}

export default Root