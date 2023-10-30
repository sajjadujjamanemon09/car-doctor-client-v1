import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import axios from 'axios';


const Login = () => {

  const {signIn} = useContext(AuthContext);
  const location = useLocation()
  const navigate = useNavigate()
  console.log(location);


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value
        const password = form.password.value
        

        signIn(email, password)
        .then(result => {
          const loggedInUser  =  result.user
          console.log(loggedInUser);
          const user = {email}
          // get Access Token
          axios.post('http://localhost:5000/jwt', user, {withCredentials: true})
          .then(res => {
            console.log(res.data);
            if(res.data.success){
              navigate(location.state ? location?.state : '/')
            }
          })
        })
        .catch(error => console.log(error))
    }

    return (
        <div className="hero min-h-[100vh]">
  <div className="hero-content flex-col lg:flex-row gap-10">
    <div className="text-center lg:text-left w-1/2">
<img src={img} alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body text-center">
      <h1 className="text-2xl font-bold">Login now!</h1>
<form onSubmit={handleLogin}>
<div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <input className="btn bg-red-500 text-white" type="submit" value='Login' />
        </div>
</form>
<p className='py-5'>New to Car Doctors? <Link className='text-red-500 font-bold' to='/signUp'>Sign Up</Link></p>
      </div>
    </div>
  </div>
</div>
    );
};

export default Login;