import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import useTitle from "../../hooks/useTitle";



const Register = () => {
    useTitle('Register')
    const { createAccountWithEmailAndPassword } = useContext(AuthContext);

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoUrl = form.photoUrl.value;
        const password = form.password.value;
        console.log(email, password, name, photoUrl);
        createAccountWithEmailAndPassword(email, password, name, photoUrl)
            .then(user => {
                // Account creation and profile update successful
                console.log('User created:', user);
                toast.success('User Register Sucessfull', {
                    position: "top-right",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            })
            .catch(error => {
                // Handle error
                console.error('Error creating account:', error);
                toast.error('Register Failed. Please Try Again!', {
                    position: "top-right",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            });
            form.reset();
    };

    return (
        <div>
            <div className="hero min-h-screen   bg-[#F379A7]">
                <div className="hero-content   flex-col lg:flex-row">
                    <div className="card w-[400px] shadow-2xl bg-[#c2e0eb3b] relative">
                        <div className="absolute left-[33%] -top-12">
                            <img
                                className="rounded-full w-36  "
                                src="https://icon-library.com/images/animated-gif-icon/animated-gif-icon-9.jpg"
                                alt=""
                            />
                        </div>
                        <div className="card-body">
                            <h1 className="text-2xl font-bold text-center mt-10">
                                Please Register
                            </h1>
                            <form onSubmit={handleRegister}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        className="input input-bordered"
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        placeholder="email"
                                        className="input input-bordered"
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input
                                        type="url"
                                        name="photoUrl"
                                        placeholder="Photo URL"
                                        className="input input-bordered"
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        required
                                        placeholder="password"
                                        className="input input-bordered"
                                    />
                                </div>
                                <div className="form-control mt-6">
                                    <input
                                        className="btn bg-[#F379A7] font-bold text-2xl text-white hover:bg-[#C2E0EB]"
                                        type="submit"
                                        value="Register"
                                    />
                                </div>
                            </form>
                            <p className="text-center">
                                Already have an account?{" "}
                                <Link className="font-bold text-black" to="/login">
                                    Login
                                </Link>
                            </p>
                        </div>
                    </div>
                    <ToastContainer></ToastContainer>
                </div>
            </div>
        </div>
    );
};

export default Register;