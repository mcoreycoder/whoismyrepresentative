import RepsData from '../testdata/repsdata'

// // import SensData from '../testdata/sensdata'
// import {findRepresentativesByState} from '../../server/find-rep-api'


export const repState = (selectState) => RepsData.filter(person => person.state === selectState)
// // export const repState2 = (selectState) => findRepresentativesByState.filter(person => person.state === selectState)

// // export const repState = () => RepsData.filter(person => person.state = "UT")

