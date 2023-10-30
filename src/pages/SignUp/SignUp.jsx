import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const SignUp = () => {

  const {createUser} = useContext(AuthContext)

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        console.log(name, email , password);

        createUser(email, password)
        .then(result => {
          const user  =  result.user
          console.log(user);
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
      <h1 className="text-2xl font-bold">SignUp now!</h1>
<form onSubmit={handleSignUp}>
<div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
        </div>
<div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <input className="btn bg-red-500 text-white" type="submit" value='Sign Up' />
        </div>
</form>
<p className='py-5'>Already Have An Account? <Link className='text-red-500 font-bold' to='/login'>Log In</Link></p>
      </div>
    </div>
  </div>
</div>
    );
};

export default SignUp;