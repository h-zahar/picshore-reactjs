import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import useAuth from '../../../../Hooks/useAuth';
import Footer from '../../../Shared/Footer/Footer';
import Header from '../../../Shared/Header/Header';

const PhotoDetails = () => {
    const { user, admin } = useAuth();

    const { id } = useParams();

    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/images/${id}`)
            .then(res => res.json())
            .then(data => setPhotos(data))
    }, [id])
    return (
        <div style={{overflowX:"hidden"}}>
           <Header/> 
           <div>
               <p>{photos.length}</p>
               <div className="row">
                   <div className="col-md-9 p-3 text-center">
                   <img style={{ height: "30rem" }} className='img-fluid' src={photos?.url} alt="" />
                   </div>
                   <div className="col-md-3 p-4 text-center">
                       <a href={photos?.url} target="_blank" download={photos?.url}><button className='btn btn-custom-2 w-100'>Download</button></a> <br /> <br />
                       <p>Width: {photos?.width}px <span>Height: {photos?.height}px</span> </p>
                      <div className='text-start'>
                      <small className='fw-bold'>Picshore License</small> <br />
                       <small>Free for personal and commercial purpose with attribution. </small> <br />
                       <Link to={'/about'}> <small>More Info</small> </Link>
                      </div>
                       <div>
                           <h6>Photographar</h6>
                          <div className='d-flex justify-content-between align-items-center border p-4'>
                          <div className='d-flex justify-content-start align-items-center'>
                               <img style={{width:"15%"}} className='img-fluid rounded-circle' src="https://i.ibb.co/K688HGy/user.png" alt="" /> 
                               <h6>{photos?.photographer}</h6>
                              
                           </div>
                           <a href={photos?.photographer_url} target="_blank" ><button className='btn btn-outline-info'>Follow</button></a>
                          </div>
                       </div>
                   </div>
               </div>
           </div>
           <div className="row p-4 text-center">
           <h4 className='text-center text-info fw-bold'>More photos in this photographer</h4> <hr />
               <div className="col-md-6 mx-auto">
                   <img className='img-fluid' src={photos?.paidSrc} alt="" />
               </div>
               <div className="col-md-6 mx-auto">
                    <img className='img-fluid' src={photos?.freeSrc} alt="" />
               </div>
           </div>
           <Footer/>
        </div>
    );
};

export default PhotoDetails;