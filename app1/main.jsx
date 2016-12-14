import React from 'react'
import { render } from 'react-dom'
import { Router,hashHistory } from 'react-router'
//hello
const rootRoute = {
    childRoutes: [ {
        path: '/',
        component: require('./home/app.jsx'),
        childRoutes: [
            require('./routes/a/index.jsx'),
         
        ]
    } ]
}

render((
    <Router
        history={hashHistory}
        routes={rootRoute}
    />
), document.getElementById('app'))
