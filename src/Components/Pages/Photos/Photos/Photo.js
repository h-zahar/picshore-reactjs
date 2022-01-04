import React from 'react';
import { Link } from 'react-router-dom';

const Photo = ({photo}) => {
    const {url,id}=photo;
    return (
        <div>

            <div className="col">
                    <div className='border'>
                       <img style={{height:"20rem"}} className='img-fluid w-100' src={url} alt="" />
                       <div className="px-4 d-flex justify-content-end text-center">
                           <a href="#" download={url} rel='noreferrer'><i className="fas fa-download"></i></a>
                        
                        <Link to={`/mobile2`} className="btn "><i className="far fa-heart text-danger"></i></Link>
                        <Link to={`photo/${id}`}><button className="btn btn-custom-2">Share</button></Link>
                    </div>  
                    </div>
            </div>
        </div>
    );
};

export default Photo;