import "@smastrom/react-rating/style.css";
import "@splidejs/splide/dist/css/splide.min.css";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import MainHeader from '@/components/MainHeader/mainHeader';
import HighestProduct from '@/components/HighestProduct/HighestProduct';
import HeadCarousel from "@/components/HeaderCarousel/HeadCarousel";
import Carousel from "@/components/HeadCarousel/Carousel";
import MobileFooter from "@/components/MobileFooter/MobileFooter";
import OfferSection from "@/components/OfferSection/OfferSection";
import Footer from "@/components/Footer/Footer";
import TopDeals from "@/components/TopDeals/TopDeals";
import CategorySlider from "@/components/Category/CategorySlider";
function Index(props) {
    const images = [
        './img/Hero.png',
        './img/Hero.png',
        './img/Hero.png',
    ];
    return (<>
        <div className='sm:container lg:container-lg mx-auto'>
            <MainHeader />
            <Carousel images={images} />
            <CategorySlider/>
            <HighestProduct/>
            <OfferSection/>
            <HeadCarousel />
            <TopDeals/>
            <MobileFooter/>
        </div>
            <Footer/>
    </>);
}

export default Index;


