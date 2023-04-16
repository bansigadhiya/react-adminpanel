import React from 'react'
import { Bag, Bell, Flag, FlagFill, Fullscreen, Grid, GridFill, List, Moon, Search } from 'react-bootstrap-icons';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './Header.css';

function Header({ handleSidebarToggle }) {
  return (
    <>
      <header className='py-2 bg-white'>
        <div className="container-fluid">
          <div className="col">
            <div className="d-flex align-items-center">
              <div className="col-6 d-flex align-items-center">
                <div className="col-1 toggle-menu">
                  <button type='button' className='bg-transparent border-0' onClick={() => handleSidebarToggle()}>
                    <List className='fs-3 text-dark' />
                  </button>
                </div>
                <div className="col-5">
                  <InputGroup className='bg-light rounded py-1'>
                    <InputGroup.Text id="basic-addon1" className='bg-transparent border-0 search'>
                      <Search />
                    </InputGroup.Text>
                    <Form.Control
                      placeholder="search here.."
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      className='bg-transparent border-0 search px-0'
                    />
                  </InputGroup>
                </div>
              </div>
              <div className="col-6 d-flex align-items-center">
                <div className="col d-flex align-items-center justify-content-end">
                  <div className="header-icon">
                    <ul className='d-flex list-unstyled mb-0'>
                      <li className='px-2'>
                        <a href="javascript:;" className='text-dark icon d-flex align-items-center justify-content-center rounded-circle'>
                          <Flag />
                        </a>
                      </li>
                      <li className='px-2'>
                        <a href="javascript:;" className='text-dark icon d-flex align-items-center justify-content-center rounded-circle'>
                          <Grid />
                        </a>
                      </li>
                      <li className='px-2'>
                        <a href="javascript:;" className='text-dark icon d-flex align-items-center justify-content-center rounded-circle'>
                          <Fullscreen />
                        </a>
                      </li>
                      <li className='px-2'>
                        <a href="javascript:;" className='text-dark icon d-flex align-items-center justify-content-center rounded-circle'>
                          <Moon />
                        </a>
                      </li>
                      <li className='px-2'>
                        <a href="javascript:;" className='text-dark icon d-flex align-items-center justify-content-center rounded-circle'>
                          <Bag />
                        </a>
                      </li>
                      <li className='px-2'>
                        <a href="javascript:;" className='text-dark icon d-flex align-items-center justify-content-center rounded-circle'>
                          <Bell />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-3 d-flex justify-content-end">
                  <div className="user d-flex align-items-center">
                    <div className="avtar rounded-circle">
                      <img src="images/avtar.png" alt="avtar" className='img-fluid' />
                    </div>
                    <div className="user-detail ms-2">
                      <span className='m-0'>Bansi Gadhiya</span>
                      <p className='m-0'>Web Developer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
