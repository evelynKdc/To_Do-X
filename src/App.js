
import { useState } from 'react';
import './index.css';
import {FormTask} from './components/adding/FormTask';
import {ItemContainer} from './components/Listed/ItemContainer';

function App() {
  const [list, setList] = useState([]);
  
  const addItem = (item) =>{
    setList([...list, item]);
  }
  
  return (

    <div className="App">
      <h1 className='title_app'>To Do X</h1>
      <FormTask addItem={addItem}/>
      <ItemContainer list={list} setList={setList}/>
    </div>
  );
}

export default App;
