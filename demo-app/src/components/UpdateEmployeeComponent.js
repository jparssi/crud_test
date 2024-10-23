import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import EmployeeService from '../EmployeeService';

function UpdateEmployeeComponent() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        EmployeeService.getEmployeeById(id).then(res => {
            let employee = res.data;
            setFirstName(employee.firstName);
            setLastName(employee.lastName);
            setEmail(employee.email);
        });
    }, [id]);

    const updateEmployee = (e) => {
        e.preventDefault();
        const employee = { firstName, lastName, email };
        EmployeeService.updateEmployee(id, employee).then(res => {
            navigate('/employees');
        });
    };

    const cancel = () => {
        navigate('/employees');
    };

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Update Employee</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>First Name:</label>
                                    <input placeholder="First Name" name="firstName" className="form-control"
                                           value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label>Last Name:</label>
                                    <input placeholder="Last Name" name="lastName" className="form-control"
                                           value={lastName} onChange={(e) => setLastName(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label>Email Address:</label>
                                    <input placeholder="Email Address" name="email" className="form-control"
                                           value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <button className="btn btn-success" onClick={updateEmployee}>Update</button>
                                <button className="btn btn-danger" onClick={cancel} style={{ marginLeft: "10px" }}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpdateEmployeeComponent;