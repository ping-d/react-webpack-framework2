import React from 'react'

var Home = React.createClass({
    componentWillReceiveProps:function(newP){
        alert(123);
    },
    getInitialState:function(){
        return {
            hello : "a"
        }
    },
    handleChange:function(e){
        console.log(e.currentTarget.value);
    },
    c:function(e)
    {

        this.refs.value.value = new Date().getTime();
        this.setState({
            hello:"world"
        });
    },
    render:function(){
        var {hello} = this.state;
        return (
            <div>
                this is home {hello}
                <button onClick={this.c}> click</button>
                <input ref={"value"} onChange={this.handleChange} defaultValue={"a"}/>
                {
                this.props.children
                }
            </div>
        )
    }
})
module.exports = Home