import React from 'react';
import ReactDOM from 'react-dom';

class List2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headers: ['ID', 'NAME', 'AGE', 'CITY'],
      students: [
        {name: 'Eliran', age: '19', city: 'Ashdod'}
        ,{name: 'Orel', age: '19', city: 'Rishon LeZion'},
        {name: 'David', age: '22', city: 'Rishon LeZion'}]
    }
  }

  renderTableHeader() {
    let header = this.state.headers.map((header, index) => (
      <th key={index}>{header}</th>
    ));
    return <tr>{header}</tr>;
  }

  renderTableData() {
    let data = this.state.students.map((student, index) => (
      <tr key={index}>
        <td>{index}</td>
        <td>{student.name}</td>
        <td>{student.age}</td>
        <td>{student.city}</td>
      </tr>
    ));
    return data;
  }

  render() {
    return (
      <div>
        <h1>Student Table</h1>
        <table>
          <thead>{this.renderTableHeader()}</thead>
          <tbody>{this.renderTableData()}</tbody>
        </table>
      </div>
    );
  }
}
 
export default List2

