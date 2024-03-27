"use client"

import Pagination from "./Pagination";
import { useState } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa'; // Importing the required icons




function UsersTable() {
    
    return (
        <>
        <Pagination />
        <main className="flex justify-between p-5 text-center">
            <div className="container mx-auto">
                <table className="table-auto">
                    <thead>
                        <tr>
                            <th>
                                <span className="custom-checkbox">
                                    <input type="checkbox" id="selectAll" />
                                    <label htmlFor="selectAll"></label>
                                </span>
                            </th>
                            <th className="px-4">Name</th>
                            <th className="px-4">Email</th>
                            <th className="px-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <input type="hidden" id="userId" name="id" value="" />
                            <td>
                                <span className="custom-checkbox">
                                    <input type="checkbox" id="data_checkbox" className="data_checkbox" name="data_checkbox" value="" />
                                    <label htmlFor="data_checkbox"></label>
                                </span>
                            </td>
                            <td className="px-4">Anand Raj</td>
                            <td className="px-4">Rajanand9039@gmail.com</td>
                            <td className="px-4">
                                <a href="#editEmployeeModal" className="edit" data-toggle="modal">
                                    <i className="material-icons" data-toggle="tooltip" title="Edit"></i>
                                </a>
                                <a href="#deleteEmployeeModal" className="delete" data-toggle="modal">
                                    <i className="material-icons" data-toggle="tooltip" title="Delete"></i>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <input type="hidden" id="userId" name="id" value="" />
                            <td>
                                <span className="custom-checkbox">
                                    <input type="checkbox" id="data_checkbox" className="data_checkbox" name="data_checkbox" value="" />
                                    <label htmlFor="data_checkbox"></label>
                                </span>
                            </td>
                            <td className="px-4">Anand Raj</td>
                            <td className="px-4">Rajanand@gmail.com</td>
                            <td className="px-4">
                                <a href="#editEmployeeModal" className="edit" data-toggle="modal">
                                    <i className="material-icons" data-toggle="tooltip" title="Edit"></i>
                                </a>
                                <a href="#deleteEmployeeModal" className="delete" data-toggle="modal">
                                    <i className="material-icons" data-toggle="tooltip" title="Delete"></i>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <input type="hidden" id="userId" name="id" value="" />
                            <td>
                                <span className="custom-checkbox">
                                    <input type="checkbox" id="data_checkbox" className="data_checkbox" name="data_checkbox" value="" />
                                    <label htmlFor="data_checkbox"></label>
                                </span>
                            </td>
                            <td className="px-4">Anand Raj</td>
                            <td className="px-4">Rajanand@gmail.com</td>
                            <td className="px-4">
                                <a href="#editEmployeeModal" className="edit" data-toggle="modal">
                                    <i className="material-icons" data-toggle="tooltip" title="Edit"></i>
                                </a>
                                <a href="#deleteEmployeeModal" className="delete" data-toggle="modal">
                                    <i className="material-icons" data-toggle="tooltip" title="Delete"></i>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <input type="hidden" id="userId" name="id" value="" />
                            <td>
                                <span className="custom-checkbox">
                                    <input type="checkbox" id="data_checkbox" className="data_checkbox" name="data_checkbox" value="" />
                                    <label htmlFor="data_checkbox"></label>
                                </span>
                            </td>
                            <td className="px-4">Anand Raj</td>
                            <td className="px-4">Rajanand@gmail.com</td>
                            <td className="px-4">
                                <a href="#editEmployeeModal" className="edit" data-toggle="modal">
                                    <i className="material-icons" data-toggle="tooltip" title="Edit"></i>
                                </a>
                                <a href="#deleteEmployeeModal" className="delete" data-toggle="modal">
                                    <i className="material-icons" data-toggle="tooltip" title="Delete"></i>
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </main>



            

           


        </>
    )
}

export default UsersTable;