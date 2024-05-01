import { Link } from 'react-router-dom';
import loginImg from '../../assets/images/login/login.svg';

export const Login = () => {

    const handleLogin = (e) =>{
        e.preventDefault();
    }

  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className="w-1/2 mr-12">
     <img src={loginImg} alt="" />
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
      <h1 className="text-3xl text-center font-bold">Login now!</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
            <input type="submit" value="Login"  className="btn btn-primary"/>
        </div>
      </form>
      <p className='my-5 text-center'>New Create Account <Link className='text-orange-500 font-bold' to="/signUp">
          Sign Up
        </Link>
      </p>
    </div>
  </div>
</div>
  )
}
