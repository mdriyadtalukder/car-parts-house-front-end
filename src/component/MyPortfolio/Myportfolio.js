import React from 'react';
import Footer from '../Footer/Footer';

const Myportfolio = () => {
    return (
      <div>
            <div className='container text-white text-center'>
            <h1 className='fw-bold text-center mt-3'>My About</h1>
            <div className='d-flex flex-column mb-3 .justify-content-center
align-items-center'>

                <div className='mt-4'>
                    <h4 className='fw-bold'>My Name</h4>
                    <p>Md. Riyad Talukder</p>
                    <h4 className='fw-bold'>My Email Address</h4>
                    <p> mdriyadtalukder69@gmail.com</p>
                    <h4 className='fw-bold'>My Address</h4>
                    <p>Ashulia,Saver,Dhaka</p>
                    <h4 className='fw-bold'>Educational Background</h4>
                    <p>Bsc in Computer Science and Engineering (2020 - Present) <br></br>
                        <span className='fw-bold'> Daffodil International University(DIU)</span></p>
                </div>
            </div>
            <h1 className='fw-bold text-center mt-3'>My Skilss</h1>
            <div className='d-flex flex-column mb-3 .justify-content-center
align-items-center'>

                <div className='mt-4'>
                    <p className='fs-5'><span className='fw-bold'>Expertise: </span>JavaScript, ES6, React.js,, React Bootstrap, HTML, CSS, Bootstrap,</p>
                    <p className='fs-5'><span className='fw-bold'>Comfortable: </span>Node.js, Express.js, MongoDB,Rest API, Firebase authentication,Tailwind CSS.</p>
                    <p className='fs-5'><span className='fw-bold'>Familiar: </span>Redux.js, TypeScript, SASS, React Native.</p>
                    <p className='fs-5'><span className='fw-bold'>Tools: </span>VS Code, Code::Blocks,IntelliJ IDEA, GitHub, Create React App, NPM, Chrome Dev tool,
                        Firebase, Netlify, Heroku.</p>
                </div>
            </div>
            <h1 className='fw-bold text-center mt-3'>Links of three of my projects </h1>
            <div className='d-flex flex-column mb-3 .justify-content-center
align-items-center'>

                <div className='mt-4'>
                    <a className='text-decoration-none fs-5 fw-bold' style={{ color: '#FF3117' }} href="https://jack-fitness-studio.web.app/">Jack Fitness House</a><br />
                    <a className='text-decoration-none fs-5 fw-bold' style={{ color: '#FF3117' }} href="https://gym-equipment-house.web.app/">Gym Equipment House</a><br />
                    <a className='text-decoration-none fs-5 fw-bold' style={{ color: '#FF3117' }} href="https://to-do-app-bb28c.web.app/">To do web app</a>
                </div>
            </div>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default Myportfolio;