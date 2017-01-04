import React from 'react'

var Features = React.createClass({
    render:function(){
        return (
            <div>
                this is features
                {
                    this.props.children
                }
            </div>
        )
    }
})
module.exports = Features