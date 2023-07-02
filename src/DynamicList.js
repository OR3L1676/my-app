// import React, { Component } from 'react';

// class DynamicList extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       items: [] // Initialize the list as an empty array
//     };
//   }

//   addItem = () => {
//     // Create a copy of the current items array in the state
//     const updatedItems = [...this.state.items];
//     // Generate a unique key for the new item (optional)
//     const newItemKey = Date.now();
//     // Add the new item to the updated array
//     updatedItems.push({ key: newItemKey, value: '' });
//     // Update the state with the new array of items
//     this.setState({ items: updatedItems });
//   };

//   removeItem = (key) => {
//     // Create a copy of the current items array in the state
//     const updatedItems = [...this.state.items];
//     // Find the index of the item to remove
//     const index = updatedItems.findIndex((item) => item.key === key);
//     // Remove the item from the array
//     updatedItems.splice(index, 1);
//     // Update the state with the new array of items
//     this.setState({ items: updatedItems });
//   };

//   handleInputChange = (key, event) => {
//     // Create a copy of the current items array in the state
//     const updatedItems = [...this.state.items];
//     // Find the index of the item to update
//     const index = updatedItems.findIndex((item) => item.key === key);
//     // Update the value of the item
//     updatedItems[index].value = event.target.value;
//     // Update the state with the new array of items
//     this.setState({ items: updatedItems });
//   };

//   render() {
//     const { items } = this.state;

//     return (
//       <div>
//         <button onClick={this.addItem}>Add Item</button>
//         <ul>
//           {items.map((item) => (
//             <li key={item.key}>
//               <input type="text" value={item.value} onChange={(event) => this.handleInputChange(item.key, event)} />
//               <button onClick={() => this.removeItem(item.key)}>Remove</button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

// export default DynamicList;