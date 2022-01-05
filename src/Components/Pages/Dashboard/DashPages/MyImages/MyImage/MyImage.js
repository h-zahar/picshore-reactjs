import React from 'react';

const MyImage = (props) => {
    const { _id, isApproved } = props.myImage;
    const { myImages, setMyImages } = props;

    const handleDelete = (id) => {
        if(!window.confirm('Are you sure to cancel?')) {
            return;
        }
        fetch(`http://localhost:5000/images/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'aplplication/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data?.deletedCount === 1) {
                const remaining = myImages.filter(single => single._id !== id);
                setMyImages(remaining);
            }
        })
        .catch(error => {
            // if (error) {
            //     window.location.reload();
            // }
        });
    };

    return (
        <div xs={12} sm={6} md={4} lg={3} className="col border d-flex justify-content-center py-3 mx-2 gy-2 shadow-lg">
            <div>
                {/* <h4>{title}</h4> */}
                <p className="my-3 text-secondary">{_id}</p>
                <div>
                    {
                        !isApproved ?
                        <p className="my-3">Status: <span className="text-danger">Pending</span></p> :
                        <p className="my-3">Status: <span className="text-success">Approved</span></p>
                    }
                </div>
                <div>
                    <button style={{background: 'none', border: 'none'}} onClick={() => handleDelete(_id)}><span className="text-danger">Cancel?</span></button>
                </div>
            </div>
        </div>
    )
}

export default MyImage;