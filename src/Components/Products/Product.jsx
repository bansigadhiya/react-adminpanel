import React from 'react'
import { Button, Link, Table } from 'react-bootstrap';
import './Product.css';
import { PlusCircle } from 'react-bootstrap-icons';
import { useState } from 'react';
import AddProduct from './AddProduct';
import ViewProducts from './ViewProducts';
import { useDispatch } from 'react-redux';
import { ViewProductAsync } from '../../Services/Actions/Product.action';

function Product() {

  const [add, setAdd] = useState(false);

  const handleAddproduct = () => {
    setAdd(!add);
  }

  const dispatch = useDispatch();

  return (

    <div className='container-fluid py-3'>
      <div className="d-flex align-items-center justify-content-between mb-3">
        {
          add ? <h4 className='mb-0 text-primary'>Add Products</h4> : <h4 className='mb-0 text-primary'>View Products</h4>
        }
        <div className="cta-btn">
          {
            !add ? <Button className='mx-2 bg-primary border-0 py-1' onClick={() => { handleAddproduct() }}>
              <PlusCircle className='me-2' />
              <span>Add Product</span>
            </Button> : 
            <Button className='mx-2 bg-primary border-0 py-1' onClick={() => { handleAddproduct(dispatch(ViewProductAsync())) }}>
              <PlusCircle className='me-2' />
              <span>View Product</span>
            </Button>
          }
        </div>
      </div>
      {
        add ? <AddProduct /> : <ViewProducts />
      }
    </div>
  )
}

export default Product
