import { ImageList } from '@mui/material';
import React, { useEffect, useState } from 'react';
import AllImage from '../AllImage/AllImage';

const AllImages = () => {
    const [allImages, setAllImages] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/images')
        .then(res => res.json())
        .then(data => setAllImages(data))
        .catch(error => {
            // if (error) {
            //     window.location.reload();
            // }
        });
    }, []);
    return (
        <div>
            <div className='container'>
                <h4 className="text-center m-4">Manage All Images</h4><hr />
            </div>
            {
                allImages[0]?._id &&
                <div className="container d-flex flex-wrap justify-content-center mt-5">
                {
                    allImages.map(image => {
                        return <AllImage key={image._id} image={image} allImages={allImages} setAllImages={setAllImages} />
                    })
                }
            </div>
            }
        </div>
    )
}

export default AllImages;