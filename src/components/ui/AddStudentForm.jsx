import React from "react";

const AddStudentForm = ({ onAddNew = f => f }) => {
  let _name, _age;
  const submit = e => {
    e.preventDefault();
    onAddNew(_name.value, _age.value);
    _name.value = "";
    _age.value = "";
  };

  return (
    <div>
      <h1>Add New Student</h1>
      <form onSubmit={submit}>
        <input
          ref={input => (_name = input)}
          name="name"
          type="text"
          placeholder="name"
          required
        />
        <input
          ref={input => (_age = input)}
          name="age"
          type="number"
          placeholder="Age"
        />
        <button>ADD</button>
      </form>
    </div>
  );
};

export default AddStudentForm;
