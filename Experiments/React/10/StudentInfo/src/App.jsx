import Student from './Student.jsx'
import './App.css'

function App() {
  const students = [
    {
      id: 303,
      name: 'Shravani Dake',
      age: 22,
      course: 'CSE',
    },
    {
      id: 304,
      name: 'Taslima Jamadar',
      age: 21,
      course: 'AIDS',
    },
    {
      id: 305,
      name: 'Trupti Zore',
      age: 20,
      course: 'AIML',
    },
        {
      id: 306,
      name: 'Shravani Patil',
      age: 20,
      course: 'AIDS',
    },
        {
      id: 307,
      name: 'Neha Patil',
      age: 21,
      course: 'ETC',
    },
        {
      id: 3,
      name: 'Arya Patil',
      age: 22,
      course: 'Textile',
    },
  ]

  const showMessage = () => {
    alert('Button Clicked!')
  }

  return (
    <div className="container">
      <h1>React Functional Components & Event Handling</h1>

      <button onClick={showMessage}>Click Me</button>

      <div className="student-list">
        {students.map((student) => (
          <Student
            key={student.id}
            name={student.name}
            age={student.age}
            course={student.course}
          />
        ))}
      </div>
    </div>
  )
}

export default App
