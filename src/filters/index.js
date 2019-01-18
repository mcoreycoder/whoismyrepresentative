import RepsData from '../testdata/repsdata'
import SensData from '../testdata/sensdata'

export const repState = () => RepsData.filter(person => person.state = "CA")