import React, { Component, Fragment } from 'react'

import RepsData from '../testdata/repsdata'
import SensData from '../testdata/sensdata'

import {repState} from '../filters'

import Rep from './Rep'

export default class extends Component {

    renderReps = () => {
        return repState().map(person => <Rep rep={person}/>)
    }

    renderSens = () => {
        return SensData.map(person => <Rep rep={person}/>)
    }

    render() {
        const repsmapped = this.renderReps()
        const sensmapped = this.renderSens()

        return (
            <Fragment>
                {/* {filters} */}
                <br/>
                <br/>
                {repsmapped}
                <br/>
                {sensmapped}
            </Fragment>
        )
    }
}