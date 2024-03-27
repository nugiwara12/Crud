import Head from "next/head";
import Image from "next/image";
import Navbar from "../component/Navbar";
import UsersTable from "../component/UsersTable";
import Pagination from "../component/Pagination";
import Alert from "../component/Alert";
import { useState } from "react";
import AppContext from "../../context/appCOntext"; // Fix typo in import
import Layout from "../component/Layout";

export default function Home({ users }) {

    const [myUsers, setMyUsers] = useState(users); // Fixed useState syntax

    return (
        <>
            <main className="min-h-screen flex flex-col">
                <Navbar />
                <Alert />
                <div className="flex-grow">
                  {/* Use myUsers instead of value.users */}
                    <UsersTable users={myUsers} /> 
                </div>
                <AppContext.Provider value={{
                    users: myUsers,
                    setMyUsers: setMyUsers
                }} >
                    <Layout />
                </AppContext.Provider>
            </main>
        </>
    );
}

export async function getServerSideProps() {
    // Fetch data from the API endpoint
    const response = await fetch("http://localhost:3000/api/users");

    // Await response.json() to get the actual JSON data
    const users = await response.json();

    // Return the data as props
    return {
        props: {
            users: users
        }
    };
}
