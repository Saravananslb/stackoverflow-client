import React from 'react';
import { useNavigate } from 'react-router-dom';
import { cookie, signInUser } from '../../apiCall';

export const SignIn = () => {

  const [user, setUser] = React.useState({
    email: '',
    password: '',
    name: ''
  })

  const navigate = useNavigate();

  const handleSignIn = () => {
    signInUser(user).then(res => {
      if (res.data && res.data.status) {
        cookie.set('Authorization', res.data.authToken);
        cookie.set('name', res.data.name);
        cookie.set('email', res.data.email);
        cookie.set('userId', res.data.id);
        // navigate(-1);
      }
    })
  }

    return (<>
        <div className="container" style={{position: 'relative', top: '100px'}}>
        <div className="row">
          <div className="col-4"></div>
          
          <div className="col-3" >
            <div><svg aria-hidden="true" class="native svg-icon iconLogoGlyphMd" width="32" height="37" viewBox="0 0 32 37"><path d="M26 33v-9h4v13H0V24h4v9h22Z" fill="#BCBBBB"></path><path d="m21.5 0-2.7 2 9.9 13.3 2.7-2L21.5 0ZM26 18.4 13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5ZM9.1 15.2l15 7 1.4-3-15-7-1.4 3Zm14 10.79.68-2.95-16.1-3.35L7 23l16.1 2.99ZM23 30H7v-3h16v3Z" fill="#F48024"></path></svg></div>
            <div
              class="card col"
              style={{position: 'relative', top: '30px'}}
            >
              <div class="card-body">
                <div class="mb-3" >
                  <label for="exampleFormControlInput2" class="form-label" style={{float: 'left'}}>
                    Email
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput2"
                    value={user.email}
                    onChange={(e) => setUser({...user, email: e.target.value})}
                  />
                  <label for="exampleFormControlInput3" class="form-label" style={{float: 'left'}}>
                    Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleFormControlInput3"
                    value={user.password}
                    onChange={(e) => setUser({...user, password: e.target.value})}
                  />
                  
                </div>
                <button className="btn btn-primary" onClick={handleSignIn}>Log in</button>
               
              </div>
            </div>
            <p style={{position: 'relative', top: '50px'}}>Don’t have an account?<span style={{color: '#0074CC', cursor: 'pointer'}} onClick={() => navigate('/users/signup')}>Sign up</span></p>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </>)
}