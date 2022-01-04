import React from 'react';
import { Link } from 'react-router-dom';

const Photo = ({photo}) => {
    const {url}=photo;
    return (
        <div>

            <div className="col">
                       <div>
                       <img style={{height:"20rem"}} className='img-fluid w-100' src={url} alt="" />
                       <div className="px-4 d-flex justify-content-between">
                        <Link to={`mobiles`}><button className="btn btn-custom-2">OVERVIEW</button></Link>
                        <Link to={`/mobile2`}><button className="btn btn-custom">BUY NOW</button></Link>
                    </div>  
                       </div>
            </div>
        </div>
    );
};

export default Photo;