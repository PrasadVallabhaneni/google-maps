import React,{useState,useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import Table from './components/table';

function App() {
const [tabledata,setData]=useState([]);
  const onAdd=(data)=>{
    
      setData([...tabledata,data]);
  
  }
useEffect(()=>{
  console.log(tabledata)
},[tabledata])
  return (
    <div className="App">
      <button type="button" className="home">
        Home
      </button>
      <div className="box">
        <Form add={onAdd} />
        <Table data={tabledata}/>
       
      </div>
    </div>
  );
}

export default App;
