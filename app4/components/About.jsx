import React from 'react'
import ViewImg from './view-img.jsx'
var About = React.createClass({

    getInitialState:function(){
        return {
            showBigImg:false
        }
    },
    handleClickImg:function(){
        this.setState({
            showBigImg:true,
        })
    },
    handleClose:function(){
        this.setState({
            showBigImg:false,
        })
    },
    render:function(){
        var {showBigImg} = this.state;

        return (
            <div>
                <img src="//www.baidu.com/img/bd_logo1.png" onClick={this.handleClickImg}/>
                {showBigImg?
                    <ViewImg onClose={this.handleClose} url="//www.baidu.com/img/bd_logo1.png"/>:null
                }


            </div>
        )
    }
})
module.exports = About