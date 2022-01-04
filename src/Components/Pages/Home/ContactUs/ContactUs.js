import React from 'react';
import Header from '../../../Shared/Header/Header';
import Footer from '../../../Shared/Footer/Footer';

const ContactUs = () => {
    return (
        <div>
            <Header/>
            <h1 className='text-center'>Contact</h1>
            <div className='container'>
                <form class="row g-3">
                    <div class="col-md-6">
                        <label for="inputName" class="form-label">Name</label>
                        <input type="text" class="form-control" id="inputName" placeholder=""/>
                    </div>
                    <div class="col-md-6">
                        <label for="inputEmail4" class="form-label">Email</label>
                        <input type="email" class="form-control" id="inputEmail4"/>
                    </div>
                    <div class="col-12">
                        <label for="inputAddress" class="form-label">Address</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder=""/>
                    </div>
                    <div class="col-12">
                        <label for="inputAddress2" class="form-label">Address 2</label>
                        <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                    </div>
                    <div class="col-md-6">
                        <label for="inputCity" class="form-label">City</label>
                        <input type="text" class="form-control" id="inputCity"/>
                    </div>
                    <div class="col-md-4">
                        <label for="inputState" class="form-label">State</label>
                        <select id="inputState" class="form-select">
                        <option selected>Choose...</option>
                        <option>Dhaka</option>
                        <option>Chittagong</option>
                        <option>Rajshahi</option>
                        <option>Khulna</option>
                        <option>Rangpur</option>
                        <option>Barishal</option>
                        <option>Sylhet</option>
                        <option>Mymensingh</option>
                        </select>
                    </div>
                    <div class="col-md-2">
                        <label for="inputZip" class="form-label">Zip</label>
                        <input type="text" class="form-control" id="inputZip"/>
                    </div>
                    <div class="col-12">
                        <label for="inputMessage" class="form-label">Message</label>
                        <textarea type="text" class="form-control" id="inputMessage" placeholder=""/>
                    </div>
                    <div class="col-12">
                        <button type="submit" class="btn btn-primary">Send Message</button>
                    </div>
                </form>
            </div>
            <Footer/>
        </div>
    );
};

export default ContactUs;