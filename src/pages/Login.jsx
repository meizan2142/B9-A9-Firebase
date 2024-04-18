import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";

const Login = () => {
    const handleSignIn = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
    }
    return (
        <div className="flex justify-center items-center">
            <Helmet>
                <title>SOLAZ--Login</title>
            </Helmet>
            <div className="card shadow-2xl bg-base-100">
                <form onSubmit={handleSignIn} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Password" name="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                            <button className="btn btn-primary w-full">Login</button>
                    </div>
                </form>
                    <div className="text-center">
                        <p>Do not have an account? <br /> Please, <NavLink className="text-primary font-bold" to="/register">Register</NavLink></p>
                    </div>
                    <div className="m-6 space-y-5 ">
                        <button className="btn btn-primary w-full">Singin With Google</button>
                        <button className="btn btn-primary w-full">Signin With Github</button>
                    </div>
            </div>
        </div>
    );
};

export default Login;