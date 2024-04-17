import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";

const Register = () => {
    return (
        <div className="flex justify-center items-center">
            <Helmet>
                <title>SOLAZ--Register</title>
            </Helmet>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form className="card-body">
                    <div className="form-control">
                        <input type="text" placeholder="Your Name" name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <input type="password" placeholder="Password" name="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary w-full">Register</button>
                    </div>
                </form>
                <div className="text-center mb-4">
                    <p>Already have an account?<br /> Please, <NavLink className="text-primary font-bold" to="/login">Login</NavLink></p>
                </div>
            </div>
        </div>
    );
};

export default Register;