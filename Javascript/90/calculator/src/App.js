import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    current: '0',
    total: '0',
    answer: '0',
    operator: ' '
  }

  handleClick(btn) {
    
  }

  getTotal() {
    this.setState({ answer: this.state.total + this.state.current })
  }

  render() {
    return (
      <>
        <div>{this.state.total}{this.state.operator}{this.state.current}={this.state.answer}</div>
        <div className="calculator">
          <input></input>
          <button onClick={() => this.setState({ current: 1 })}>1</button>
          <button onClick={() => this.setState({ current: 2 })}>2</button>
          <button>3</button>
          <button onClick={() => this.setState({ total: this.state.current, operator: '+' })}>+</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>-</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button onClick={() => this.getTotal()}>=</button>
          {
            [7, 8, 9, '+', 4, 5, 6, '-', 1, 2, 3, '*', '.', '0', 'C', '/', '='].map(btn => <button onClick={() => this.handleClick(btn)}>{btn}</button>)
          }
        </div>
      </>
    );
  }


}

export default App;
