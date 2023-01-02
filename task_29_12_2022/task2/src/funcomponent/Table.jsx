
import { TableContect } from './From';
import React from 'react';

const Table = (props) => {
    // const value=React.useContext(TableContect)
    return (
        <TableContect.Consumer>
            {voter=>{
                return(
                    <div>
                        <h1>
                Table using Function
            </h1>
            <table className='section1' style={{marginBottom:'30px'}}cellPadding="10px" cellSpacing="10px">
                <thead>
                    <tr>
                        <th className="grid-container">Name</th>
                        <th className="grid-container">Age</th>
                        <th className="grid-container">Gender</th>
                    </tr>
                </thead>
                <tbody>
                    {voter.map(list => {
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
                )
            }
                
            }
            
        </TableContect.Consumer>
    )
}
export default Table;