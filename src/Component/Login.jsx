import { NavLink } from "react-router-dom";

const Login = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form className="card-body">
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
                        <NavLink to="/login">
                            <button className="btn btn-primary w-full">Login</button>
                        </NavLink>
                    </div>
                    <div className="space-y-2">
                        <button className="btn btn-primary w-full">SingIn With Google</button>
                        <button className="btn btn-primary w-full">SignIn With Github</button>
                    </div>
                    <div className="text-center">
                        <p>Are you New to here, please <NavLink className="text-primary underline" to="/register">Register</NavLink></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;