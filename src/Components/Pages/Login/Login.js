import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation, Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Header from '../../Shared/Header/Header';

const Login = () => {
    const { accessWithGoogle, loginWithMail, isAdmin, loginError, googleLoginError } = useAuth();
    const location = useLocation();
    const history = useHistory();
    let redirected_uri = location.state?.from || '/dashboard';
    
    if (isAdmin) {
        redirected_uri = '/dashboard/admin/all-orders';
    }

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        const { email, password } = data;

        loginWithMail(email, password, history, redirected_uri);
    };

    const handleAccessWithGoogle = () => {
        accessWithGoogle(history, redirected_uri, 'login');
    }
    
    return (
        <div>
            <Header />
            <div>
                <div className='conatiner'>
                    <div style={{width: '100%'}} className="mb-4">
                        <div style={{maxWidth: '400px', minWidth: '250px'}} className="py-4 px-5 mx-auto shadow-lg rounded" >
                            <form className="form-sizing d-flex custom-form flex-column" onSubmit={handleSubmit(onSubmit)}>
                                <h3 className="text-center mb-5 mt-4">Login</h3>

                                <label><strong>Enter Email</strong></label>
                                <input className="px-2 mt-2 mb-3" placeholder="example@provider.com" type="email" {...register("email", { required: true })} />
                                {errors.email && <span className="mb-2 text-danger">Something's not correct</span>}

                                <label><strong>Enter Passsword</strong></label>
                                <input className="px-2 mt-2 mb-3" placeholder="Drop your password :D" type="password" {...register("password", { required: true })} />
                                {errors.password && <span className="mb-2 text-danger">Something's not correct</span>}

                                {
                                    loginError &&
                                    <p className="text-danger text-center">[ {loginError.split('/')[1].split('-').join(' ')[0].toUpperCase()+loginError.split('/')[1].split('-').join(' ').substring(1)} ]</p>    
                                }

                                {
                                    googleLoginError &&
                                    <p className="text-danger text-center">[ {googleLoginError.split('/')[1].split('-').join(' ')[0].toUpperCase()+googleLoginError.split('/')[1].split('-').join(' ').substring(1)} ]</p>    
                                }
                        

                                <div className="mx-auto"><input className="my-3" type="submit" value="Login" /></div>

                                <div>
                                <p className="border-top pt-2 mt-3 mb-0 text-center">Or, Sign In With Google</p>
                                <div className="d-flex justify-content-center">
                                    <button type="button" onClick={handleAccessWithGoogle} className="mt-3 btn-google"><i className="fa-brands fa-google" /></button>
                                </div>
                                <div className="mt-4 mb-2 text-center">
                                    <p>New Here? <Link to="/register">Register</Link></p>
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

export default Login;