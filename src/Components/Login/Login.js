import React, { useState, useContext, useEffect } from 'react';
import { FirebaseContext } from '../../store/Context'
import Logo from '../../olx-logo.png';
import './Login.css';
import { useHistory, Link } from 'react-router-dom'

function Login() {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { firebase } = useContext(FirebaseContext)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)
  const formvalues = {
    email, password
  }
  const handleLogin = (e) => {
    e.preventDefault();
    setIsSubmit(true)
    setFormErrors(validate(formvalues))
    firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
      history.push('/')
    }).catch((error) => {
      console.log(error.message)
      alert(error.message)
    })
  }
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formvalues + 'TESTFORM')
    }
  }, [formErrors])

  const validate = (values) => {
    const errors = {}
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!values.email) {
      errors.email = 'Email required'
    }
    else if (!regex.test(values.email)) {
      errors.email = 'The entered email format is incorrect'
    }
    if (!values.password) {
      errors.password = 'Password required'
    }
    return errors
  }

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className='text-danger'>{formErrors.email}</p>
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className='text-danger'>{formErrors.password}</p>
          <br />
          <br />
          <button>Login</button>
        </form>
        <Link to='/signup'><a>Signup</a></Link>
      </div>
    </div >
  );
}

export default Login;
