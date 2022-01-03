import React from 'react';

const Photo = ({photo}) => {
    const {url,paidSrc,freeSrc}=photo;
    return (
        <div>

            <div className="col">
                <div>
                   
                        <img className='img-fluid' src={paidSrc} alt="" />
                        <img className='img-fluid' src={freeSrc} alt="" />
                        <img className='img-fluid' src={url} alt="" />
                   
                    {/* <div className="px-4 d-flex justify-content-between">
                        <Link to={`/mobile/${_id}`}><button className="btn btn-custom-2">OVERVIEW</button></Link>
                        <Link to={`/mobile2/${_id}`}><button className="btn btn-custom">BUY NOW</button></Link>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Photo;