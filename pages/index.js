import "@smastrom/react-rating/style.css";
import "@splidejs/splide/dist/css/splide.min.css";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import MainHeader from '@/components/MainHeader/mainHeader';
import HighestProduct from '@/components/HighestProduct/HighestProduct';
import Carousel from "@/components/HeadCarousel/Carousel";
import OfferSection from "@/components/OfferSection/OfferSection";
import Footer from "@/components/Footer/Footer";
import ProductsLike from "@/components/ProductsLike/ProductsLike";
import CategorySlider from "@/components/Category/CategorySlider";
import PersonalCare from "@/components/PersonalCare/PersonalCare";
import {NextSeo} from "next-seo";
import BannerSection from "@/components/BannerSection/BannerSection";
import WeekOffer from "@/components/WeekOffer/WeekOffer";
import StickyFooter from "@/components/StickyFooter/StickyFooter";
import PopularProducts from "@/components/PopularProducts/PopularProducts";
import GiftSection from "@/components/GiftSection/GiftSection";
import TopDeals from "@/components/TopDeals/TopDeals";

function Home(props) {
    const images = ['./img/Hero.png', './img/Hero.png', './img/Hero.png',];
    return (<>
            <NextSeo
                title="Dokan"
                description="Highlights key selling points, including the variety of products, emphasis on quality, the user-friendly interface, and the overall positive shopping experience. It also includes a call to action, encouraging visitors to start their shopping journey with Dokan."
            />
            <main className='sm:container lg:container-lg mx-auto '>
                <MainHeader/>
                <Carousel images={images}/>
                <CategorySlider/>
                <BannerSection/>
                {/*<HeadCarousel />*/}
                <HighestProduct/>
                <WeekOffer/>
                <TopDeals/>
                <GiftSection/>
                <PopularProducts/>
                <OfferSection/>
                <PersonalCare/>
                <ProductsLike/>
            </main>
            <div className='sm:hidden block'>
                <StickyFooter/>
            </div>
            <Footer/>
        </>);
}

export default Home;


