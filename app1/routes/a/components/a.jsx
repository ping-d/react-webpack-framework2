import React from 'react'
import img from '../../../asset/smail.png'
require ('./a.scss')
var A = React.createClass({
    render:function(){
        return(
            <div>
                <img src={img}></img>
                this is a
                {this.props.children}
            </div>
        )
    }
})
module.exports = A