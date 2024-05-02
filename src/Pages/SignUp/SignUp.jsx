import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const SignUp = () => {
    
    const {createUser} =useContext(AuthContext) 

    const handleSignUp = (event) => {

        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email,password)
        .then(result => {
            console.log(result.user)
            const createdAt = result.user?.metadata?.creationTime
            const user = {email, createdAt: createdAt};
            fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.insertedId){
                    alert('user created and Update successfully')
                    form.reset()
                }
            })
        })
        .catch(error => console.log(error));
        
    }
  return (
    <div>
      <div className="hero bg-base-200 w-full">
        <div className="hero-content w-full">
          <div className="card shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
            <div className="text-center">
              <h1 className="text-5xl font-bold mt-10">Sign Up</h1> 
            </div>
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Full Name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
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
                <button className="btn bg-[#FD7800] text-white hover:text-[#FD7800] hover:bg-white">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
