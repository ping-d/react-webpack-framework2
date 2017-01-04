import React from 'react'

var Home = React.createClass({
    render:function(){
        return (
            <div>
                this is home
                {
                this.props.children
                }
            </div>
        )
    }
})
module.exports = Home