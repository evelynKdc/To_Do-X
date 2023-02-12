import React from "react";

export function Item({ data, clickDelete }) {
  const handlerClick = (e) => {
    clickDelete(data.id);
    console.log(data.title);
  };


  const handlerCheck =(e) =>{
    data.done =true; 
    console.log(data); 
  }

  const ShowDescription = () => {
    return (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="currentColor"
          className="bi bi-arrow-return-right"
          viewBox="0 0 16 16"
        >
          <path
            
            d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z"
          />
        </svg>
        <p className="info_description">{data.description}</p>
      </>
    );
  };

  return (
    <div key={data.id} className="taskItemContainer">
      <div className="taskItem" onClick={handlerCheck}>
        <label className={data.done ? "taskChecked" : ""}>{data.title}</label>   
        <div className="description_container">
          {data.description ? <ShowDescription /> : null}
        </div>
      </div>

      <button className="danger_button" onClick={handlerClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-x"
          viewBox="0 0 16 16"
        >
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
      </button>
    </div>
  );
}
