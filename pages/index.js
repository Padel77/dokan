import {useEffect,useState} from "react";
import "@smastrom/react-rating/style.css";
import "@splidejs/splide/dist/css/splide.min.css";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import MainHeader from '@/components/MainHeader/mainHeader';
import HighestProduct from '@/components/HighestProduct/HighestProduct';
import HeadCarousel from "@/components/HeaderCarousel/HeadCarousel";
import Carousel from "@/components/HeadCarousel/Carousel";
import OfferSection from "@/components/OfferSection/OfferSection";
import Footer from "@/components/Footer/Footer";
import ProductsLike from "@/components/ProductsLike/ProductsLike";
import CategorySlider from "@/components/Category/CategorySlider";
import PersonalCare from "@/components/PersonalCare/PersonalCare";
import { NextSeo } from "next-seo";
import {AiFillAlert} from "react-icons/ai";
import Loading from "@/layout/loading";
import BannerSection from "@/components/BannerSection/BannerSection";
import WeekOffer from "@/components/WeekOffer/WeekOffer";
import StickyFooter from "@/components/StickyFooter/StickyFooter";
function Home(props) {
    const images = [
        './img/Hero.png',
        './img/Hero.png',
        './img/Hero.png',
    ];
    return (<>
            <NextSeo
                title="Dokan"
                description="PTS: A leading Investment firm that offers strategic advice to clients and partners in Egypt and the MEA Region with extensive experience and network."
            />
            <main className='sm:container lg:container-lg mx-auto '>
            <MainHeader />
            <Carousel images={images} />
            <CategorySlider/>
            <BannerSection/>
            {/*<HeadCarousel />*/}
            <HighestProduct/>
            <WeekOffer/>
            <OfferSection/>
            <PersonalCare/>
            <ProductsLike/>
             </main>
            <div className='sm:hidden block'>
                <StickyFooter/>
            </div>
            <Footer/>
</>
    );
}

export default Home;


