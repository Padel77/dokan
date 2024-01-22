import '../styles/globals.css'
import { Quicksand } from 'next/font/google'
const quicksand = Quicksand({ subsets: ['latin'] })
export default function MyApp({ Component, pageProps }) {
    return(
        <main className={quicksand.className}>
    <Component {...pageProps} />
    </main>
        )
}