/**
 * Created with Jetbrains WebStorm.
 * User: dongping
 * Date: 2017/1/3 0003
 * Time: 下午 5:04
 * Desc: 带搜索的选择框
 */
import React from 'react'
require("./search-select.scss");

/**
 * 列表项
 * */
const DataItem = React.createClass({
    handleClick:function(e){
        var {data} = this.props;
        this.props.onSelect(data);
    },
    render:function(){
        var {data} = this.props;
        return (
            <li onClick={this.handleClick}>
                <p>{data.name}</p>
            </li>
        )
    }
})



const SearchSelect = React.createClass({
    getInitialState:function(){
        return {
            showItems:false,//展开数据项
            selectedValue:null,//选择的数据
        }
    },
    showSelection:function(e){
        this.setState({
            showItems:true
        });
    },
    handleInput:function(e){
       this.refs.value.value = e.target.value;
    },
    /**
    * 选择数据
    * */
    handleSelect:function(item){
        var {onSelect} = this.props;
        this.refs.value.value = item.name;
        this.closeSelection();
        onSelect && onSelect(item);
    },
    /**
     * 关闭选项
     * */
    closeSelection:function(){
        this.setState({
            showItems:false
        })
    },
    render:function(){
        var {dataArr} = this.props;
        var {showItems} = this.state;
        var me = this;
        return (
            <div className="search-select">
                <div className="value" onClick={this.showSelection}>
                    <input ref="value" defaultValue={"hello"} />
                    <p className="shadow"></p>
                </div>
                {showItems?
                <div className="selection-wrap">
                    <div  className="content">
                        <div className="search">
                            <input placeholder="搜索" onInput={this.handleInput}/>
                        </div>
                        <ul>
                            {dataArr.map(function(item,index){
                                return(
                                    <DataItem onSelect={(item)=>{me.handleSelect(item)}} data={item} key={item.id}/>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="big-shadow" onClick={this.closeSelection}></div>
                </div>:null}

            </div>
        )
    }
})
module.exports = SearchSelect