import { useState } from 'react'
import './App.css'
import Form from './components/Form'

function App() {
  const [users, setUsers] = useState([])

  console.log(users)

  return (
    <>
      <Form setUsers={setUsers} />
    </>
  )
}

export default App
