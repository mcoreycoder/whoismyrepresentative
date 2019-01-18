import React, {Component } from 'react'

export default class extends Component {
    render() {
        return(
            <div>
                {this.props.rep.name}
                <br/>
                {this.props.rep.party}
                <br/>
                {this.props.rep.state}
            </div>
        )
    }
}