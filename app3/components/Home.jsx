import React from 'react'
import SearchSelect from '../components/search-select.jsx'
const dataArr = [
    {id:"123",name:"a",value:"a"},
    {id:"2",name:"a",value:"a"},
    {id:"3",name:"afdsf",value:"a"},
    {id:"4",name:"afssfddsssssssssssssssfdsfdsafdsafdsafdasfdsafd",value:"a43"},
    {id:"5",name:"fa",value:"a54"},
    {id:"6",name:"ag",value:"a4"},
    {id:"7",name:"ad",value:"a5"},
    {id:"77",name:"ah",value:"a76"},
    {id:"8",name:"ad",value:"a86"},
    {id:"9",name:"as",value:"a76"},
    {id:"12",name:"ab",value:"a9"},
    {id:"13",name:"a",value:"a7"},
    {id:"1232",name:"a",value:"a"},
    {id:"23",name:"a",value:"a"},
    {id:"43",name:"a",value:"a"},
    {id:"45",name:"a",value:"a"},
    {id:"65",name:"a",value:"a"},
    {id:"67",name:"a",value:"a"},
    {id:"78",name:"a",value:"a"},
]
var Home = React.createClass({
    render:function(){
        return (
            <div>
              <SearchSelect dataArr={dataArr}/>
            </div>
        )
    }
})
module.exports = Home