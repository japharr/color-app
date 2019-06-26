import React, { Component } from "react";
import StudentList from "./ui/StudentList";
import AddStudentForm from "./ui/AddStudentForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [{ id: 1, name: "John Obu", age: 44 }]
    };
    this.addStudent = this.addStudent.bind(this);
  }

  addStudent(name, age) {
    let students = this.state.students;
    this.setState({
      students: [...students, { id: students.length + 1, name, age }]
    });
  }

  render() {
    return (
      <div className="app">
        <h1>Hello, World!</h1>

        <AddStudentForm onAddNew={this.addStudent} />
        <StudentList students={this.state.students} />
      </div>
    );
  }
}

export default App;
