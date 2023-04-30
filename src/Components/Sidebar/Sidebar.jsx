import React, { useState } from 'react';
import './Sidebar.css';
import { Box, Box2Fill, BoxFill, ChevronDown, ChevronRight, FileEarmark, FileEarmarkFill, GearFill, MenuDown, People, PeopleFill, PersonFill, Speedometer } from 'react-bootstrap-icons';
import Accordion from 'react-bootstrap/Accordion';
import CustomToggle from '../CustomToggle/CustomToggle';
import { NavLink } from 'react-router-dom';

function Sidebar({ hide }) {

    const [down, setDown] = useState(false);

    const handleDrop = () => {
        setDown(!down);
    }

    return (
        <div className={hide ? 'sidebar p-2 bg-primary vh-100 hide' : 'sidebar p-2 bg-primary vh-100'}>
            <div className="logo p-2">
                <h3 className='text-center'>
                    <a href="#" className='text-light text-decoration-none'>BANSI</a>
                </h3>
            </div>
            <div className="menu p-1">
                <nav>
                    <h6 className='text-light p-2'>Menu</h6>
                    <ul className='list-unstyled'>
                        <Accordion defaultActiveKey="0">
                            <li className='pb-1'>
                                <NavLink to='/dashboard' className='p-2 text-decoration-none text-secondary d-flex justify-content-between align-items-center navlink'>
                                    <div className='list'>
                                        <Speedometer className='me-2' />
                                        <span>Dashboard</span>
                                    </div>
                                </NavLink>
                            </li>
                            <li className='pb-1'>
                                <NavLink to='product' className='p-2 text-decoration-none text-secondary d-flex justify-content-between align-items-center navlink'>
                                    <div className='list'>
                                        <BoxFill className='me-2' />
                                        <span>Products</span>
                                    </div>
                                </NavLink>
                            </li>
                            <li className='pb-1'>
                                <CustomToggle eventKey="0">
                                    <NavLink to='/dashboard' className='p-2 text-decoration-none text-secondary d-flex justify-content-between align-items-center navlink' onClick={() => handleDrop()}>
                                        <div className='list'>
                                            <PeopleFill className='me-2' />
                                            <span>Users</span>
                                        </div>
                                        <div className='arrow'>
                                            {
                                                down ?
                                                    <ChevronDown /> :
                                                    <ChevronRight />
                                            }
                                        </div>
                                    </NavLink>
                                </CustomToggle>
                                <Accordion.Collapse eventKey="0">
                                    <div className="dropdownMenu ps-3">
                                        <ul className='list-unstyled'>
                                            <li>
                                                <NavLink to='/admin' className='p-2 text-decoration-none text-secondary d-flex align-items-center'>
                                                    <div className='list'>
                                                        <PersonFill className='me-2' />
                                                        <span>Admin</span>
                                                    </div>
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to='/user' className='text-decoration-none text-secondary d-flex align-items-center p-2'>
                                                    <div className='list'>
                                                        <PersonFill className='me-2' />
                                                        <span>User</span>
                                                    </div>
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </Accordion.Collapse>
                            </li>
                            <li className='pb-1'>
                                <NavLink to='/dashboard' className='p-2 text-decoration-none text-secondary d-flex justify-content-between align-items-center navlink' onClick={() => handleDrop()}>
                                    <div className='list'>
                                        <FileEarmarkFill className='me-2' />
                                        <span>Pages</span>
                                    </div>
                                </NavLink>
                            </li>
                            <li className='pb-1'>
                                <NavLink to='/setting' className='p-2 text-decoration-none text-secondary d-flex justify-content-between align-items-center navlink'>
                                    <div className='list'>
                                        <GearFill className='me-2' />
                                        <span>Setting</span>
                                    </div>
                                </NavLink>
                            </li>
                        </Accordion>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Sidebar
