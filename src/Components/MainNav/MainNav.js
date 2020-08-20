import React from 'react';

// IMPORTING REACT ICONS
import { MdAccessTime } from 'react-icons/md';

// IMPORTING CUSTOM CSS
import './mainNav.css';

// IMPORTING FROM REACT ROUTER DOM
import { Link } from 'react-router-dom';


const MainNav = () => {
    return (
        <div className='main-nav'>
            <nav className="navbar nav2 navbar-expand-lg ">
                <ul className="nav mr-3">
                    <li className="nav-item">
                        <a className="nav-link pr-4 links font-weight-bold" href="#">Overview</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link pr-4 links font-weight-bold" href="#">Teams</a>
                    </li>
                    <li className="nav-item">
                        <Link to='/' className="nav-link pr-4 links font-weight-bold">Modules</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/test' className="nav-link pr-4 links font-weight-bold">Test</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link pr-4 links font-weight-bold" href="#">Files</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link pr-5 links font-weight-bold" href="#">Progress</a>
                    </li>
                </ul>

                <ul className="nav mx-auto pr-5">
                    <li className="nav-item">
                        <p className='nav-link task pr-5 disabled my-auto font-weight-bold'>All Task</p>
                    </li>
                    <li className="nav-item">
                        <div className="custom-control pt-2 tog-color ml-3 custom-switch">
                            <input type="checkbox" className="custom-control-input tog-color my-auto" id="customSwitch1" />
                            <label className="custom-control-label tog-color" htmlFor="customSwitch1"></label>
                        </div>
                    </li>
                    <li className="nav-item">
                        <p className='nav-link modules disabled my-auto font-weight-bold'>All Modules</p>
                    </li>
                </ul>

                <ul className="nav ml-auto">
                    <li className="nav-item">
                        <MdAccessTime style={{ fontSize: '40px' }} className='nav-link d-none d-md-block text pr-0 disabled my-auto font-weight-bold' />
                    </li>
                    <li className="nav-item">
                        <p className='nav-link d-none d-md-block font-weight-bold text disabled my-auto'>Project Deadline : 6 weeks</p>
                    </li>
                </ul>
            </nav >
        </div>
    )
}

export default MainNav
