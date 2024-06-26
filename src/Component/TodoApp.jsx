import React, { Component } from 'react';
import "./TodoApp.css";

export default class TodoApp extends Component {
  state = {
    input: "",
    items: []
  };

  handleChange = (event) => {
    this.setState({
      input: event.target.value
    });
  };

  storeItems = (event) => {
    event.preventDefault();
    const { input } = this.state;

    this.setState({
      items: [...this.state.items, input],
      input: ""
    });
  }

  deleteItem = key => {
    this.setState({
      items: this.state.items.filter((data, index) => index !== key)
    });
  };

  editItem = (key, newValue) => {
    this.setState({
      items: this.state.items.map((data, index) => index === key ? newValue : data)
    });
  };

  render() {
    const { input, items } = this.state;
    console.log(items);
    return (
      <div className='todo-container'>
        <form className='input-section' onSubmit={this.storeItems}>
          <h1>TodoApp</h1>
          <input 
            type='text'
            value={input}
            onChange={this.handleChange}
            placeholder='Enter Items...'
          />
        </form>
        
        <ul>
          {items.map((data, index) => (
            <li key={index}>
              {data} 
              <div className="icons">
              <i  className="fa-solid fa-trash-can" onClick={() => this.deleteItem(index)}></i>
              <i id='j' className="fa-solid fa-pen-to-square" onClick={() => {
                const newValue = prompt("Enter new value:");
                if (newValue !== null) {
                  this.editItem(index, newValue);
                }
              }}>
             </i>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
