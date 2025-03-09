import "@/styles/globals.css";
import { Manrope, } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"], weight: ["400", "700"] });
// const satoshi = Satoshi({ subsets: ["latin"], weight: ["400", "700"] });


export default function App({ Component, pageProps }) {
  return (
    <>
      <div className={`${manrope.className}`}>
        <Component {...pageProps} />
      </div>
    </>
  )
}
