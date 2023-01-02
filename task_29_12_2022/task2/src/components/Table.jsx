import React from 'react';
const Table = (props) => {
    let lists = props.list;
    return (
        <div >
            <div >
            <h1>Table</h1>
            <table className='section1' style={{marginBottom:'30px'}}cellPadding="10px" cellSpacing="10px">
                <thead >
                    <tr>
                        <th className="grid-container">Name</th>
                        <th className="grid-container">Age</th>
                        <th className="grid-container">Gender</th>
                    </tr>
                </thead>
                <tbody>
                    {lists.map(list => {
                        return (
                            <tr key={list.name}>
                                <td>{list.name}</td>
                                <td>{list.age}</td>
                                <td>{list.gender}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            </div>
        </div>
    )
}
export default Table;