import React from "react";

export function Item({ data, clickDelete }) {

  const handlerClick = (e) => {
    clickDelete(data.id);
    console.log(data.title);
  };


  const handlerCheck =(e) =>{

    let checking=data.done ? false : true;
    data.done=checking;
    
  }






  const ShowDescription = () => {
    return (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
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

const CheckBox  = ()=>{
  return(
    <div className="container">
      <input type="checkbox" id={data.id} className="checkGreen" style={{display: "none"}} onChange={handlerCheck}/>
      <label for={data.id} className="check">
        <svg width="15px" height="15px" viewBox="0 0 18 18">
            <path d="M 1 9 L 1 9 c 0 -5 3 -8 8 -8 L 9 1 C 14 1 17 5 17 9 L 17 9 c 0 4 -4 8 -8 8 L 9 17 C 5 17 1 14 1 9 L 1 9 Z"></path>
            <polyline points="1 9 7 14 15 4"></polyline>
        </svg>
      </label>
    </div>
  )
}





  return (
    <div key={data.id} className="taskItemContainer">
      <div className="taskItem">
        <div className="item_top">
          <CheckBox/>
          <label for={data.id}>{data.title}</label> 
        </div>  
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
