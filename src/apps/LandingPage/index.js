import React from 'react';
import { Link, withRouter } from 'react-router-dom'

const LandingPage = ({ history }) => {

    return (
        <div>
            landingPage
            <Link to={history.location.pathname + 'dashboard'}>Home</Link>
        </div>
    )
}

export default withRouter(LandingPage)