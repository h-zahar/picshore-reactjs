import React from 'react';
import { Link } from 'react-router-dom';

const Photo = ({image}) => {
    const {url,_id}=image;
    return (
        <div>

            <div className="col">
                    <div className='border'>
                       <img style={{height:"20rem"}} className='img-fluid w-100' src={url} alt="" />
                       <div className="px-4 d-flex justify-content-end text-center">
                           <Link to={`image/${_id}`}><button className="btn btn-outline-warning px-4"><i className="fas fa-download"></i> </button></Link>
                        <Link to={`image/${_id}`} className="btn "><i className="far fa-heart text-danger"></i></Link>
                        <Link to={`image/${_id}`}><button className="btn btn-custom-2">Share</button></Link>
                    </div>  
                    </div>
            </div>
        </div>
    );
};

export default Photo;