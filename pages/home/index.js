import React, { useState } from 'react'; // Import useState
import Navbar from "../component/Navbar";
import UsersTable from "../component/UsersTable";
import Alert from "../component/Alert";
import Layout from "../component/Layout";
import Pagination from "../component/Pagination"; // Import Pagination
import { Paginate } from "../../helpers/paginate"; // Import Paginate

export default function Home({ value }) {
  const [state, setState] = useState({
    films: [],
    page: 1,
    genres: [],
    currentCategory: ""
  });

  const { page: currentPage } = state; // Extract currentPage from state
  const pageSize = 3;

  const onPageChange = (page) => {
    setState(prevState => ({ ...prevState, page }));
  };

  // Ensure that value is defined before using it
  let paginatedUsers = value ? Paginate(value.users, currentPage, pageSize) : [];
  

  return (
    <>
      <main className="min-h-screen flex flex-col">
        <Navbar />
        <Alert />
        <div className="flex-grow">
          <UsersTable users={paginatedUsers} />
          {/* Ensure that currentPage is defined before accessing its value */}
          <Pagination userCount={value ? value.users.length : 0} currentPage={currentPage} pageSize={pageSize} onPageChange={onPageChange} />
        </div>
        <Layout />
      </main>
    </>
  );
}
