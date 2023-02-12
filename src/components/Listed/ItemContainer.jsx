import React from 'react'
import {Item} from './Item';

export function ItemContainer(props) {

    const {list, setList} = props;
    
   

    const handlerClickDelete = (valueId)=>{
      const newList = list.filter((item) => item.id !== valueId);
      setList(newList);
    }
    
   


   const listed = list.map((item)=> (<Item key={item.id} data={item} clickDelete={handlerClickDelete}/> ));
   

  return (
    <div className='itemContainer'>
      
        {list.length ? listed: "No hay tareas pendientes"}
        
    </div>
  )
}

