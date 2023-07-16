import { useState } from "react";
import "./TextField.css";

const TextField = (props) => {
  const modifiedPlaceholder = `${props.placeholder}...`;
  const [error, setError] = useState(true);

  const whenTypes = (event) => {
    setError(event.target.value === "");
    props.whenChanges(event.target.value, event.target.value === "");
  };

  return (
    <div className='text-field'>
      <label>{props.label}</label>
      <input
        value={props.value}
        onChange={whenTypes}
        placeholder={modifiedPlaceholder}
        id={props.id}
      />
      {}
      {props.showError && error ? (
        <p id={`${props.id}-error`}>{props.errorMessage}</p>
      ) : (
        ""
      )}
    </div>
  );
};

export default TextField;
