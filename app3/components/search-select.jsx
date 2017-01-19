/**
 * Created with Jetbrains WebStorm.
 * User: dongping
 * Date: 2017/1/3 0003
 * Time: 下午 5:04
 * Desc: 带搜索的选择框
 * 使用示例：
 * <SearchSelect dataArr={dataArr} width="300px" keyName="id" name="name" defaultValue={dataArr[0]} onSelect={this.handleSelect}/>
 * dataArr为选择项数组，默认选中数组中第一个元素，
 *
 * width 宽度(可选)
 * keyName 可以用来作为key的属性名（可选）
 * name 待选择数据项显示的数据属性名（必须）
 */
import React from 'react'
import $ from 'jquery'
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
        var {data,textName} = this.props;
        return (
            <li onClick={this.handleClick}>
                <p>{textName?data[textName]:data}</p>
            </li>
        )
    }
})



const SearchSelect = React.createClass({
    propTypes:function(){
        return {
            dataArr:React.PropTypes.array,//可选择的数据项，
            onChange:React.PropTypes.func, //选择数据之后的回调
            textName:React.PropTypes.string,//<option> 里面的text 在dataArr中对应的属性名
            defaultValue:React.PropTypes.any,
            selectName:React.PropTypes.string, //<select> 元素的name属性名
            valueName:React.PropTypes.string,//<option> 里面的value 在dataArr中对应的属性名
            placeholder:React.PropTypes.string,
        }
    },
    getInitialState:function(){
        var {dataArr} = this.props;
        return {
            allItems:dataArr,//所有的数据
            searchItems:dataArr,//当前的搜索结果
            showItems:false,//展开数据项
            defaultValue:this.props.defaultValue,//默认值
            valueName:this.props.valueName,
            textName:this.props.textName,
            selectName:this.props.selectName,
            placeholder:this.props.placeholder || '请选择',
            choosedText:"",
            choosedValue:"",
        }
    },
    componentDidMount:function(){
        var me = this;
        var choosedValue,choosedText;
        var {placeholder} = this.state;
        var {defaultValue,} = this.props;
        if(defaultValue){
            choosedValue = defaultValue;
            this.setState({
                choosedValue:choosedValue
            },function(){
                var text = $(me.refs.select).find("option:selected").text();
                me.setState({
                    choosedText:text
                })
            });
        }else{
            choosedValue = placeholder;
            choosedText = placeholder;
            this.setState({
                choosedText:choosedText,
                choosedValue:choosedValue
            })
        }

    },
    componentWillReceiveProps:function(newProps){
        var me = this;
        var {dataArr} = newProps;
        var {allItems, valueName} = this.state;//旧数据
        var flag = false;
        for(var i=0,len=dataArr.length;i<len;i++){
            if((allItems[i] || (typeof(allItems[i])==="string")) && ( valueName? (allItems[i][valueName] ===dataArr[i][valueName]):(allItems[i] ===dataArr[i]) )){

            }else{ //数据变化重置选项
                flag = true;
                break;
            }
        }
        if(dataArr.length==0){
            flag = true;
        }
        this.setState({
            allItems:dataArr,
            searchItems:dataArr,
            valueName:newProps.valueName,
            showItems:false,
            textName:newProps.textName,
            selectName:newProps.selectName,
            placeholder:newProps.placeholder || "请选择",

        })
        if(flag){
            me.resetData(newProps);
        }
    },
    /**
     * 如果传入的新数据有变化重置选中项
     * */
    resetData:function(newProps) {
        this.setState({
            choosedText:newProps.placeholder || "请选择",
            choosedValue:newProps.placeholder || "请选择",
        })
    },
    /**
     * 搜索框输入
     * */
    handleInput:function(e){
        var kw = e.currentTarget.value;
        var result = this.search(kw);
        this.setState({
            searchItems:result
        })
    },

    /**
     * 根据关键字过滤数据
     * */
    search:function(kw) {
        var {allItems,textName} = this.state;
        var result = [];
        if(kw===''){//搜索关键字为空，返回所有数据
            return allItems;
        }
        for(var i=0,len=allItems.length;i<len;i++){
            if(this.matchRouter(kw,(textName?allItems[i][textName] : allItems[i]))){
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
        }
        return true;
    },
    /**
     * 选择数据
     * */
    handleSelect:function(item){
        var me = this;
        var {textName,valueName,placeholder} = this.state;
        var {onChange} = me.props;
        if(!item){
            if(textName){
                item = {};
                item[textName] = placeholder;
                item[valueName] = placeholder;
            }else{
                item = placeholder;
            }
        }
        me.closeSelection();
        me.setState({
            choosedText:(textName? item[textName]:item),
            choosedValue:(textName? item[valueName]:item)
        },function(){
            onChange && onChange({target:me.refs.select,currentTarget:me.refs.select});
        });

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
    onBlur:function(e){
        e.preventDefault();
        e.stopPropagation();
    },
    onFocus:function(e){
        e.preventDefault();
        e.stopPropagation();
    },
    render:function(){
        var {showItems, allItems, searchItems, valueName, selectName, placeholder, textName, choosedText, choosedValue} = this.state;
        var {className} = this.props;
        var me = this;
        return (
            <div className={"search-select " + className} style={{width:this.props.width}}>
                <select style={{display:"none"}} ref="select" name={selectName}  value={choosedValue} onChange={(e)=>{}} >
                    <option value={placeholder}>{placeholder}</option>
                    {allItems.map(function(item,index){
                        return (<option key={index} value={valueName? item[valueName]:item}>{textName? item[textName]:item}</option>);
                    })}
                </select>

                <div className="value" onClick={this.showSelection}>
                    <input id="val"  ref="value" value={choosedText} onChange={()=>{}} />
                    <p className="shadow"></p>
                </div>
                {showItems?
                    <div className="selection-wrap" style={{width:this.props.width}}>
                        <div  className="content-wrap">
                            <div className="search">
                                <input id="searchInput" ref="searchInput" placeholder="搜索" onFocus={this.onFocus} onBlur={this.onBlur} onChange={this.handleInput} />
                            </div>
                            <ul>
                                <li onClick={()=>me.handleSelect()}>
                                    <p>{placeholder}</p>
                                </li>
                                {searchItems.map(function(item,index){
                                    return(
                                        <DataItem onSelect={(data)=>{me.handleSelect(data)}} data={item} textName={textName} key={index}/>
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