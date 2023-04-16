import React from 'react';
import './Sidebar.css';
import { Box, Box2Fill, BoxFill, ChevronDown, FileEarmark, FileEarmarkFill, GearFill, MenuDown, People, PeopleFill, PersonFill, Speedometer } from 'react-bootstrap-icons';
import Accordion from 'react-bootstrap/Accordion';
import CustomToggle from '../CustomToggle/CustomToggle';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';

function Sidebar({hide}) {
    return (
        // <div className='sidebar p-2 bg-primary vh-100'>
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
                                <CustomToggle eventKey="1">
                                    <a href="#" className='p-2 text-decoration-none text-secondary d-flex justify-content-between align-items-center navlink'>
                                        <div className='list'>
                                            <Speedometer className='me-2' />
                                            <span>Dashboard</span>
                                        </div>
                                        <div className='arrow'>
                                            <ChevronDown />
                                        </div>
                                    </a>
                                </CustomToggle>
                                <Accordion.Collapse eventKey="1">
                                    <div className="dropdownMenu ps-3">
                                        <ul className='list-unstyled'>
                                            <li>
                                                <a href="#" className='p-2 text-decoration-none text-secondary d-flex align-items-center'>
                                                    <div className='list'>
                                                        <Speedometer className='me-2' />
                                                        <span>Dashboard 1</span>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className='text-decoration-none text-secondary d-flex align-items-center p-2'>
                                                    <div className='list'>
                                                        <Speedometer className='me-2' />
                                                        <span>Dashboard 2</span>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </Accordion.Collapse>
                            </li>
                            <li className='pb-1'>
                                <a href="#" className='p-2 text-decoration-none text-secondary d-flex justify-content-between align-items-center navlink'>
                                    <div className='list'>
                                        <BoxFill className='me-2' />
                                        <span>Products</span>
                                    </div>
                                </a>
                            </li>
                            <li className='pb-1'>
                                <CustomToggle eventKey="0">
                                    <a href="#" className='p-2 text-decoration-none text-secondary d-flex justify-content-between align-items-center navlink'>
                                        <div className='list'>
                                            <PeopleFill className='me-2' />
                                            <span>Users</span>
                                        </div>
                                        <div className='arrow'>
                                            <ChevronDown />
                                        </div>
                                    </a>
                                </CustomToggle>
                                <Accordion.Collapse eventKey="0">
                                    <div className="dropdownMenu ps-3">
                                        <ul className='list-unstyled'>
                                            <li>
                                                <a href="#" className='p-2 text-decoration-none text-secondary d-flex align-items-center'>
                                                    <div className='list'>
                                                        <PersonFill className='me-2' />
                                                        <span>Admin</span>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className='text-decoration-none text-secondary d-flex align-items-center p-2'>
                                                    <div className='list'>
                                                        <PersonFill className='me-2' />
                                                        <span>User</span>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </Accordion.Collapse>
                            </li>
                            <li className='pb-1'>
                                <a href="#" className='p-2 text-decoration-none text-secondary d-flex justify-content-between align-items-center navlink'>
                                    <div className='list'>
                                        <FileEarmarkFill className='me-2' />
                                        <span>Pages</span>
                                    </div>
                                </a>
                            </li>
                            <li className='pb-1'>
                                <a href="#" className='p-2 text-decoration-none text-secondary d-flex justify-content-between align-items-center navlink'>
                                    <div className='list'>
                                        <GearFill className='me-2' />
                                        <span>Setting</span>
                                    </div>
                                </a>
                            </li>
                        </Accordion>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Sidebar
