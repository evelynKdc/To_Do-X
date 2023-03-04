import React, { useState, useEffect } from "react";
import { ItemNoEditing } from "./ItemNoEditing";
import {ItemEditing} from './ItemEditing';

export function Item({ data, clickDelete }) {
  const [edit, setEdit] = useState(false);
  const [isDone, setIsDone]= useState(data.done);

  useEffect(()=>{
    data.done=isDone;
  },[isDone,data])

  const handlerClick = () => {
    clickDelete(data.id);
    console.log(data.title);
  };

 

  const handlerClickEdit = () => {
    setEdit(true);
  };


  return (
    <div key={data.id} className="taskItemContainer">
      {edit ? <ItemEditing data={data} edit={edit} setEdit={setEdit}/> : <ItemNoEditing data={data} isDone={isDone} setIsDone={setIsDone} handlerClickEdit={handlerClickEdit} handlerClick={handlerClick}/>}
    </div>
  );
}
