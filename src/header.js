import React from 'react'
import header from './images/header-teamwork.svg';


export default function Header() {
    return (
        <>
            {/* <!-- Header --> */}
            <header id="header" className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="text-container">
                                <h1 className="h1-large"><span className="blue">Young StartUp</span> Website Template</h1>
                                <p className="p-large">Use Evolo website template to promote your business startup and generate leads for the offered services</p>
                                <a className="btn-solid-lg page-scroll" href="#services">Discover</a>
                            </div>
                            {/* <!-- end of text-container --> */}
                        </div>
                        {/* <!-- end of div --> */}
                        <div className="col-lg-6">
                            <div className="image-container">
                                <img className="img-fluid" src={header} alt="alternative" />
                            </div>
                            {/* <!-- end of image-container --> */}
                        </div>
                        {/* <!-- end of col --> */}
                    </div>
                    {/* <!-- end of row --> */}
                </div>
                {/* <!-- end of container --> */}
            </header>
            {/* <!-- end of header --> */}
        </>
    )
}
