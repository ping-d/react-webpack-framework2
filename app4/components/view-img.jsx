import React from 'react'
require("./view-img.scss");
const ViewImg = React.createClass({
    getInitialState:function(){
        return{
            initWidth:"",//图片最开始的宽度
            size:1,//图片的缩放比例
        }
    },
    componentDidMount:function(){
        this.setState({
            initWidth:window.getComputedStyle(this.refs.img).width
        })
    },
    mousePositionStart:{//拖动之前的位置
        x:null,
        y:null,
        scrollTop:null,
        scrollLeft:null,
    },
    close:function(){
       this.props.onClose();
    },
    /**
     * 缩小
     * */
    shrink:function(){
        var {size} = this.state;
        size -= 0.25;
        if(size < 1){
            return;
        }
        this.setState({
            size:size,
        });
    },
    /**
     * 放大
     * */
    magnify:function(e){
        var { size} = this.state;
        size += 0.25;
        if(size > 4){
            return;
        }
        this.setState({
            size:size,
        });

    },
    handleMouseDown:function(e){
        e.preventDefault();
        this.mousePositionStart = {
            x:e.clientX,
            y:e.clientY,
            scrollTop:this.refs.container.scrollTop,
            scrollLeft:this.refs.container.scrollLeft,
        }
        var target = e.currentTarget;
        target.addEventListener("mousemove",this.mouseMove);
    },
    mouseMove:function(e){
        e.preventDefault();
        this.refs.container.scrollTop = this.mousePositionStart.scrollTop + this.mousePositionStart.y - e.clientY ;
        this.refs.container.scrollLeft = this.mousePositionStart.scrollLeft + this.mousePositionStart.x -e.clientX;

    },
    handleMouseUp:function(e){
        e.currentTarget.removeEventListener("mousemove",this.mouseMove);
    },
    handleMouseLeave:function(e){
        e.currentTarget.removeEventListener("mousemove",this.mouseMove);
    },

    render(){
        var {url} = this.props;
        var {initWidth, size} = this.state;
        var width = parseFloat(initWidth.substring(0,initWidth.length-2)) * size + "px";
        return (

            <div className="show-big-img">
                <div className="wrap">
                    <div className="control">
                        <span className="close" onClick={this.close}></span>
                        <span className="big" onClick={this.magnify}></span>
                        <span className="small" onClick={this.shrink}></span>
                        <span className="size">{size*100 + "%"}</span>
                    </div>
                    <div className="img-container" ref="container">
                        <img ref="img" style={{width:width}} src={url} onMouseDown={this.handleMouseDown} onMouseLeave={this.handleMouseLeave}  onMouseUp={this.handleMouseUp}/>
                    </div>
                </div>
            </div>
        )
    }
})
module.exports = ViewImg