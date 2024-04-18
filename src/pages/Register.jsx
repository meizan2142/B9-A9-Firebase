import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
const Register = () => {
    const [showPassword, setShowPassword] = useState(false)
    const handleRegister = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, photo, email, password);
    }
    return (
        <div className="flex justify-center items-center ">
            <Helmet>
                <title>SOLAZ -- Register</title>
            </Helmet>
            <div className="card shadow-2xl bg-base-100">
                <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                        <input type="text" placeholder="Your Name" name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
                    </div>
                    <label className="input input-bordered flex items-center gap-2">
                        <input type={showPassword ? "text" : "password"} name="password" required className="grow" placeholder="Password" />
                        <span onClick={() => setShowPassword(!showPassword)}>
                            {
                                showPassword ? <FaEyeSlash className="w-7 h-7" /> : <FaEye className="w-7 h-7" />
                            }
                        </span>
                    </label>
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