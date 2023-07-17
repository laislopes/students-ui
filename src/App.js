import { useState } from "react";
import SingleForm from "./components/SingleForm";
import BatchForm from "./components/BatchForm";
import { createRegister } from "./services/api-connect";

function App() {
  const [students, setStudents] = useState([]);

  const whenAddNewStudent = async (student) => {
    setStudents([...students, student]);
    const res = await createRegister(student);
    return res;
  };

  return (
    <div className="App">
      <SingleForm whenRegisterStudent={(student) => whenAddNewStudent(student)} />
      <BatchForm />
    </div>
  );
}

export default App;
