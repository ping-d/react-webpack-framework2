import React from 'react'

var App = React.createClass({
    render:function(){
        return (
            <div style={{width:"300px",height:"200px",margin:"0 auto"}}>
                this is app
                {
                    this.props.children
                }
            </div>
        )
    }
})
module.exports = App