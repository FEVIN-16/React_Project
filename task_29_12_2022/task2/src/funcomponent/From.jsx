import { useState } from 'react';

import Table from './Table';
import React from 'react';
import { UserContext } from '../App';

export const TableContect=React.createContext();
const Form = () => {
    const value = React.useContext(UserContext);
    const [voter, setVoter] = useState([]);
    const [user, setUser] = useState({
        name: '',
        age: '',
        gender: '',
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
        const newlist = [...voter, user];
        console.log(newlist);
        if (user.name == 0 || user.age == 0 || user.gender == 0) {
            alert("Please fill all columns");
        } else if (user.age > 18) {
            value.n1();
            setTimeout(() => {
                setVoter(newlist);
                setUser({ name: '', age: '', gender: '' });
                value.n2();
            }, 5000)
        } else {
            alert("Above 18 years of age can Only fill");
            setUser({ name: '', age: '', gender: '' });
        }

    };
    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        // const newData = { ...user };
        const newData = { name: user.name, age: user.age, gender: user.gender }
        newData[name] = value;
        setUser(newData);
    };
    
    return (
        
            <>
                <h1>Form using Function</h1>
                <form onSubmit={handleSubmit}>
                    <label>Name:</label><input type="text" style={{ marginLeft: '7px' }} name="name" value={user.name} onChange={handleChange} /><br />
                    <label>Age:</label><input type="number" style={{ marginLeft: '22px', marginTop: '10px' }} name="age" value={user.age} onChange={handleChange} /><br />
                    <label>Gender:</label><input type="text" style={{ marginTop: '10px', marginBottom: '10px' }} name="gender" value={user.gender} onChange={handleChange} /><br />
                    <input type="submit" style={{ marginBottom: '20px' }} />
                </form>
                <div id="t1" >
                    
                </div><div id='t2'></div>
                <TableContect.Provider value={voter}>
                <Table/>
                </TableContect.Provider>
                
            </>
            
    )
}
export default Form;