import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListEmployeesComponent from './components/ListEmployeesComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';

function App() {
    return (
        <Router>
            <div className="container">
                <Routes>
                    <Route path="/" element={<ListEmployeesComponent />} />
                    <Route path="/add-employee" element={<CreateEmployeeComponent />} />
                    <Route path="/edit-employee/:id" element={<UpdateEmployeeComponent />} />
                    <Route path="/view-employee/:id" element={<ViewEmployeeComponent />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;