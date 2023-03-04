
export const CheckBox = ({data, setIsDone, isDone}) => {
    const handlerCheck = () => {
        setIsDone(!isDone);
      };

    return (
      <div className="container">
        <input
          type="checkbox"
          id={data.id}
          className="checkGreen"
          style={{ display: "none" }}
          onChange={handlerCheck}
        />
        <label htmlFor={data.id} className="check">
          <svg width="15px" height="15px" viewBox="0 0 18 18">
            <path d="M 1 9 L 1 9 c 0 -5 3 -8 8 -8 L 9 1 C 14 1 17 5 17 9 L 17 9 c 0 4 -4 8 -8 8 L 9 17 C 5 17 1 14 1 9 L 1 9 Z"></path>
            <polyline points="1 9 7 14 15 4"></polyline>
          </svg>
        </label>
      </div>
    );
  };