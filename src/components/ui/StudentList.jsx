import React from "react";
import Student from "./Student";

const StudentList = ({ students, onDelete = f => f }) => {
  return (
    <div>
      {students.length == 0 ? (
        <p>No students in the list: Add Students</p>
      ) : (
        students.map(s => (
          <Student
            key={s.id}
            name={s.name}
            age={s.age}
            onDelete={() => onDelete(s.id)}
          />
        ))
      )}
    </div>
  );
};

export default StudentList;
