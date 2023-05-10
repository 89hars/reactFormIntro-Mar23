import { useState } from 'react'

const Form = ({ setUsers }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [conditions, setConditions] = useState(false)

  /*   const [inputs, setInputs] = useState({ email: '', password: '', conditions: false }) */

  const handleSubmit = event => {
    event.preventDefault()
    console.log(event)
    console.log({ email, password })
    setUsers(prevUsers => [...prevUsers, { email, password }])
    setEmail('')
    setPassword('')
  }

  /*   const handleSubmit = event => {
    event.preventDefault()
    console.log(inputs)
  } */

  /*   const handleChange = event => {
    console.log(event.target)
    setInputs({
      ...inputs,
      [event.target.name]:
        event.target.type === 'checkbox' ? event.target.checked : event.target.value,
    })
  } */

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          value={email}
          name='email'
          onChange={event => {
            setEmail(event.target.value)
          }}
        />
      </label>
      <label>
        Password:
        <input
          type='password'
          value={password}
          name='password'
          onChange={event => {
            setPassword(event.target.value)
          }}
        />
      </label>
      <label>
        Conditions
        <input
          type='checkbox'
          name='conditions'
          checked={conditions}
          onChange={event => {
            setConditions(event.target.checked)
          }}
        />
      </label>
      <button type='submit'>Sign Up</button>
    </form>
  )
}

export default Form
