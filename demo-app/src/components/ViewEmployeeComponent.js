import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import EmployeeService from '../EmployeeService';

function ViewEmployeeComponent() {
    const { id } = useParams();
    const [employee, setEmployee] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        EmployeeService.getEmployeeById(id).then(res => {
            setEmployee(res.data);
        });
    }, [id]);

    const backToList = () => {
        navigate('/employees');
    };

    return (
        <div>
            <div className="card col-md-6 offset-md-3">
                <h3 className="text-center">View Employee Details</h3>
                <div className="card-body">
                    <div className="row">
                        <label>First Name: </label>
                        <div>{employee.firstName}</div>
                    </div>
                    <div className="row">
                        <label>Last Name: </label>
                        <div>{employee.lastName}</div>
                    </div>
                    <div className="row">
                        <label>Email Address: </label>
                        <div>{employee.email}</div>
                    </div>
                    <button className="btn btn-info" onClick={backToList} style={{ marginTop: "10px" }}>Back to List</button>
                </div>
            </div>
        </div>
    );
}

export default ViewEmployeeComponent;