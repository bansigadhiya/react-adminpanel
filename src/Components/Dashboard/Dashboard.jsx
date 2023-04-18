import React from 'react';
import './Dashboard.css';
import { Activity, Calendar2, Calendar2Fill, PlusCircle } from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';

function OffCanvas({ name, ...props }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button className='bg-primary border-0 py-1' onClick={handleShow}>
                <Activity />
            </Button>
            <Offcanvas show={show} onHide={handleClose} {...props}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

function Dashboard() {
    return (
        <div className='container-fluid py-3'>
            <div className="d-flex align-items-center">
                <div className="col-6 greeting align-items-center">
                    <h6 className='mb-1'>Good Morning , Bansi !</h6>
                    <p className='mb-0'>Here's what's happening with your store today.</p>
                </div>
                <div className="col-6 d-flex align-items-center mx-2 justify-content-end pe-2">
                    <div className="calender d-flex align-items-center shadow-sm">
                        <div className="w-10  py-1 px-2 bg-white rounded-start">
                            <span>1 jan 2022 to 31 dec 2022</span>
                        </div>
                        <div className="w-2 bg-primary py-1 px-2 rounded-end">
                            <Calendar2Fill className='text-white calender-icon' />
                        </div>
                    </div>
                    <div className="cta-btn">
                        <Button className='mx-2 bg-primary border-0 py-1'>
                            <PlusCircle className='me-2' />
                            <span>Add Product</span>
                        </Button>
                    </div>
                    <div className="recentActivity">
                        <OffCanvas placement={'end'} name={'end'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard