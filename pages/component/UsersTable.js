"use client"

import Pagination from "./Pagination";
import { useState } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa'; // Importing the required icons
import User from "./User";
import useSWR from "swr";



const fetcher = async () => {
    const response = await fetch('/api/users')
    const data = await response.json()
    return data
}

function UsersTable() {

    // const {data, error} = useSWR('user', fetcher)

    const { data } = useSWR(
        `/api/users`,
        (url) => fetch(url).then((response) => response.json()),
        { initialData: '' }
      );

    
    // if(error) return 'An error has accured'
    if(!data) return 'loading'
    console.log(data)

    const userGenerator = () => {
        return (
            <>
                <User />
            </>
        )
    }

    

    return (
        <>
        <Pagination />
        <main className="p-5 text-center">
            <div className="overflow-x-auto">
                <table className="table-auto min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-gray-800 text-white">
                    <tr>
                    <th className="px-4 py-2">
                        <span className="custom-checkbox">
                        <input type="checkbox" id="selectAll" />
                        <label htmlFor="selectAll"></label>
                        </span>
                    </th>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Email</th>
                    <th className="px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <User /> */}
                    
                    {
                        data?.users.map((item, index) => (
                            <tr key={item.id}>
                            <input type="hidden" id="userId" name="id" value = "" />
                                    <td>
                                    <span class="custom-checkbox">
                                            <input type="checkbox" id="data_checkbox" class="data_checkbox" name="data_checkbox" value="" />
                                            <label htmlFor="data_checkbox"></label>
                                    </span>
                                </td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>
                                <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                                <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                            </td>
                        </tr>
                            ))
                    }
                       

                         
                    
                                        
                </tbody>
                </table>
            </div>
        </main>




            

           


        </>
    )
}

export default UsersTable;