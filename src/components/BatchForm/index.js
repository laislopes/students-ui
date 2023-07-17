import { useState, useRef } from "react";
import Button from "../Button";
import FileField from "../FileField";
import { generatePresignedURL, sendFileViaURL } from "../../services/api-connect";
import "./BatchForm.css";

const BatchForm = (props) => {
  const [ selectedFile, setSelectedFile ] = useState(null)
  const [ batchOperationResponse, setBatchOperationResponse ] = useState('')
  const ref = useRef(null);

  const submitHandler = async (event) => {
    event.preventDefault();
    const presignedUrl = await generatePresignedURL(ref.current.files[0].name);
    const res = await sendFileViaURL(presignedUrl, selectedFile)
    setBatchOperationResponse(res);
  };

  return (
    <section className="form">
      <form
        onSubmit={submitHandler}
      >
        <h2>Select a file to batch record</h2>
        <FileField
          required={true}
          ref={ref}
          label="Select only CSV files"
          type="file"
          id="file-form"
          accept=".csv"
          onChange={e => setSelectedFile(e.target.files[0])}
          batchResultMessage={batchOperationResponse}
        />
        <Button id="form-button">Create Batch Record</Button>
      </form>
    </section>
  );
};

export default BatchForm;
