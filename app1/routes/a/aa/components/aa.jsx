import React from 'react'
import img from '../../../../asset/big.png'
var AA = React.createClass({
    render:function(){
        return(
            <div>
                <img src={img}></img>
                this is aa
            </div>
        )
    }
})
module.exports = AA