import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Photo from './Photo';

const Photos = () => {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/h-zahar/picshore-reactjs/structure/public/photo.json`)
            .then(res => res.json())
            .then(data => setPhotos(data))
    }, [])
    return (
        <div className='bg-light'>
            <div className="container">
                <div className="text-center pt-2">
                    <h4 className="fw-bold text-primary p-2">Feature Photo</h4>
                    <hr />
                </div>
                <div className="row row-cols-1 row-cols-md-3">
                    {photos.length == 0 ?
                        <div className="w-100 text-center">
                            <CircularProgress />
                        </div>
                        :
                        photos.map(photo => <Photo
                            key={photo.id}
                            photo={photo}
                        />)
                    }
                </div>
                {/* <div className="text-center pt-4">
                    <Link to="/photos"><button className="btn btn-outline-primary p-3 rounded-pill mb-5">View More</button></Link>
                </div> */}
            </div>
        </div>
    );
};

export default Photos;