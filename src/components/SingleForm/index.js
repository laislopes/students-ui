import { useState } from "react";
import Button from "../Button";
import TextField from "../TextField";
import "./SingleForm.css";

const defaultState = { value: "", error: true };

const SingleForm = (props) => {
  const [name, setName] = useState(defaultState);
  const [email, setEmail] = useState(defaultState);
  const [showError, setShowError] = useState(false);

  const whenSaves = (event) => {
    event.preventDefault();
    setShowError(true);
    if (validForm()) {
      props.whenStudentIsRegister({
        name: name.value,
        email: email.value,
      });
      setName(defaultState);
      setEmail(defaultState);
      setShowError(false);
    }
  };

  const validForm = () => {
    console.log(name.error, email.error);
    return !name.error && !email.error;
  };

  return (
    <section className='form'>
      <form onSubmit={whenSaves}>
        <h2>Fill in the Student Information</h2>
        <TextField
          required={true}
          label='Name'
          placeholder='Type the name'
          value={name.value}
          whenChanges={(value, error) => setName({ value: value, error: error })}
          id='form-name'
          showError={showError}
          errorMessage='The field name is required'
        />
        <TextField
          required={true}
          label='email'
          placeholder='Type the email'
          value={email.value}
          whenChanges={(value, error) => setEmail({ value: value, error: error })}
          id='form-email'
          showError={showError}
          errorMessage='The field e-mail is required'
        />
        <Button id='form-button'>Create Student Register</Button>
      </form>
    </section>
  );
};

export default SingleForm;
