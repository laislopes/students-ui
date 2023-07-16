import { useState } from "react";
import SingleForm from "./components/SingleForm";
// import BatchForm from "./components/BatchForm";
import { createRegister } from "./services/api-connect";

function App() {
  const [students, setStudents] = useState([]);

  const whenAddedStudent = async (student) => {
    setStudents([...students, student]);
    const res = await createRegister(student);
    return res;
  };

  return (
    <div className="App">
      <SingleForm whenStudentWasRegistered={(student) => whenAddedStudent(student)} />
      {/* <BatchForm /> */}
    </div>
  );
}

export default App;
