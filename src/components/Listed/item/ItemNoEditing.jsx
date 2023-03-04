import { CheckBox } from "./Checkbox";
import { ShowDescription } from "./ShowDescription";
import { EditButton } from "../buttons/EditButton";
import { DeleteItemButton } from "../buttons/DeleteItemButton";

export const ItemNoEditing = ({data,handlerClickEdit,handlerClick, isDone, setIsDone}) => {
    return (
      <>
        <div className="taskItem">
          <div className="item_top">
            <CheckBox data={data} isDone={isDone} setIsDone={setIsDone}/>
            <label htmlFor={data.id} className="title_label">{data.title}</label>
          </div>
          <div className="description_container">
            {data.description.trim() ? <ShowDescription data={data}/> : null}
          </div>
        </div>

        <EditButton handlerClickEdit={handlerClickEdit}/>
        <DeleteItemButton handlerClick={handlerClick}/>

        
      </>
    );
  };