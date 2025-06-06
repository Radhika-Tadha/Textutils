
import React from 'react';
import PropTypes from 'prop-types';
// import React, { useState } from 'react';
import { Link } from "react-router-dom";


export default function Navbar(props) {
    return (
        <div>
            <>
                <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">{props.title}</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">{props.Abouttext}</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/form">{props.UserForm}</Link>
                                </li>
                            </ul>
                            <div className="d-flex">
                                <div className="bg-primary rounded mx-2" onClick={() => { props.toggleMode('Primary') }} style={{ height: '25px', width: '25px', cursor: 'pointer' }}></div>
                                <div className="bg-danger rounded mx-2" onClick={() => { props.toggleMode('danger') }} style={{ height: '25px', width: '25px', cursor: 'pointer' }}></div>
                                <div className="bg-success rounded mx-2" onClick={() => { props.toggleMode('success') }} style={{ height: '25px', width: '25px', cursor: 'pointer' }}></div>
                                <div className="bg-warning rounded mx-2" onClick={() => { props.toggleMode('warning') }} style={{ height: '25px', width: '25px', cursor: 'pointer' }}></div>
                            </div>
                          {/*ternary operator */}
                            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>  
                                <input className="form-check-input large-switch" onClick={() => { props.toggleMode(null) }} type="checkbox" role="switch" id="switchCheckDefault" />
                                <label className="form-check-label" htmlFor="switchCheckDefault">Togglr Mode</label>
                            </div>
                        </div>
                    </div>
                </nav>
            </>
        </div>
    )
}
Navbar.protoType = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string
}
Navbar.defaultProps = {
    title: 'set title here',
    aboutText: 'About text'
}
