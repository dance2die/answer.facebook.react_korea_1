import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  state = {
    radioGroup: {
      angular: false,
      react: true,
      polymer: false
    }
  };

  handleRadio = event => {
    const obj = { ...this.state.radioGroup };
    obj[event.target.value] = event.target.checked;
    this.setState({ radioGroup: obj });
  };

  render() {
    const { radioGroup } = this.state;
    // prettier-ignore
    return (
      <form>
        <input type="radio" name="radioGroup" value="angular" checked={radioGroup["angular"]} onChange={this.handleRadio} /> Angular
        <input type="radio" name="radioGroup" value="react" checked={radioGroup["angular"]} onChange={this.handleRadio} /> React
        <input type="radio" name="radioGroup" value="polymer" checked={radioGroup["angular"]} onChange={this.handleRadio} /> Polymer
      </form>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
