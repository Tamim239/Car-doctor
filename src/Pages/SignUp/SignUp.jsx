import { Link } from 'react-router-dom';
import loginImg from '../../assets/images/login/login.svg';

export const SignUp = () => {

    const handleSignUp = (e) =>{
        e.preventDefault();
    }

  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className="w-1/2 mr-12">
     <img src={loginImg} alt="" />
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSignUp} className="card-body">
      <h1 className="text-3xl text-center font-bold">Sign Up</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Your Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="Your Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
            <input type="submit" value="Sign Up"  className="btn btn-primary"/>
        </div>
      </form>
      <p className='my-5 text-center'>Already Have an Account <Link className='text-orange-500 font-bold' to="/login">
          Login
        </Link>
      </p>
    </div>
  </div>
</div>
  )
}
