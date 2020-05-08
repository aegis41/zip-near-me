import React, { Component } from 'react';
import Header from './components/layout/Header';
import MyForm from './components/layout/MyForm';
import OutputTable from './components/layout/OutputTable';

class App extends Component {

  state = {
    myZIP: "",
    myRadius: 0
  };

  stubData = {
    "zip_codes": [
      {
        "zip_code": "46806",
        "distance": 1.596,
        "city": "Fort Wayne",
        "state": "IN"
      },
      {
        "zip_code": "46803",
        "distance": 0,
        "city": "Fort Wayne",
        "state": "IN"
      }
    ]
  };

  handleChange = (event) => {
    const { target: { name, value } } = event;
    this.setState({ [name]: value });
  }

  getZIPs = () => {
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <Header />
        <MyForm
          handleChange={this.handleChange}
          getZIPs={this.getZIPs}
        />
        <OutputTable
          data={this.stubData.zip_codes}
        />
      </div>
    )
  }
}

export default App;