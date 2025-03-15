import React from 'react'
import Signup from './auth/Signup.jsx';
import {Link} from 'react-router-dom';
import Logout from './auth/Logout.jsx';

export default function Auth() {

    return (
      <>
          <Signup/>

          <div>
              <p>
                  Already Have An Account?
                  <Link to='/authorize/login'>Login</Link>
              </p>
          </div>

          <Logout/>
      </>
    )
}
