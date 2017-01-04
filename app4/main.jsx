import React from 'react'
import { render } from 'react-dom'
import { browserHistory, Router, Route, IndexRoute, hashHistory } from 'react-router'

import App from './components/App.jsx'

const Home = function(nextState,cb){
    require.ensure([],function(require){
        cb(null,require('./components/Home.jsx'))
    })
};
const About = function(nextState,cb){
    require.ensure([],function(require){
        cb(null,require('./components/About.jsx'))
    })
};
const Features = function(nextState,cb){
    require.ensure([],function(require){
        cb(null,require('./components/Features.jsx'))
    })
}
render(
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute getComponent={Home} />
            <Route path='about' getComponent={About} />
            <Route path='features' getComponent={Features} />
        </Route>
    </Router>,
    document.getElementById('app')
)