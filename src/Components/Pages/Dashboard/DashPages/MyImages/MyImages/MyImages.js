import React, { useEffect, useState } from 'react';
import useAuth from '../../../../../../Hooks/useAuth';
import MyImage from '../MyImage/MyImage';

const MyImages = () => {
    const { user } = useAuth();
    const [myImages, setMyImages] = useState([]);
    useEffect(() => {
        fetch(`https://api-picshore.herokuapp.com/images/${user?.email}`)
        .then(res => res.json())
        .then(data => setMyImages(data))
        .catch(error => {
            // if (error) {
            //     window.location.reload();
            // }
        });
    }, []);
    return (
        <div style={{minHeight: '60vh'}}>
            <div className="container mb-5">
                <h4 className="text-center my-4">My Images</h4><hr />
                <div className="row">
                    {
                        myImages.map(myImage => {
                            return <MyImage key={myImage._id} myImage={myImage} myImages={myImages} setMyImages={setMyImages} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default MyImages;