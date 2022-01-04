import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import useAuth from '../../../../Hooks/useAuth';
import Header from '../../../Shared/Header/Header';

const PhotoDetails = () => {
    const { user, admin } = useAuth();

    const { id } = useParams();

    const [photos, setPhotos] = useState([]);

    // useEffect(() => {
    //     fetch(`https://raw.githubusercontent.com/h-zahar/picshore-reactjs/photos/public/photo.json/${id}`)
    //         .then(res => res.json())
    //         .then(data => setPhotos(data))
    // }, [id])
    return (
        <div>
           <Header/> 
           <div>
               <p>{photos.length}</p>
               <div className="row">
                   <div className="col-md-6">
                       <img className='img-fluid' src={photos?.url} alt="" />
                   </div>
               </div>
           </div>
        </div>
    );
};

export default PhotoDetails;