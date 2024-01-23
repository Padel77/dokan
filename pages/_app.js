import '../styles/globals.css';
import { Metadata } from 'next';
import Layout from "/layout";
import {Quicksand} from 'next/font/google'
import {Suspense} from "react";
import Loading from "@/layout/loading";

const quicksand = Quicksand({subsets: ['latin']})

function MyApp({ Component, pageProps }) {
    return (
        <Layout className={quicksand.className}>
                <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
