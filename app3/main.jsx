import React from 'react'
import { render } from 'react-dom'
import { browserHistory, Router, Route, IndexRoute, hashHistory } from 'react-router'

import App from './components/App.jsx'

const Home = function(nextState,cb){
    require.ensure([],function(require){
        cb(null,require('./components/Home.jsx'))
    })
}

render(
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute getComponent={Home} />

        </Route>
    </Router>,
    document.getElementById('app')
)