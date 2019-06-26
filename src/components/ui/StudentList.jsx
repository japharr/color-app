import React from "react";
import Student from "./Student";

const StudentList = ({ students }) => {
  return (
    <div>
      {students.map(s => (
        <Student key={s.id} name={s.name} age={s.age} />
      ))}
    </div>
  );
};

export default StudentList;
