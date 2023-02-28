
import { useState } from 'react';
import './index.css';
import {FormTask} from './components/adding/FormTask';
import {ItemContainer} from './components/Listed/ItemContainer';

function App() {
  const [list, setList] = useState([]);
  const [asideVisible, setAsideVisible] = useState(false);
  
  const addItem = (item) =>{
    setList([...list, item]);
  }
  

  const openFormHandler = () =>{
    setAsideVisible(true);
  }

  const closeFormHandler = () =>{
    setAsideVisible(false);
  }

  return (

    <div className="App">
      <h1 className='title_app'>To Do X</h1>
      <FormTask addItem={addItem} closeFormHandler={closeFormHandler} asideVisible={asideVisible}/>
      <ItemContainer list={list} setList={setList} openFormHandler={openFormHandler}/>
    </div>
  );
}

export default App;
