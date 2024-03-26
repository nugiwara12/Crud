import Head from "next/head";
import Image from "next/image";
import Layout from "./components/Layout";

export default function Home() {
  return (
    <>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Head>
            <title>NextJS MySQL CRUD tutorial</title>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta httpequiv="X-UA-Compatible" content="ie=edge" />
            <meta name="Description" content="NextJS MySQL CRUD tutorial" />
            <meta name="author" content="anand346@BePractical" />
            <meta name="og:url" content="https://www.linkedin.com/in/anand346" />
      </Head>
    </main>

    <main>
        <Layout />
    </main>
    </>
  );
}
