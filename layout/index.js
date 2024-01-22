// import Footer from "components/Footer/Footer";
// import MainHeader from "components/MainHeader/mainHeader";
import {Fragment, Suspense} from "react";
import MainHeader from "@/components/MainHeader/mainHeader";
import Footer from "@/components/Footer/Footer";
import Loading from "@/layout/loading";

export default function Layout({ children }) {
    console.log(children)
    return (
        <Fragment>
            <Suspense fallback={<Loading/>}>
            {/*<MainHeader className="sticky" />*/}
            <div className='sm:container lg:container-lg mx-auto'>
                <MainHeader/>
                <main>{children}</main>
                {/*<Footer />*/}
                </div>
                <Footer/>
            </Suspense>

        </Fragment>
);
}
