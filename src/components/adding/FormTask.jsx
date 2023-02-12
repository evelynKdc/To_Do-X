import { useState } from "react";

export function FormTask(props) {
  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const  {addItem}  = props;


  const handlerSubit = (e) => {
    e.preventDefault();
    console.log(title);
    console.log(description);


    // *antes que resetee le mando el objeto
    addItem({
      done: false,
      id: (new Date()).toString(),
      title,
      description
    }) 
    

    
    
    setTitle("");
    setDescription("");
  };

  const handlerInputTitle = (e) => {
    setTitle(e.target.value);
  };

  const handlerAreaDescription = (e) => {
    setDescription(e.target.value);
  };

  return (
    <div className="form_container">
      <form className="formTask" onSubmit={handlerSubit}>
        <input
          autoFocus
          className="input_form"
          type="text"
          placeholder="Titulo...."
          onChange={handlerInputTitle}
          value={title}
        />
        <textarea
          className="area_form"
          placeholder="Descripción (opcional) . . . ."
          onChange={handlerAreaDescription}
          value={description}
        ></textarea>
        <button
          className="button_primary"
          type="submit"
          disabled={title ? false : true}
        >
          Agregar
        </button>
      </form>
    </div>
  );
}
