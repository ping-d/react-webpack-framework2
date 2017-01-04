import React from 'react'

var About = React.createClass({
    componentDidMount:function(){
        alert("mount")
    },
    componentWillUnmount:function(){
        alert("unmount")
    },
    getInitialState:function(){
        alert("ini");
        return {}
    },
    render:function(){
        return (
            <div>
                this is about

            </div>
        )
    }
})
module.exports = About