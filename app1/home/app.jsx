import React, { Component } from 'react'

class App extends Component {
    render() {
        return (
            <div>
                this is app
                {this.props.children}
            </div>
        )
    }
}

module.exports = App
