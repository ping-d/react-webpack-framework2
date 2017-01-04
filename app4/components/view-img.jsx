import React from 'react'
require("./view-img.scss");
const ViewImg = React.createClass({
    close:function(){
       this.props.onClose();
    },
    handleMouseDown:function(e){
        e.preventDefault();
        var target = e.currentTarget;
        target.addEventListener("mousemove",this.mouseMove);
    },
    mouseMove:function(e){
        e.preventDefault();
        var x = e.movementX;
        var y = e.movementY;
        this.refs.container.scrollBy(-x,-y);
    },
    handleMouseUp:function(e){
        e.currentTarget.removeEventListener("mousemove",this.mouseMove);
    },
    handleMouseLeave:function(e){
        e.currentTarget.removeEventListener("mousemove",this.mouseMove);
    },

    render(){
        var {url} = this.props;
        return (

            <div className="show-big-img">
                <div className="wrap">
                    <div className="control">
                        <span onClick={this.close}>关闭</span>
                    </div>
                    <div className="img-container" ref="container">
                        <img src={url} onMouseDown={this.handleMouseDown} onMouseLeave={this.handleMouseLeave}  onMouseUp={this.handleMouseUp}/>
                    </div>
                </div>
            </div>
        )
    }
})
module.exports = ViewImg