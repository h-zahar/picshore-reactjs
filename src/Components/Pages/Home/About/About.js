import React from 'react';
import Header from '../../../Shared/Header/Header';
import Footer from '../../../Shared/Footer/Footer';

const About = () => {
    return (
        <div>
            <Header/>
            <div style={{backgroundImage: "url(https://i.ibb.co/59jGW0W/Ansel-Adams.jpg)", backgroundRepeat: "no-repeat", backgroundPosition: 'center', backgroundSize: '2300px 1500px', height: '300px'}} className='d-flex align-items-center justify-content-center'>
                {/* <img className='' src="https://i.ibb.co/59jGW0W/Ansel-Adams.jpg" alt="" /> */}
                <h1 className='fs-1 text-warning'>picshore</h1>
            </div>
            <div className='container'>
                <h2 className='py-3'>About picshore</h2>
                <p>Creativity is in our DNA. Our game-changing innovations are redefining the possibilities of digital experiences. We connect content and data and introduce new technologies that democratize creativity, shape the next generation of storytelling, and inspire entirely new categories of business.</p>
            </div>

            <div class="container overflow-hidden">
                <div class="row gx-5">
                    <div class="col d-flex align-items-center">
                    <div class="p-3">
                        <div>
                        <h2 className='py-3'>Creativity for all</h2>
                        <p>We believe everybody has a story to tell. Adobe Creative Cloud unleashes creativity so anyone — from the most demanding professional to students just starting out — can make whatever they want, wherever they want.</p>
                        </div>
                    </div>
                    </div>
                    <div class="col">
                    <div class="p-3 d-flex align-items-center justify-content-center">
                        <img style={{width:'350px'}} src="https://i.ibb.co/TwsVKfc/main-qimg-6e754ac17bef67db733454df593ddaa3.jpg" alt="" />
                    </div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <img src="https://i.ibb.co/MZ5thKJ/maxresdefault.jpg" alt="" />
            </div>

            <div>
                <h1 className='text-center py-4'>Introducing with the creativity - <strong>picshore</strong></h1>
            </div>

            <div class="container overflow-hidden">
                <div class="row gy-5">
                    <div class="col-3">
                        <div class="p-3 d-flex align-items-center justify-content-center">
                            <img style={{width:'250px', height: '170px'}} src="https://i.ibb.co/TY5hcGH/E59.jpg" alt="" />
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="p-3 d-flex align-items-center justify-content-center">
                            <img style={{width:'250px', height: '170px'}} src="https://i.ibb.co/XS7xf52/15-types-of-photography-to-challenge-your-creativity-5.jpg" alt="" />
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="p-3 d-flex align-items-center justify-content-center">
                            <img style={{width:'250px', height: '170px'}} src="https://i.ibb.co/w4gDTdB/main-qimg-0b0dcb436d9fba09945311d7a624c1e0.jpg" alt="" />
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="p-3 d-flex align-items-center justify-content-center">
                            <img style={{width:'250px', height: '170px'}} src="https://i.ibb.co/DL6G3mT/fisherman-creative-photography-ideas-aka-carson.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default About;