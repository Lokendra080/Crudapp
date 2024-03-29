import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'


const Home = () => {

    const [users, setUsers] = useState([])
    const navigate= useNavigate()
    useEffect(() => {
        axios.get('http://localhost:3030/users')
            .then(result => setUsers(result.data))
            .catch(err => console.log(err))
    })
    const deletHandler = (id) =>{
        const confirm = window.confirm('Dou you want to delete ');
        if(confirm){
            axios.delete('http://localhost:3030/users/'+id)
            .then(result => {alert('Record deleted ')
                    navigate('/')
        })
            .catch(err => console.log(err))
        }
    }
    return (
        <div className='justify-content-center  d-flex aligh-item-center mt-5'>
            <div className='w-75'>
                <Link to="/create" className='btn btn-success btn sm mb-1'> Create +</Link>
                <table className='table text-center'>
                    <thead className='table-success'>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user) => {
                                return <tr key={user.id}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <Link to={`/update/${user.id}`}className=" btn btn-success me-2 btn-sm btnUpdate">Update</Link>
                                        <button onClick={()=>deletHandler(user.id)} className=" btn btn-danger me-2 btn-sm  btnDelete">Delete</button>
                                    </td>
                                </tr>
                            })
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home