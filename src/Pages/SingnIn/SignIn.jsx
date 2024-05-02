import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import SocialMediaLogin from "../../components/SocialMediaLogin";

const SignIn = () => {
    const {SignIn}= useContext(AuthContext)
  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    SignIn(email,password)
    .then((result) => {
      const user = result.user;
      console.log(user);
    })
  };
  return (
    <div>
      <div className="hero bg-base-200 w-full">
        <div className="hero-content w-full">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="text-center">
              <h1 className="text-5xl font-bold mt-10">Sign In</h1>
            </div>
            <form onSubmit={handleSignIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#FD7800] text-white hover:text-[#FD7800] hover:bg-white">
                  Login
                </button>
              </div>
            </form>
              <SocialMediaLogin></SocialMediaLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
