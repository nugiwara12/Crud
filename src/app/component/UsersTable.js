"use client"

import Pagination from "./Pagination";
import { useState } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa'; // Importing the required icons




function UsersTable() {
    
    return (
        <>
            {/* <table class="table-auto">
                <thead>
                    <tr>
                        <th>
                            <span class="custom-checkbox">
                                <input type="checkbox" id="selectAll" />
                                <label for="selectAll"></label>
                            </span>
                        </th>
                        <th class="px-4">Name</th>
                        <th class="px-4">Email</th>
                        <th class="px-4">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <input type="hidden" id="userId" name="id" value="" />
                        <td>
                            <span class="custom-checkbox">
                                <input type="checkbox" id="data_checkbox" class="data_checkbox" name="data_checkbox" value="" />
                                <label for="data_checkbox"></label>
                            </span>
                        </td>
                        <td class="px-4">Anand Raj</td>
                        <td class="px-4">Rajanand9039@gmail.com</td>
                        <td class="px-4">
                            <a href="#editEmployeeModal" class="edit" data-toggle="modal">
                                <i class="material-icons" data-toggle="tooltip" title="Edit"></i>
                            </a>
                            <a href="#deleteEmployeeModal" class="delete" data-toggle="modal">
                                <i class="material-icons" data-toggle="tooltip" title="Delete"></i>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <input type="hidden" id="userId" name="id" value="" />
                        <td>
                            <span class="custom-checkbox">
                                <input type="checkbox" id="data_checkbox" class="data_checkbox" name="data_checkbox" value="" />
                                <label for="data_checkbox"></label>
                            </span>
                        </td>
                        <td class="px-4">Anand Raj</td>
                        <td class="px-4">Rajanand@gmail.com</td>
                        <td class="px-4">
                            <a href="#editEmployeeModal" class="edit" data-toggle="modal">
                                <i class="material-icons" data-toggle="tooltip" title="Edit"></i>
                            </a>
                            <a href="#deleteEmployeeModal" class="delete" data-toggle="modal">
                                <i class="material-icons" data-toggle="tooltip" title="Delete"></i>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <input type="hidden" id="userId" name="id" value="" />
                        <td>
                            <span class="custom-checkbox">
                                <input type="checkbox" id="data_checkbox" class="data_checkbox" name="data_checkbox" value="" />
                                <label for="data_checkbox"></label>
                            </span>
                        </td>
                        <td class="px-4">Anand Raj</td>
                        <td class="px-4">Rajanand@gmail.com</td>
                        <td class="px-4">
                            <a href="#editEmployeeModal" class="edit" data-toggle="modal">
                                <i class="material-icons" data-toggle="tooltip" title="Edit"></i>
                            </a>
                            <a href="#deleteEmployeeModal" class="delete" data-toggle="modal">
                                <i class="material-icons" data-toggle="tooltip" title="Delete"></i>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <input type="hidden" id="userId" name="id" value="" />
                        <td>
                            <span class="custom-checkbox">
                                <input type="checkbox" id="data_checkbox" class="data_checkbox" name="data_checkbox" value="" />
                                <label for="data_checkbox"></label>
                            </span>
                        </td>
                        <td class="px-4">Anand Raj</td>
                        <td class="px-4">Rajanand@gmail.com</td>
                        <td class="px-4">
                            <a href="#editEmployeeModal" class="edit" data-toggle="modal">
                                <i class="material-icons" data-toggle="tooltip" title="Edit"></i>
                            </a>
                            <a href="#deleteEmployeeModal" class="delete" data-toggle="modal">
                                <i class="material-icons" data-toggle="tooltip" title="Delete"></i>
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table> */}


            <main className="flex justify-between p-5">
                <Pagination/>
                <div className="flex items-center justify-center">
                    <div className="table-responsive mt-4">
                        <div className="table-wrapper">
                            <div className="table-title bg-blue-700 text-white rounded-t-md px-8 py-4">
                                <h2 className="text-2xl text-center">Table Title</h2>
                            </div>
                            <table className="table w-full">
                                <thead>
                                    <tr>
                                        <th className="px-6 py-4 border border-gray-300">Name</th>
                                        <th className="px-6 py-4 border border-gray-300">Email</th>
                                        <th className="px-6 py-4 border border-gray-300">Actions</th> 
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-300">
                                    <tr>
                                        <td className="px-6 py-4 border border-gray-300">Jc Sarmiento</td>
                                        <td className="px-6 py-4 border border-gray-300">Jc@gmail.com</td>
                                        <td className="px-6 py-4 border border-gray-300">
                                        <div className="flex justify-center items-center">
                                            <button className="btn bg-green-700 text-white h-10 w-9 rounded-full flex items-center justify-center mr-6">
                                                <FaEdit className="h-5 w-5" />
                                                <span className="sr-only">Edit</span>
                                            </button>

                                            <button className="btn bg-red-700 text-white h-10 w-9 rounded-full flex items-center justify-center">
                                                <FaTrashAlt className="h-5 w-5" />
                                                <span className="sr-only">Delete</span>
                                            </button>
                                        </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 border border-gray-300">Jc Sarmiento</td>
                                        <td className="px-6 py-4 border border-gray-300">Jc@gmail.com</td>
                                        <td className="px-6 py-4 border border-gray-300">
                                        <div className="flex justify-center items-center">
                                            <button className="btn bg-green-700 text-white h-10 w-9 rounded-full flex items-center justify-center mr-6">
                                                <FaEdit className="h-5 w-5" />
                                                <span className="sr-only">Edit</span>
                                            </button>

                                            <button className="btn bg-red-700 text-white h-10 w-9 rounded-full flex items-center justify-center">
                                                <FaTrashAlt className="h-5 w-5" />
                                                <span className="sr-only">Delete</span>
                                            </button>
                                        </div>

                                        </td>
                                    </tr>
                                    {/* <!-- More rows --> */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>

           


        </>
    )
}

export default UsersTable;