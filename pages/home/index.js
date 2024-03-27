import Head from "next/head";
import Navbar from "../component/Navbar";
import UsersTable from "../component/UsersTable";
import Alert from "../component/Alert";
import Layout from "../component/Layout";
import useSWR from 'swr'; // Import useSWR

export default function Home() {
    const { data: users, error } = useSWR('http://localhost:3000/api/users', fetcher); // Fetch data using useSWR

    if (error) return <div>Error loading data...</div>;

    return (
        <>
            <main className="min-h-screen flex flex-col">
                <Navbar />
                <Alert />
                <div className="flex-grow">
                    {users ? <UsersTable users={users} /> : <div>Loading...</div>} {/* Render the table if data is available, otherwise show loading indicator */}
                </div>
                <Layout />
            </main>
        </>
    );
}

// Fetcher function for useSWR
const fetcher = (url) => fetch(url).then(res => res.json());
