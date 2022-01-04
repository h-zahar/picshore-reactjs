import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Header from '../../../Shared/Header/Header';
import Photo from './Photo';

const ExplorePhotos = () => {
    const [categories, setCategories] = useState([]);
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/images`)
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
    <Header/>
            <div className="py-3">
                <div className="bannerInput text-center p-4 text-light">
                   <div className="text-center pt-2 custom-form my-3"> 
                        <input placeholder='Search Category' className='custom-input w-50' type="text" onChange={handleSearch} />
                    </div> 
                    <button onClick={() => filterResult('Paid')} className='btn btn-custom-2 mx-2'>PAID</button>
                    <button onClick={() => filterResult('Free')} className='btn btn-custom mx-2'>FREE</button>
                    <button onClick={() => setCategories(images)} className='btn btn-custom mx-2'>ALL</button>
                </div>
            </div>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 gy-4">
                    {categories.length == 0 ?
                        <div className="w-100 text-center">
                            <CircularProgress />
                        </div>
                        :
                        categories.map(image => <Photo
                            key={image._id}
                            image={image}
                        />)
                    }
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default ExplorePhotos;