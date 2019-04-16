import React, { Component } from 'react';
import Header from './components/header/Header';
import Headline from './components/headline/Headline';
import './app.scss';

const tempArray = [{
  fName: 'Joe',
  lName: 'Bloggs',
  email: 'jbloggs@gmail.com',
  age: 33,
  onlineStatus: true
}];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section className="main">
          <Headline 
            header="Posts"
            desc="Click the button to render posts!"
            tempArray={tempArray}
          />
        </section>
      </div>
    );
  }
}

export default App;
