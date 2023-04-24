import React from 'react'
import { Button, Table } from 'react-bootstrap'
import { PenFill, Trash3Fill } from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux'
import { DeleteProductAsync, GetEditProductAsync } from '../../Services/Actions/Product.action';

function ViewProducts() {

    const { product } = useSelector((state) => state.ProductReducer);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(DeleteProductAsync(id))
    }

    const handleEdit = (id) => {
        dispatch(GetEditProductAsync(id))
    }   

    return (
        <div className='me-2'>
            <Table hover responsive className='bg-white shadow-sm rounded overflow-hidden text-center'>
                <thead>
                    <tr className='d-flex w-100 align-items-center text-primary'>
                        <th className='col-1'>Id</th>|
                        <th className='col-2'>Product Name</th>|
                        <th className='col-2'>Product Category</th>|
                        <th className='col-2'>Price</th>|
                        <th className='col-3'>Product Detail</th>|
                        <th className='col-2'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        product.map((pro) => {
                            return (
                                <tr className='d-flex w-100 align-items-center'>
                                    <td className='col-1'>{pro.id}</td>|
                                    <td className='col-2'>{pro.name}</td>|
                                    <td className='col-2'>{pro.category}</td>|
                                    <td className='col-2'>{pro.price} Rs.</td>|
                                    <td className='col-3'>{pro.detail}</td>|
                                    <td className='col-2 d-flex align-items-center'>
                                        <Button className='me-2 bg-primary border-0 py-1' onClick={() => handleEdit(pro.id)}><PenFill className='me-2'/>Edit</Button>
                                        <Button variant='danger' className='border-0 py-1' onClick={() => {handleDelete(pro.id)}}><Trash3Fill className='me-2'/>Delete</Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div >
    )
}

export default ViewProducts
