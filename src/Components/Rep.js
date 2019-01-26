import React, { Component, Fragment } from 'react';
import '.././App.css';


export default class extends Component {

    state = {
        show: false
    };

    showMore = () => {
        if (this.state.show == false) {
            this.setState({ show: true });
        } else if (this.state.show == true) {
            this.setState({ show: false });
        }
    };


    render() {
        return (
            <Fragment>
                <div>
                    <button onClick={this.showMore}>
                        <h3>
                            Name: {this.props.rep.name}
                        </h3>
                    </button>
                    <h4>
                        Party: {this.props.rep.party}
                    </h4>
                    <div className={this.state.show ? true : 'hidden'}>
                        District: {this.props.rep.district}
                        <br />
                        Phone: {this.props.rep.phone}
                        <br />
                        Office: {this.props.rep.office}
                        <br />
                        Web Site: {this.props.rep.link}
                    </div>
                </div>
            </Fragment>
        );
    };
};