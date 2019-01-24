import React, { Component, Fragment } from 'react'

// import RepsData from '../testdata/repsdata'
// import SensData from '../testdata/sensdata'

import { repState,  } from '../filters'
import stateOptions from '../testdata/states_hash'


import Rep from './Rep'

export default class extends Component {
    state = {
        legislativeBranch: '',
        selectState: '',
        repsmapped: [],

    }

    renderReps = () => {
        // return repState(this.state.selectState).map(person => <Rep rep={person} />)
        return repState(this.state.selectState).map(person => <Rep rep={person} />)
    }

    submitHandler = async (event) => {
        event.preventDefault()
        const baseUrl = 'http://localhost:3000/';
        const postUrl = (baseUrl, legislativeBranch, selectState) => {
            let newUrl = baseUrl + legislativeBranch + '/' + selectState ;
            return newUrl;
        }
        const apiUrl = postUrl(baseUrl, this.state.legislativeBranch, this.state.selectState);

        // const UtahReps = await fetch('http://localhost:3000/representatives/ut')
        //     .then(result => result.json())
        const StateReps = await fetch(apiUrl)
            .then(result => result.json())
        console.log(StateReps)
        console.log(this.state.selectState , this.state.legislativeBranch)
        // this.setState({ repsmapped: this.renderReps(this.state.selectState) })
        this.setState({ repsmapped: this.renderReps(this.state.selectState) })

    }

    render() {
        const stateOption = Object.keys(stateOptions).map(
            key => (<option value={key}>{Object.values(stateOptions[key])}</option>))

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
                <br />
                {/* {sensmapped} */}
            </Fragment>
        )
    }
}