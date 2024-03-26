import Head from "next/head";
import Image from "next/image";
import Navbar from "./component/Navbar";
import UsersTable from "./component/UsersTable";
import Pagination from "./component/Pagination";


export default function Home() {
  return (
    <>
    <main className="min-h-screen flex flex-col">
            {/* <Head>
                <title>NextJS MySQL CRUD tutorial</title>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <meta name="Description" content="NextJS MySQL CRUD tutorial" />
                <meta name="author" content="anand346@BePractical" />
                <meta name="og:url" content="https://www.linkedin.com/in/anand346" />
            </Head> */}

            <Navbar />

            <div className="flex-grow">
                <UsersTable />
            </div>
        </main>
    </>
  );
}
