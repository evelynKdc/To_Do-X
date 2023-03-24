import React, { useEffect } from "react";
import { Item } from "./item/Item";
import { TrashButton } from "./buttons/TrashButton";
import { AddButton } from "./buttons/AddButton";

export function ItemContainer({ list, setList, openFormHandler }) {
  const handlerClickDelete = (valueId) => {
    const newList = list.filter((item) => item.id !== valueId);
    setList(newList);
  };

  const listed = list.map((item) => (
    <Item key={item.id} data={item} clickDelete={handlerClickDelete} />
  ));

  useEffect(()=>{
    localStorage.setItem("list", JSON.stringify(list));
  },[list]);

  

  return (
    <div className="itemContainer">
      {list.length ? listed : "No hay tareas pendientes"}
      {list.length ? <TrashButton setList={setList} /> : ""}
      <AddButton openFormHandler={openFormHandler} />
    </div>
  );
}
