import React, { Component, Fragment } from 'react'

export default class extends Component {

    // constructor(props){
    //     super(props);
    //     
    // }



    render() {
        return (
            <Fragment>
                <div>
                    Name: {this.props.rep.name}
                    <br />
                    Party: {this.props.rep.party}
                </div>
                <div>
                    District: {this.props.rep.district}
                    <br />
                    State: {this.props.rep.state}
                    <br />
                    Phone: {this.props.rep.phone}
                    <br />
                    Office: {this.props.rep.office}
                    <br />
                    Web Site: {this.props.rep.link}
                </div>
            </Fragment>
        )
    }
}

// district: "0"
// link: "https://donyoung.house.gov"
// name: "Don Young"
// office: "2314 Rayburn House Office Building; Washington DC 20515-0200"
// party: "Republican"
// phone: "202-225-5765"
// state: "AK"