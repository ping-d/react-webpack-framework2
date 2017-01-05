/**
 * Created with Jetbrains WebStorm.
 * User: dongping
 * Date: 2017/1/3 0003
 * Time: 下午 5:04
 * Desc: 带搜索的选择框
 * 使用示例：
 * <SearchSelect dataArr={dataArr} width="300px" keyName="id" name="name" onSelect={this.handleSelect}/>
 * dataArr为选择项数组，默认选中数组中第一个元素，
 *
 * width 宽度
 * keyName 可以用来作为key的属性名
 * name 待选择数据项显示的数据属性名
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
    propTypes:function(){
        return {
            dataArr:React.PropTypes.array,//可选择的数据项，默认选中第一项
            onSelect:React.PropTypes.func, //选择数据之后的回调
            keyName:React.PropTypes.string,//遍历dataArr时需要的key在dataArr中的属性名
            name:React.PropTypes.string,//列表项中显示的名称,在dataArr中的属性名
        }
    },
    getInitialState:function(){
        var {dataArr} = this.props;
        return {
            allItems:dataArr,//所有的数据
            searchItems:dataArr,//当前的搜索结果
            showItems:false,//展开数据项
            selectedItem:dataArr && dataArr[0],//选择的数据
            keyName:this.props.keyName,
            name:this.props.name,
        }
    },
    componentWillReceiveProps:function(newProps){
        var {dataArr} = newProps;
        this.setState({
            allItems:dataArr,
            searchItems:dataArr,
            selectedItem:dataArr[0],
            keyName:newProps.keyName,
            name:newProps.name,
        })
    },

    /**
     * 搜索框输入
     * */
    handleInput:function(e){
       var kw = e.target.value;
       var result = this.search(kw);
        this.setState({
            searchItems:result
        })
    },

    /**
     * 根据关键字过滤数据
     * */
    search:function(kw) {
        var {allItems} = this.state;
        var result = [];
        if(kw===''){//搜索关键字为空，返回所有数据
            return allItems;
        }
        for(var i=0,len=allItems.length;i<len;i++){
            if(this.matchRouter(kw,allItems[i].name)){
                result.push(allItems[i]);
            }
        }
        return result;
    },
    /**
     * 搜索的关键字匹配规则
     * */
    matchRouter:function(kw,name){
        if(name.lastIndexOf(kw) === -1){
            return false;
        }else{
            return true;
        }
    },
    /**
    * 选择数据
    * */
    handleSelect:function(item){
        var {onSelect} = this.props;
        this.setState({
            selectedItem:item,
        })
        this.closeSelection();
        onSelect && onSelect(item);
    },
    /**
     * 关闭选项
     * */
    closeSelection:function(){
        var {allItems} = this.state;
        this.setState({
            showItems:false,
            searchItems:allItems
        })
    },
    showSelection:function(e){
        this.setState({
            showItems:true
        });
    },
    render:function(){
        var {showItems,selectedItem,searchItems,keyName,name} = this.state;
        var me = this;
        return (
            <div className="search-select" style={{width:this.props.width}}>
                <div className="value" onClick={this.showSelection}>
                    <input ref="value" value={selectedItem && selectedItem[name]} onChange={()=>{}} />
                    <p className="shadow"></p>
                </div>
                {showItems?
                <div className="selection-wrap" style={{width:this.props.width}}>
                    <div  className="content">
                        <div className="search">
                            <input ref="searchInput" placeholder="搜索" onChange={this.handleInput} />
                        </div>
                        <ul>
                            {searchItems.map(function(item,index){
                                return(
                                    <DataItem onSelect={(item)=>{me.handleSelect(item)}} data={item} key={item[keyName]}/>
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