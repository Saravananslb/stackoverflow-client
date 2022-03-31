import React from "react";
import { useNavigate } from "react-router-dom";
import { signUpUser } from "../../apiCall";
import './SignUp.css';

export const SignUp = () => {

  const [user, setUser] = React.useState({
    email: '',
    password: '',
    name: ''
  })

  const navigate = useNavigate();

  const handleSignUp = () => {
    signUpUser(user).then(res => {
      if (res.data && res.data.status) {
        navigate(-1);
      }
    })
  }

  return (
    <>
      <div className="container" style={{position: 'relative', top: '100px'}}>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-6 left-signup" style={{padding: '10px'}}>
            <h3>Join the Stack Overflow community</h3>
            <p>Get unstuck — ask a question</p>
            <p>Unlock new privileges like voting and commenting</p>
            <p>Save your favorite tags, filters, and jobs</p>
            <p>Earn reputation and badges</p>
            <div>
              Collaborate and share knowledge with a private group for FREE.
            </div>
            <div style={{color: '#0074CC'}}>Get Stack Overflow for Teams free for up to 50 users.</div>
          </div>
          <div className="col-4">
            <div
              class="card col"
            >
              <div class="card-body">
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label" style={{float: 'left'}}>
                    Display name
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    value={user.name}
                    onChange={(e) => setUser({...user, name: e.target.value})}
                  />
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
                  <span>Passwords must contain at least eight characters, including at least 1 letter and 1 number.</span>
                </div>
                <button className="btn btn-primary" onClick={handleSignUp}>Sign up</button>
                <div>By clicking “Sign up”, you agree to our <span style={{color: '#0074CC'}}>terms of service, privacy policy</span> and <span style={{color: '#0074CC'}}>cookie policy</span></div>
              </div>
            </div>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
    </>
  );
};
