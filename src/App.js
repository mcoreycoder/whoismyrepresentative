import React, { Component, Fragment } from 'react';
import './App.css';
import SelectForm from './components/SelectForm';
import Reps from './components/Reps';


class App extends Component {
  render() {
    return (
      <Fragment>
        <SelectForm />
        <Reps />
      </Fragment>

    );
  }
}

export default App;
