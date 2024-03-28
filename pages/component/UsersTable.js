"use client"

import Pagination from "./Pagination";
import { React, useState } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa'; // Importing the required icons
import User from "./User";
import useSWR from "swr";
import { Paginate } from "../../helpers/paginate";

const fetcher = async () => {
    const response = await fetch('/api/users')
    const data = await response.json()
    return data
}

function UsersTable({ value }) {

    // Ensure that data is always fetched
    const { data } = useSWR(
        `/api/users`,
        (url) => fetch(url).then((response) => response.json()),
        { initialData: '' }
    );

    // Initialize currentPage and pageSize
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 10; // Set the pageSize according to your requirement

    // Function to handle page change
    const onPageChange = (page) => {
        setCurrentPage(page);
        // Implement logic to fetch data for the new page
    };

        // if(error) return 'An error has occurred'
        if (!data) return 'loading'

        console.log(data)
    
        const userGenerator = () => {
            return (
                <>
                    <User />
                </>
            )
        }

    // Render the component
    return (
        <>
            <Pagination
                usersCount={value?.users?.length || 0}
                currentPage={currentPage}
                pageSize={pageSize}
                onPageChange={onPageChange}
            />
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
                            <User />
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    )
}

export default UsersTable;
