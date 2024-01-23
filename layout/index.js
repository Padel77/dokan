// import Footer from "components/Footer/Footer";
// import MainHeader from "components/MainHeader/mainHeader";
import {Fragment, Suspense} from "react";
import Loading from "@/layout/loading";

export default function Layout({ children }) {
    console.log(children)
    return (
        <Fragment>
            <Suspense fallback={<Loading/>}>
                <main>{children}</main>
            </Suspense>

        </Fragment>
);
}
