import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'


const Update = () => {
    const {id} = useParams()

    const [user, setUser] = useState({
        id:id,
        name:'',
        email:'',
})
useEffect(() =>{
 axios.get('http://localhost:3000/users/'+id)
 .then(result => setUser(result.data))
 .catch(err =>console.log(err))   
}, [])
const navigate=useNavigate()
const inputHandler = (e)=>{
   return setUser({...user, [e.target.name]: e.target.value})

}
const submitHandler = (e)=>{
    e.preventDefault()
    axios.put('http://localhost:3030/users/'+id, user)
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
                    placeholder='Enter Name' onChange={inputHandler} value={user.name}></input>
                </div>
                <div>
                    <label htmlFor='name'>Email:</label>
                    <input type='email' name='email' className='form-control'
                     placeholder='Enter Email' onChange={inputHandler} value={user.email}></input>
                </div>
                <button className='btn btn-info mt-1 btn-sm'>Update</button>
            </form>
        </div>
    </div>
  )
}

export default Update