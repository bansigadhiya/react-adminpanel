import React, { useState } from 'react';
import './SignIn.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Facebook, Github, Google, Twitter } from 'react-bootstrap-icons';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { SignInWithGoogleFirebase, SignInwithemailFirebase } from '../../Services/Actions/User.action';

function SignIn() {

    const [user,setUser] = useState({
        email : '',
        password : ''    
    })
    const navigate = useNavigate();
    const {error} = useSelector((state) => state.UserReducer);
    const {users} = useSelector((state) => state.UserReducer);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUser({
            ...user , [name] : value
        })
    } 

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        if(user.email !== '' && user.password !== ''){
            dispatch(SignInwithemailFirebase(user.email,user.password))
        }else{
            navigate('/')
        }
    }

    if(users !== null){
        navigate('/dashboard')
    }else{
        return (
            <div className='bg-light' style={{overflow : "hidden"}}>
                <div className="shape">
                    <div className="overlay"></div>
                </div>
                <div className="logIn-form bg-white rounded shadow-sm p-4 rounded mx-auto">
                    <h5 className='text-primary text-center'>Welcome Back !</h5>
                    <p className='text-center mb-0'>Sign in to continue..</p>
                    <Form className='p-2' onSubmit={(e) => {handleSubmit(e)}}>
                        <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name='email' value={user.email} onChange={(e) => {handleChange(e)}} required/>
                            {
                                error == "auth/user-not-found" ? <span className='text-danger error'>user not found..</span> : ''
                            }
                        </Form.Group>
    
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name='password' value={user.password} onChange={(e) => {handleChange(e)}} required/>
                            {
                                error == "auth/wrong-password" ? <span className='text-danger error'>wrong password..</span> : ''
                            }
                        </Form.Group>
    
                        <Button type="submit" className='btn bg-primary w-100 btn btn-success rounded-1 mt-2'>
                            Submit
                        </Button>
                    </Form>
                    <div className="signin-other text-center">
                        <h5 className='my-4 title'>Sign In with</h5>
                        <div>
                            <Button variant='primary' className='mx-1 rounded-1 border-0 btn-icon'><Facebook /></Button>
                            <Button className='mx-1 rounded-1 bg-danger border-0 btn-icon' onClick={() => dispatch(SignInWithGoogleFirebase())}><Google /></Button>
                            <Button className='mx-1 rounded-1 bg-dark border-0 btn-icon'><Github /></Button>
                            <Button className='mx-1 rounded-1 bg-info border-0 btn-icon'><Twitter /></Button>
                        </div>
                    </div>
                <p className='text-dark mt-4 mb-0 text-center'>Don't have an account ? <NavLink to='/signup'>Signup</NavLink></p>
                </div>
            </div>
        )
    }
}

export default SignIn
