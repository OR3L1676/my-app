import React, { Component } from 'react';

class List extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      newItemName: '',
      newItemAvailability: false,
      index: 0,
      editIndex: null,
    }
  }

  addToList = () => {
    const countindex = this.state.index + 1;
    const newItem = {
      index: countindex,
      name: this.state.newItemName,
      avl: this.state.newItemAvailability ? 'Available' : 'Not Available',
    }

    if (this.state.editIndex !== null) {
      const updatedItems = this.state.items.map((item, index) => {
        if (index === this.state.editIndex) {
          return newItem;
        }
        return item;
      })

      this.setState({
        items: updatedItems,
        editIndex: null,
      })
    } else {
      this.setState((prevState) => ({
        items: [...prevState.items, newItem],
        index: countindex,
      }))
    }

    this.setState({
      newItemName: '',
      newItemAvailability: false,
    })
  }

  editItem = (index) => {
    const { name, avl } = this.state.items[index];
    this.setState({
      newItemName: name,
      newItemAvailability: avl === 'Available',
      editIndex: index,
    })
  }

  delFromList = (index) => {
    this.setState((prevState) => ({
      items: prevState.items.filter((_, i) => i !== index),
    }))
  }

  handleInputChange = (event) => {
    this.setState({
      newItemName: event.target.value,
    })
  }

  handleAvailabilityChange = (availability) => {
    this.setState({
      newItemAvailability: availability,
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.addToList}>
          {this.state.editIndex !== null ? 'Update Item' : 'Add To List'}
        </button>
        <input
          type="text"
          value={this.state.newItemName}
          onChange={this.handleInputChange}
        />
        <button
          onClick={() => this.handleAvailabilityChange(true)}
          disabled={this.state.newItemAvailability}
        >
          Available
        </button>
        <button
          onClick={() => this.handleAvailabilityChange(false)}
          disabled={!this.state.newItemAvailability}
        >
          Not Available
        </button>
        <ul>
          {this.state.items.map((item, index) => (
            <li key={index}>
              index: {item.index}, name: {item.name}, avl: {item.avl}
              <button onClick={() => this.editItem(index)}>Edit</button>
              <button onClick={() => this.delFromList(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default List