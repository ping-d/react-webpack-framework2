import React from 'react'
import {Link} from 'react-router'
var App = React.createClass({
    render:function(){
        return (
            <div>
                <Link to="/about">about</Link>
                this is app
                {
                    this.props.children
                }
            </div>
        )
    }
})
module.exports = App