import React from 'react';
import { Link } from 'react-router-dom';
import {
    FacebookShareButton,
    FacebookIcon,

} from "react-share";


const Photo = ({image}) => {
    const {url,_id,photographer}=image;
    const shareUrl = `https://picshorecorps.web.app/images/${_id}`;

    return (
        <div>

            <div className="col">
                    <div className='border'>
                       <img style={{height:"20rem"}} className='img-fluid w-100' src={url} alt="" />
                       <div className="px-4 d-flex justify-content-end align-items-center btn-custom text-end">
                           <Link to={`image/${_id}`}><button className="btn "><i className="fas text-light fs-5  fa-download"></i> </button></Link>
                        <Link to={`image/${_id}`} className="btn "><i className="far fs-5 fa-heart text-light"></i></Link>
                        {/* <Link to={`image/${_id}`}><button className="btn btn-custom-2">Share</button></Link> */}
                        <FacebookShareButton url={shareUrl} quote={url} hashtag={photographer}>
                                <FacebookIcon size={37} />
                            </FacebookShareButton>

                    </div>  
                    </div>
            </div>
        </div>
    );
};

export default Photo;