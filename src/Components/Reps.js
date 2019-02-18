import React, { Component, Fragment } from 'react';

import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';

import selectStateOptions from '../stateData/states_hash';
import congress_drawing from '../images/congress_drawing.jpg';

import Rep from './Rep';


export default class extends Component {
    state = {
        legislativeBranch: '',
        selectState: '',
        repsmapped: [],
        loading: false,
    }

    renderReps = (StateReps) => {
        this.setState({loading : false});
        return StateReps.map(key => <Rep rep={key} />)
    }

    submitHandler = async (event) => {
        if (this.state.legislativeBranch === 'Select Representative or Senator' ||
            this.state.legislativeBranch === '' ||
            this.state.selectState === 'Select State' ||
            this.state.selectState === '') {
            event.preventDefault()
            alert("Please Select Legislative Branch and State");
        } else if (this.state.legislativeBranch !== '' || this.state.selectState !== '') {
            event.preventDefault();
            this.setState({loading : true});
            // const baseUrl = 'http://localhost:3000/';
            //may want to change below to be set up in a .env file to hide api
            const baseUrl = 'https://warm-forest-70819.herokuapp.com/';
            const postUrl = (baseUrl, legislativeBranch, selectState) => {
                let newUrl = baseUrl + legislativeBranch + '/' + selectState;
                return newUrl;
            }
            const apiUrl = postUrl(baseUrl, this.state.legislativeBranch, this.state.selectState);
            const StateReps = await fetch(apiUrl)
                .then(result => result.json())
                .then(result => result.results)
            if (StateReps !== undefined) {
                this.setState({ repsmapped: this.renderReps(StateReps) });
            } else {
                alert('No results, Please make alternate selection');
            };
        }
    };
    

    render() {
        const stateOption = Object.keys(selectStateOptions).map(
            key => <option value={key}>{Object.values(selectStateOptions[key])}</option>)

        return (
            <div className="container" >
                <Fragment>
                    <div>
                        <form onSubmit={this.submitHandler}>
                            <img src={congress_drawing} alt="congress_drawin" />
                            <br />
                            <b>Search by:</b>
                            <br />
                            Representative or Senator: {" "}
                            <select onChange={event => this.setState({ legislativeBranch: event.target.value })}>
                                <option>Select Representative or Senator</option>
                                <option value="representatives">Representative</option>
                                <option value="senators">Senator</option>
                            </select>
                            <br />
                            Select State: {" "}
                            <select onChange={event => this.setState({ selectState: event.target.value })}>
                                <option>Select State</option>
                                {stateOption}
                            </select>
                            <br />
                            <Button variant="contained" type="submit" value="Submit">Submit</Button>
                        </form>
                    </div>
                    <hr />
                    <div className={this.state.loading ? true : 'hidden'}>
                    <b>Processing the request...</b>
                    <LinearProgress />
                    </div>
                    {this.state.repsmapped}
                </Fragment>
            </div>
        )
    }
}