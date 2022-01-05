import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../../../Hooks/useAuth';

const UploadImage = () => {
    const { user } = useAuth();
    const { register, formState: { errors }, reset, handleSubmit } = useForm();
    const onSubmit = data => {
        data.isApproved = false;
        data.photographer_email = user.email;
        data.photographer = user.displayName;
        fetch('https://api-picshore.herokuapp.com/images', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if(data?.acknowledged) {
                reset();
            }
        })
        .catch(error => {
            // if (error) {
            //     window.location.reload();
            // }
        });
        console.log(data);
    };
    return (
        <div>
            <div style={{marginBottom:"-95px"}} className='text-center'>
                <img className='img-fluid rounded-circle' src={user?.photoURL} alt="" />
            </div>
            <div style={{minHeight: '45vh'}} className="my-5 d-flex justify-content-center">
                <form style={{maxWidth: '550px', minWidth: '380px'}} className="d-flex flex-column custom-form p-5 shadow-lg rounded" onSubmit={handleSubmit(onSubmit)}>
                    <h4 className="text-center mb-3">Upload</h4>
                    <input className="my-2" placeholder="Title" {...register("title", { required: true})} />
                    {errors.title && <span className="mb-2 text-danger">Something's not correct</span>}

                    <input className="my-2" placeholder="Category" {...register("category", { required: true})} />
                    {errors.category && <span className="mb-2 text-danger">Something's not correct</span>}

                    <textarea className="my-2" placeholder="Short Description (Max 70 Characters)" {...register("short_description", { required: true, maxLength: 70 })} />
                    {errors.short_description && <span className="mb-2 text-danger">Something's not correct</span>}

                    <input className="my-2" placeholder="Image URL" {...register("url", { required: true })} />
                    {errors.img_i && <span className="mb-2 text-danger">Something's not correct</span>}

                    {/* <input type="file" className="my-2" placeholder="Image URL" {...register("url", { required: true })} />
                    {errors.img_i && <span className="mb-2 text-danger">Something's not correct</span>} */}
                    <button type="submit" value="Submit" className='btn btn-custom-2 my-2 py-2'>Share</button>
                   
                </form> 
            </div>
        </div>
    )
}

export default UploadImage;