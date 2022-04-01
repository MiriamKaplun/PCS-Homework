import './Authentication.css';
import React, { useState } from 'react'
import Login from './Login'
import Logout from './Logout'

export default function Authentication({ setError }) {
  const [username, setUsername] = useState();

  const content = username ? <Logout username={username} setUsername={setUsername
  } /> : <Login setUsername={setUsername} setError={setError} />;
  return (
    <div className="authentication">
      {content}
    </div>
  )
}
