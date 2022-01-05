import React from 'react';

const AllImage = (props) => {
    const { image } = props;
    const { _id, title, fullName, email, address, phoneNumber, isApproved } = props.image;
    const { allImages, setAllImages } = props;

    const handleApproval = (id) => {
        fetch(`https://api-picshore.herokuapp.com/images`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(image)
        })
        .then(res => res.json())
        .then(data => {
            image.isApproved = data.isApproved;
            const updated = allImages.map(single => {
                if (single._id === id) {
                    single.isApproved = image.isApproved;
                    return single;
                }
                else {
                    return single;
                }
            })
            setAllImages(updated);
        })
        .catch(error => { 
            // if(error) {
            //     window.location.reload();
            // }
         });
    };

    const handleDelete = (id) => {
        if(!window.confirm('Are you sure to cancel?')) {
            return;
        }
        fetch(`https://api-picshore.herokuapp.com/images/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'aplplication/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data?.deletedCount === 1) {
                const remaining = allImages.filter(single => single._id !== id);
                setAllImages(remaining);
            }
        })
        .catch(error => {
            // if (error) {
            //     window.location.reload();
            // }
        });
    }

    return (
        <div>
            <div style={{border: '1px solid rgba(0, 0, 0, 0.5)'}} className="px-3 py-4 mx-1 my-2">
                <p>1. ID: <span className="text-primary">{_id}</span></p>
                {/* <p>2. Email: <span className="text-primary">{email}</span></p>
                <p>3. Product: {title}</p>
                <p>4. Orderer: {fullName}</p> 
                <p>5. Address: {address}</p>
                <p>6. Cell No: {phoneNumber}</p> */}
                <p>7. {
                    !isApproved &&
                    <button style={{background: 'none', border: 'none'}} onClick={() => handleApproval(_id)}><span className="text-danger">Pending</span></button>
                }
                {
                    isApproved &&
                    <button style={{background: 'none', border: 'none'}}><span className="text-success" onClick={() => handleApproval(_id)}>Approved</span></button>
                }</p>
                <p>8. <button style={{background: 'none', border: 'none'}}><span className="text-danger" onClick={() => handleDelete(_id)}>Cancel?</span></button></p>
            </div>
        </div>
    )
}

export default AllImage;