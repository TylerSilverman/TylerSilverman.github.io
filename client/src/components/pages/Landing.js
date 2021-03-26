import React, { useContext } from 'react';
import { Store } from '../../store';
import { Link } from 'react-router-dom';

const Landing = props => {
  const { state } = useContext(Store);

  console.log({ state, props });

  return (
    <div className="container valign-wrapper" background="gray">
      <div className="row">
        <div className="col s12 center-align">
          <h2>
            <b>Welcome</b> 
            </h2>
            <h6> {' '}</h6>
          <br></br>
          <a href="https://github.com/TylerSilverman/TylerSilverman.github.io/files/6212765/Resume-Tyler.Silverman.pdf">Download Resume</a>
          <br />
          <br></br>
          <div className="col s6">
            <Link to="/register" className="btn btn-large waves-light hoverable blue accent-3" style={{
              width: '140px',
              borderRadius: '3px',
              letterSpacing: '1.5px',
            }}>
              Register
            </Link>
          </div>
          <div className="col s6">
            <Link to="/login" className="btn btn-large hoverable blue accent-3" style={{
              width: '140px',
              borderRadius: '3px',
              letterSpacing: '1.5px',
            }}>
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
