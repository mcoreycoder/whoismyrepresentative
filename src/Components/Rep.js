import React, { Component, Fragment } from 'react';
import '.././App.css';

import Paper from '@material-ui/core/Paper';

export default class extends Component {

    state = {
        show: false,
    };

    showMore = () => {
        if (this.state.show === false) {
            this.setState({ show: true });
        } else if (this.state.show === true) {
            this.setState({ show: false });
        }
    };

    render() {
        return (
            <Fragment>
                <Paper className="paper" elevation={20}>
                    <div>
                        <h3 >
                            Name: <p type="button" className="link-button" onClick={this.showMore}>{this.props.rep.name}</p>
                        </h3>
                        <h4>
                            Party: {this.props.rep.party}
                        </h4>
                    </div>
                    <div className={this.state.show ? '' : 'hidden'}>
                        <div className="deets">
                            District: {this.props.rep.district}
                            <br />
                            Phone: {this.props.rep.phone}
                            <br />
                            Office: {this.props.rep.office}
                            <br />
                            Web Site: <a href="{this.props.rep.link}" target="_blank">{this.props.rep.link}</a>
                        </div>
                    </div>
                </Paper>
            </Fragment>
        );
    };
};