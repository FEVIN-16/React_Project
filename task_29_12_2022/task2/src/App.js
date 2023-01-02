import './App.css';
import Container from './components/Container';
import Form from './funcomponent/From';
import React, { createContext } from 'react';

export const UserContext = React.createContext();
function App() {
  
  const addChange = () => {
    return (
      document.getElementById('t1').classList.add('try'),
      document.getElementById('t2').innerHTML="<h3>Loading...</h3>"
    )
  };
  const removeChange = () => {
    return (
      document.getElementById('t1').classList.remove('try'),
      document.getElementById('t2').innerHTML=""
    )
  };
  
  return (
    <div className="App">
      {/* <Container/> */}
      <UserContext.Provider value={{n1:addChange,n2:removeChange}} >
        <Form />
      </UserContext.Provider>
    </div>
  );
}

export default App;
