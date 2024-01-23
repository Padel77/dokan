"use client";
import React, {useState,useEffect} from "react";
import { Rating as ReactRating } from "@smastrom/react-rating";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@smastrom/react-rating/style.css";
import "@splidejs/splide/dist/css/splide.min.css";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import Loading from "@/layout/loading";
import Link from "next/link"; // Add the default theme CSS

const products = [
    {
        id: 1,
        name: "iPhone 9",
        price: 549,
        discountPercentage: 12.96,
        rating: 4.69,
        imageSrc: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        quantity: 1,
    },
    {
        id: 2,
        name: "iPhone X",
        price: 899,
        discountPercentage: 17.94,
        rating: 4.44,
        imageSrc: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
        quantity: 1,
    },
    {
        id: 3,
        name: "Samsung Universe 9",
        price: 1249,
        discountPercentage: 15.46,
        rating: 4.09,
        imageSrc: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
        quantity: 1,
    },
    {
        id: 4,
        name: "OPPOF19",
        price: 280,
        discountPercentage: 17.91,
        rating: 4.3,
        imageSrc: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
        quantity: 1,
    },
    {
        id: 5,
        name: "Huawei P30",
        price: 499,
        discountPercentage: 10.58,
        rating: 4.09,
        imageSrc: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
        quantity: 1,
    },
    {
        id: 6,
        name: "MacBook Pro",
        price: 1749,
        discountPercentage: 11.02,
        rating: 4.57,
        imageSrc: "https://i.dummyjson.com/data/products/6/thumbnail.png",
        quantity: 1,
    },
    {
        id: 7,
        name: "Samsung Galaxy Book",
        discountPercentage: 4.15,
        price: 1499,
        rating: 4.25,
        imageSrc: "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
        quantity: 1,
    },
    {
        id: 8,
        name: "Microsoft Surface Laptop 4",
        price: 1499,
        discountPercentage: 10.23,
        rating: 4.43,
        imageSrc: "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
        quantity: 1,
    },
    {
        name: "Infinix INBOOK",
        id: 9,
        price: 1099,
        discountPercentage: 11.83,
        rating: 4.54,
        imageSrc: "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
        quantity: 1,
    },
];

const CategorySlider = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
            const response = await fetch('https://phpv8.aait-d.com/dukanv2/public/api/website/home');
            const result = await response.json();
            if (result.status === 'success') {
                if (result.data[3].content.length > 0) {
                    setData(result.data[3].content);
                    console.log("category",result.data[3].content);
                    setLoading(false)
                } else {
                    setLoading(false)
                    return('data fetching success but no category found')
                }
            }
            }catch (e) {
                console.log(e)
                setLoading(false)
            }
            // console.log(result.data[3].content);
        };
        fetchData();
    }, []);
    const splideOption = {
        type: "loop",
        focus: 0,
        gap: "1rem",
        perPage: 4,
        breakpoints: {
            640: {
                perPage: 2,
            },
            480: {
                perPage: 1,
            },
        },
    };
    return (
        <React.Fragment>
            <div className='sm:hidden flex px-3 justify-between'>
                <p className="text-lg font-bold">Product Catalog</p>
                <Link href="{/category}" className='text-red-600'>view all</Link>
            </div>
            <section
                className="splide px-5 py-2 my-10"
                aria-label="Splide Basic HTML Example"
            >
            {loading? <Loading/>:
                <Splide options={splideOption}>
                    {products?.map((item) => (
                        console.log(item),
                        <SplideSlide key={item.id} className="splide__slide">
                            <div className="flex flex-col text-center pb-0 ">
                                <div
                                    className="relative overflow-hidden aspect-w-4 "
                                    style={{
                                        backgroundImage: `url(${item.imageSrc})`}}
                                />
                                <p>{item?.name}</p>

                            </div>
                        </SplideSlide>
                    ))}
                </Splide>}
            </section>
        </React.Fragment>
    );
};

export default CategorySlider;