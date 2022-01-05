import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Photo from './Photo';
import "./Photos.css";

const Photos = () => {
    const [categories, setCategories] = useState([]);
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/images/featured`)
            .then(res => res.json())
            .then(data =>{
                setImages(data);
                setCategories(data);
            } )
    }, [])
// Filter
const filterResult = (paidPhotos) => {
    const result = images.filter(currentData => {
        return currentData.option === paidPhotos;
    });
    setCategories(result);
    // console.log(result)
}

// Search
    const handleSearch = e =>{
        const searchText = e.target.value;
        const result = images.filter(photo=>photo.category.toLowerCase().includes(searchText.toLowerCase()));
        setCategories(result);
}
    return (
        <div className='bg-light'>
            <div className="bannerTop py-5">
                <div className="bannerInput text-center p-4 text-light">
                    <h1>Graphic resources for everyone</h1>
                    <h3>Download High-Quality Images. Free Stock Photos, Vectors & PSD</h3>
                   <div className="text-center pt-2 custom-form my-3"> 
                        <input placeholder='Search Category' className='custom-input w-50' type="text" onChange={handleSearch} />
                        <p>Examples:
Nature New year background Wallpaper</p>
                    </div> 
                    <button onClick={() => filterResult('Paid')} className='btn btn-custom-2 mx-2'>PAID</button>
                    <button onClick={() => filterResult('Free')} className='btn btn-custom mx-2'>FREE</button>
                    <button onClick={() => setCategories(images)} className='btn btn-custom mx-2'>ALL</button>
                </div>
            </div>
            <div className="container">
                <div className="text-center pt-2">
                    <h4 className="fw-bold text-primary p-2">Feature Photo</h4>
                    <hr />
                </div>
                
                <div className="row row-cols-1 row-cols-md-3 gy-4">
                    {categories.length == 0 ?
                        <div className="w-100 text-center">
                            <CircularProgress />
                        </div>
                        :
                        categories.slice(0,12).map(image => <Photo
                            key={image._id}
                            image={image}
                        />)
                    }
                </div>
                <div className="text-center pt-4">
                    <Link to="/photos"><button className="btn btn-outline-primary p-3 rounded-pill mb-5">View More</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Photos;