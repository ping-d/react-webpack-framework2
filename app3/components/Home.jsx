import React from 'react'
import SearchSelect from '../components/search-select.jsx'
import $ from 'jquery'
require("./home.scss");
const dataArr = [
    {id:"123",name:"a",value:"a"},
    {id:"2",name:"b",value:"b"},
    {id:"3",name:"ad",value:"d"},
    {id:"4",name:"afsfdsafdasfdsafd",value:"a43"},
    {id:"5",name:"fa",value:"a54"},
    {id:"6",name:"ag",value:"a4"},
    {id:"7",name:"ad",value:"a5"},
    {id:"77",name:"ah",value:"a76"},
    {id:"8",name:"ad",value:"a86"},
    {id:"9",name:"as",value:"a76"},
    {id:"12",name:"ab",value:"a9"},
    {id:"13",name:"a7",value:"a7"},
    {id:"1232",name:"c",value:"c"},
    {id:"23",name:"s",value:"s"},
    {id:"43",name:"ss",value:"ss"},
    {id:"45",name:"ffda",value:"fd"},
    {id:"65",name:"ad",value:"ad"},
    {id:"67",name:"fa",value:"f"},
    {id:"78",name:"afff",value:"afff"},
]
const data2 = [
    {name:"goudan",value:"goudan1"},
    {name:"sb",value:"sb1"}
]
var Home = React.createClass({
    handleSelect:function(e){
        var select = e.currentTarget;
        console.log( "name: "+ $(select).find("option:selected").text()+" value: "+ select.value);
        if(select.value === "a54"){
            this.setState({
                data2:data2,
            });
        }else{
            this.setState({
                data2:dataArr,
            });
        }
    },
    getInitialState:function(){
        return {
            dataArr:dataArr,
            data2:dataArr,
        }
    },
    componentDidMount:function(){
        console.log("name: "+ $("select").find("option:selected").text()+" value: "+ $("select").value);
    },
    changeData:function(){
        this.setState({
            dataArr:[
                {name:"goudan",value:"afd",id:"f"}
            ]
        });
    },
    render:function(){
        var {dataArr,data2} = this.state;
        return (
            <div>
                <button onClick={this.changeData}>click</button>
              <SearchSelect dataArr={dataArr} defaultValue={null}  width="300px" selectName="test" valueName="value" textName="name" onChange={this.handleSelect}/>
                <div className="select2">
                    <SearchSelect dataArr={data2} defaultValue={null}  width="300px" selectName="test" valueName="value" textName="name" onChange={this.handleSelect}/>
                </div>
            </div>
        )
    }
})
module.exports = Home