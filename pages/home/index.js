import Head from "next/head";
import Navbar from "../component/Navbar";
import UsersTable from "../component/UsersTable";
import Alert from "../component/Alert";
import Layout from "../component/Layout";
import useSWR from 'swr'; // Import useSWR
import User from "../component/User";
import AppContext from "../../context/appContext";
import { Paginate } from "../../helpers/paginate";
import Pagination from "../component/Pagination";
import React, { useState } from 'react'; // Import React and useState


export default function Home({value}) {

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10; // Set pageSize to your desired value

  // Define onPageChange function
  const onPageChange = (page) => {
    setCurrentPage(page);
    // Add logic here to handle page change, if needed
  };

  const paginatedUsers = []
    return (
        <>
            <main className="min-h-screen flex flex-col">
                <Navbar />
                <Alert />
                  <div className="flex-grow">
                    <UsersTable users = {paginatedUsers}/>
                    <Pagination usersCount = {value?.users.length} currentPage = {currentPage} pageSize = {pageSize} onPageChange = {onPageChange} />
                  </div>
                <Layout />
            </main>
        </>
    );
}


