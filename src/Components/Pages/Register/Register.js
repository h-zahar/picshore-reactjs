import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Header from '../../Shared/Header/Header';

const Register = () => {
    const { accessWithGoogle, registerWithMail, isAdmin, registerError, googleRegisterError } = useAuth();
    const location = useLocation();
    const history = useHistory();
    let redirected_uri = location.state?.from || '/dashboard';

    if (isAdmin) {
        redirected_uri = '/dashboard/admin/all-orders';
    }

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        const { fullName, email, password, checkPassword } = data;
        if (password !== checkPassword) {
            return window.alert(`Password Didn't Match!!!`);
        }

        registerWithMail(fullName, email, password, history, redirected_uri);
    };

    const handleAccessWithGoogle = () => {
        accessWithGoogle(history, redirected_uri, 'register');
    }
    return (
        <div>
            <Header />
            <div>
                <div className='container'>
                    <div style={{width: '100%'}} className="mb-4">
                        <div style={{maxWidth: '400px', minWidth: '250px'}} className="py-4 px-5 mx-auto shadow-lg rounded" >
                            <form className="form-sizing d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
                                <h3 className="text-center mb-5 mt-4">Register</h3>

                                <label><strong>Enter Name</strong></label>
                                <input className="px-2 mt-2 mb-3" placeholder="John Son" {...register("fullName", { required: true })} />
                                {errors.fullName && <span className="mb-2 text-danger">Something's not correct</span>}

                                <label><strong>Enter Email</strong></label>
                                <input className="px-2 mt-2 mb-3" placeholder="johnson24@gmail.com" type="email" {...register("email", { required: true })} />
                                {errors.email && <span className="mb-2 text-danger">Something's not correct</span>}

                                <label><strong>Set Passsword</strong></label>
                                <input className="px-2 mt-2 mb-3" placeholder="Set a strong one!" type="password" {...register("password", { required: true })} />
                                {errors.password && <span className="mb-2 text-danger">Something's not correct</span>}

                                <label><strong>Re-Enter Passsword</strong></label>
                                <input className="px-2 mt-2 mb-3" placeholder="Type your original again!" type="password" {...register("checkPassword", { required: true })} />
                                {errors.checkPassword && <span className="mb-2 text-danger">Something's not correct</span>}

                                {
                                    registerError &&
                                    <p className="text-danger text-center">[ {registerError.split('/')[1].split('-').join(' ')[0].toUpperCase()+registerError.split('/')[1].split('-').join(' ').substring(1)} ]</p>    
                                }

                                {
                                    googleRegisterError &&
                                    <p className="text-danger text-center">[ {googleRegisterError.split('/')[1].split('-').join(' ')[0].toUpperCase()+googleRegisterError.split('/')[1].split('-').join(' ').substring(1)} ]</p>    
                                }


                                <div className="mx-auto"><input className="my-3" type="submit" value="Register" /></div>

                                <div>
                                    
                                    <p className="border-top pt-2 mt-3 mb-0 text-center">Or, Sign Up With Google</p>
                                    <div className="d-flex justify-content-center">
                                        <button type="button" onClick={handleAccessWithGoogle} className="mt-3 btn-google"><i className="fa-brands fa-google" /></button>
                                    </div>
                                    <div className="mt-4 mb-2 text-center">
                                        <p>Already Here? <Link to="/login">Login</Link></p>
                                    </div>
                                </div>

                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;