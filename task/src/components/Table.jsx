import React, { Component } from 'react';

class Table extends React.Component {
  render() {
    let items = this.props.items;
    let data=this.props.data;
    const table=[...items,...data];
    return (
      <div id="Table">
        <table>
          <tbody>
            <tr>
              <th>Username</th>
              <th>age</th>
              <th>Password</th>
            </tr>
            {table.map(item => {
              return (
                <tr key={item.name}>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.type}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;