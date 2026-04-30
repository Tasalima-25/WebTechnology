import { useState } from 'react';

function AddStudent({ students, setStudents }) {
  const [name, setName] = useState('');

  const addStudent = (e) => {
    e.preventDefault();

    if (name === '') {
      alert('Please enter student name');
    } else {
      setStudents([...students, name]);
      alert('Student added successfully');
      setName('');
    }
  };

  return (
    <div>
      <h2>Add Student</h2>
      <form onSubmit={addStudent}>
        <input
          type="text"
          placeholder="Enter Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}

export default AddStudent;
