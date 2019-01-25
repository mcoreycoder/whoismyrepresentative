import React, { Component, Fragment } from 'react'

import stateOptions from '../testdata/states_hash'

import Rep from './Rep'

export default class extends Component {
    state = {
        legislativeBranch: '',
        selectState: '',
        repsmapped: [],
    }

    renderReps = (StateReps) => {
        return StateReps.map(key => <Rep rep={key} />)
    }

    submitHandler = async (event) => {
        event.preventDefault()
        const baseUrl = 'http://localhost:3000/';
        const postUrl = (baseUrl, legislativeBranch, selectState) => {
            let newUrl = baseUrl + legislativeBranch + '/' + selectState;
            return newUrl;
        }
        const apiUrl = postUrl(baseUrl, this.state.legislativeBranch, this.state.selectState);
        const StateReps = await fetch(apiUrl)
            .then(result => result.json())
            .then(result => result.results)
        this.setState({ repsmapped: this.renderReps(StateReps) })
        console.log("this.state.repsmapped", this.state.repsmapped)
    }

    render() {
        const stateOption = Object.keys(stateOptions).map(
            key => <option value={key}>{Object.values(stateOptions[key])}</option>)

        return (
            <Fragment>
                <form onSubmit={this.submitHandler}>
                    Legislative Branch: {" "}
                    <select onChange={event => this.setState({ legislativeBranch: event.target.value })}>
                        <option>Select Branch</option>
                        <option value="representatives">House</option>
                        <option value="senators">Senate</option>
                    </select>

                    <br />

                    Select State: {" "}
                    <select onChange={event => this.setState({ selectState: event.target.value })}>
                        {stateOption}
                    </select>
                    <br />
                    <input type="submit" value="Submit"></input>
                </form>
                <br />
                <br />
                {this.state.repsmapped}
            </Fragment>
        )
    }
}