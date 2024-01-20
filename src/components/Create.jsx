import React, { useState } from 'react'
import { addUser } from '../features/UserSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Create = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [position, setposition] = useState("")
    const [salary, setsalary] = useState("")
    const [department, setdepartment] = useState("")
    const [hireDate, sethireDate] = useState("")

    const users = useSelector((state) => state.users)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addUser({id: users[users.length - 1].id + 1, name, email, position, salary, department, hireDate}))
        navigate('/')
    }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className='w-50 border bg-secondary text-white p-5'>
            <h3>Add New Employe</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name='name' className='form-control' placeholder='Enter name' autoComplete='off' onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name='email' className='form-control' placeholder='Enter email' autoComplete='off' onChange={(e) => setEmail(e.target.value)}/>
                </div>
                 <div>
                    <label htmlFor="position">Position:</label>
                    <input type="text" name='position' className='form-control' placeholder='Enter position' autoComplete='off' onChange={(e) => setposition(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="salary">Salary:</label>
                    <input type="text" name='salary' className='form-control' placeholder='Enter salary' autoComplete='off' onChange={(e) => setsalary(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="department">Department:</label>
                    <input type="text" name='department' className='form-control' placeholder='Enter department' autoComplete='off' onChange={(e) => setdepartment(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="hiredate">Hire Date:</label>
                    <input type="date" name='hiredate' className='form-control' placeholder='Enter hire date' autoComplete='off' onChange={(e) => sethireDate(e.target.value)}/>
                </div><br />
                <button className='btn btn-info'>Submit</button>
            </form>

        </div>

    </div>
    
  )
}

export default Create;
