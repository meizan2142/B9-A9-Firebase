import { NavLink } from "react-router-dom";

const Register = () => {
    const handleRegister = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;
        console.log(name, email, password, photo);
    }
    return (
        <div className="flex justify-center items-center">
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
                    <div className="form-control">
                        <input type="password" placeholder="Password" name="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <NavLink to="/login">
                            <button className="btn btn-primary w-full">Register</button>
                        </NavLink>
                    </div>
                    <div className="text-center">
                        <p>Already have an account?please,<NavLink className="text-primary underline" to="/login">Login</NavLink></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;