import React, { Component } from 'react';

class UserLogin extends Component {
    render() {


        return (
      <div className='App-center'>
      <br></br>
      <div className = "container">
                   
      <div className = "card col-md-6 offset-md-3 offset-md-3 px-2 ">
                           
      <div className = "card-body">
      <form>
      
      <p className='text-center'><h2>Admin Login</h2></p>
     
      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
        />
      </div>
      <div className="mb-3">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className=" custom-control-label" htmlFor="customCheck1">
            Remember me
          </label>
        </div>
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
      <p className="forgot-password text-right">
        Forgot <a href="#">password?</a>
      </p>
    </form>
                            </div>
                        </div>
                   

               </div>
        </div>





               
            
        );
    }
}

export default UserLogin;