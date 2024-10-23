import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../EmployeeService';

function ListEmployeesComponent() {
    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        EmployeeService.getEmployees().then((res) => {
            setEmployees(res.data);
        });
    }, []);

    const addEmployee = () => {
        navigate('/add-employee');
    };

    const editEmployee = (id) => {
        navigate(`/edit-employee/${id}`);
    };

    const viewEmployee = (id) => {
        navigate(`/view-employee/${id}`);
    };

    const deleteEmployee = (id) => {
        EmployeeService.deleteEmployee(id).then((res) => {
            setEmployees(employees.filter(employee => employee.id !== id));
        });
    };

    return (
        <div>
            <h2 className="text-center">Employees List</h2>
            <div className="row">
                <button className="btn btn-primary" onClick={addEmployee}>Add Employee</button>
            </div>
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map(employee => (
                            <tr key={employee.id}>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                                <td>
                                    <button onClick={() => editEmployee(employee.id)} className="btn btn-info">Update</button>
                                    <button onClick={() => deleteEmployee(employee.id)} className="btn btn-danger" style={{ marginLeft: "10px" }}>Delete</button>
                                    <button onClick={() => viewEmployee(employee.id)} className="btn btn-info" style={{ marginLeft: "10px" }}>View</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ListEmployeesComponent;