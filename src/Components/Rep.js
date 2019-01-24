import React, {Component, Fragment } from 'react'

export default class extends Component {

    constructor(props){
        super(props);
        this.listReps = (reps) => {
            return ( 
                reps.map( (val, indx) =>{
                    return (
                        <Fragment>
                            <div><h1>{val.name}</h1></div>
                            <div><h2>{val.party}</h2></div>
                        </Fragment>
                    )
                })
            )
         }
    }



    render() {
        return(
            <div>
                {/* hi there */}
                {this.listReps(this.props.reps)}
                {/* <br/>
                {this.props.rep.party}
                <br/>
                {this.props.rep.state} */}
            </div>
        )
    }
}