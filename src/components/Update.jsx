import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser } from '../features/UserSlice';

const Update = () => {
  const {id} = useParams();
  const users = useSelector((state) => state.users);
  const existingUserArray = users.filter(singleItem => singleItem.id == id);

  const {name, email, position, salary, department,  hireDate} = existingUserArray[0];

  const [uname, setName] = useState(name);
  const [uemail, setEmail] = useState(email);
  const [uposition, setposition] = useState(position);
  const [usalary, setsalary] = useState(salary);
  const [udepartment, setdepartment] = useState(department);
  const [uhireDate, sethireDate] = useState(hireDate);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser({
      id:id,
      name: uname,
      email: uemail,
      position: uposition,
      salary: usalary,
      department: udepartment,
      hireDate: uhireDate
    })) 
    navigate('/')
  }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className='w-50 border bg-secondary text-white p-5'>
            <h3>Update Employee</h3>
            <form onSubmit={handleUpdate}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name='name' className='form-control' placeholder='Enter name' value={uname} onChange={(e) => setName(e.target.value)}/>
                </div>
                
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name='email' className='form-control' placeholder='Enter email' value={uemail} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                   <div>
                    <label htmlFor="position">Position:</label>
                    <input type="text" name='position' className='form-control' placeholder='Enter position' autoComplete='off' onChange={(e) => setposition(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="salary">Salary:</label>
                    <input type="text" name='salary' className='form-control' placeholder='Enter salary' value={usalary} onChange={(e) => setsalary(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="department">Department:</label>
                    <input type="text" name='department' className='form-control' placeholder='Enter department' autoComplete='off' onChange={(e) => setdepartment(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="hiredate">Hire Date:</label>
                    <input type="date" name='hiredate' className='form-control' placeholder='Enter hire date' autoComplete='off' onChange={(e) => sethireDate(e.target.value)}/>
                </div><br />
                <button className='btn btn-info'>Update</button>
            </form>

        </div>

    </div>
  )
}

export default Update;
