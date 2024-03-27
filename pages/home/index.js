import Head from "next/head";
import Navbar from "../component/Navbar";
import UsersTable from "../component/UsersTable";
import Alert from "../component/Alert";
import Layout from "../component/Layout";
import useSWR from 'swr'; // Import useSWR
import User from "../component/User";
import { Paginate } from "../../helpers/paginate";
import Pagination from "../component/Pagination";

export default function Home() {

  const paginatedUsers = []
    return (
        <>
            <main className="min-h-screen flex flex-col">
                <Navbar />
                <Alert />
                  <div className="flex-grow">
                    <UsersTable users = {paginatedUsers}/>
                    <Pagination userCount = {CSSMathValue.users.length} currentPage = {currentPage} pageSize = {pageSize} onPageChange = {onPageChange} />
                  </div>
                <Layout />
            </main>
        </>
    );
}


