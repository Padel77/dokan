"use client";
import React, {useEffect} from "react";
import { Rating as ReactRating } from "@smastrom/react-rating";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@smastrom/react-rating/style.css";
import "@splidejs/splide/dist/css/splide.min.css";
import "@splidejs/splide/dist/css/themes/splide-default.min.css"; // Add the default theme CSS

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
        price: 1499,
        discountPercentage: 4.15,
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
    const [data, setData] = React.useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
            const response = await fetch('https://phpv8.aait-d.com/dukanv2/public/api/website/home');
            const result = await response.json();
            if (result.status === 'success') {
                if (result.data[3].content.length > 0) {
                    setData(result.data[3].content);
                } else {
                    alert('data fetching success but no category found')
                }
            }
            }catch (e) {
                console.log(e)
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
            <section
                className="splide mx-auto max-w-[1200px] px-5 py-2"
                aria-label="Splide Basic HTML Example"
            >
                <Splide options={splideOption}>
                    {data.map((item) => (
                        console.log(item),
                        <SplideSlide key={item.id} className="splide__slide">
                            <div className="flex flex-col ">
                                <div
                                    className="relative overflow-hidden aspect-w-4 aspect-h-5"
                                    style={{
                                        backgroundImage: `url(${item.image})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        height: "200px",
                                    }}
                                />
{/*                                <img*/}
{/*src={item.image}*/}
{/*                                    alt="product"*/}
{/*                                    className="absolute top-0 left-0 w-full h-full object-cover"*/}
{/*                                />  */}
                                <div>
                                    <p className="mt-2">{item.name}</p>
                    {/*                <p className="font-medium text-violet-900">*/}
                    {/*                    {product.price}*/}
                    {/*                    <span className="text-sm text-gray-500 line-through">*/}
                    {/*  {product.discountedPrice}*/}
                    {/*</span>*/}
                    {/*                </p>*/}
                    {/*                <div className="flex items-center">*/}
                    {/*                    <ReactRating*/}
                    {/*                        ReactRating*/}
                    {/*                        style={{ maxWidth: 100 }}*/}
                    {/*                        value={product.rating}*/}
                    {/*                        readOnly*/}
                    {/*                    />*/}
                    {/*                    <p className="text-sm text-gray-400">*/}
                    {/*                        ({product.quantity})*/}
                    {/*                    </p>*/}
                    {/*                </div>*/}
                    {/*                <div>*/}
                    {/*                    <button className="my-5 h-10 w-full bg-violet-900 text-white">*/}
                    {/*                        Add to cart*/}
                    {/*                    </button>*/}
                    {/*                </div>*/}
                                </div>
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
            </section>
        </React.Fragment>
    );
};

export default CategorySlider;