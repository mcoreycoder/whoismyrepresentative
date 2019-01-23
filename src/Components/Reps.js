import React, { Component, Fragment } from 'react'

// import RepsData from '../testdata/repsdata'
// import SensData from '../testdata/sensdata'

import { repState } from '../filters'

import Rep from './Rep'

export default class extends Component {
    state = {
        selectState: '',
        repsmapped: [],

    }

    renderReps = () => {
        // return repState(this.state.selectState).map(person => <Rep rep={person} />)
        return repState(this.state.selectState).map(person => <Rep rep={person} />)
    }

    submitHandler = async (event) => {
        event.preventDefault()
        const UtahReps = await fetch('http://localhost:3000/representatives/ut')
            .then(result => result.json())
        console.log(UtahReps)
        // this.setState({ repsmapped: this.renderReps(this.state.selectState) })
    }

    render() {
        // const repsmapped = this.renderReps()
        const option = (<option value='TX'>Texas</option>)
        return (
            <Fragment>
                <form onSubmit={this.submitHandler}>
                    Select State: {" "}
                    <select onChange={event => this.setState({ selectState: event.target.value })}>
                        <option>Select State</option>
                        <option value="CA">CA</option>
                        <option vlaue="UT">UT</option>
                        {option}
                    </select>
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