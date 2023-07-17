import { forwardRef } from "react";
import "./FileField.css";

const FileField = forwardRef(function FileField(props, ref) {
  return (
      <div className='text-field'>
      <label>{props.label}</label>
      <input
        ref={ref}
        type={props.type}
        accept={props.accept}
        onChange={props.onChange}
        id={props.id}
      />
      <span>{props.batchResultMessage}</span>
    </div>
  );
});

export default FileField;
