import React, { useState } from 'react'
import {v4 as uuid} from 'uuid'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'

 const Create = () => {
    const [user, setUser] = useState({
            id:uuid(),
            name:'',
            email:'',
    })
    const navigate=useNavigate()
    const inputHandler = (e)=>{
       return setUser({...user, [e.target.name]: e.target.value})

    }
    const submitHandler = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:3030/users', user)
        .then(result=> { navigate("/") 
        console.log(result)})
        .catch(err=>console.log(err))
    }

  return (
    <div className='d-flex w-100 justify-content-center align-items-center'>
        <div className='w-50 border mt-5 rounded bg-secondary text-white p-5'>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' name='name' className='form-control' 
                    placeholder='Enter Name' onChange={inputHandler}></input>
                </div>
                <div>
                    <label htmlFor='name'>Email:</label>
                    <input type='email' name='email' className='form-control'
                     placeholder='Enter Email' onChange={inputHandler}></input>
                </div>
                <button className='btn btn-info mt-1 btn-sm'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Create;