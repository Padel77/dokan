"use client"; // for nextjs 13.4 user
import Link from "next/link";
import React, {useEffect, useState} from "react";
import {AiFillAlert, AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai";
import {PlusCircleIcon} from "@heroicons/react/24/outline";
import Loading from "@/layout/loading";
// import api from '../../lib/api';

const WeekOffer = () => {
    // const [data, setData] = useState(null);
    // const [loading, setLoading] = useState(true);
    //
    // useEffect(() => {
    //     const fetchData = async () => {
    //         setLoading(true);
    //         try {
    //             const response = await fetch('https://phpv8.aait-d.com/dukanv2/public/api/website/home');
    //             const result = await response.json();
    //             if (result.status == 'success') {
    //                 if (result.data[6].content.length > 0) {
    //                     setData(result.data[6].content);
    //                     setLoading(false)
    //                     console.log("Hight",result)
    //                 } else {
    //                     AiFillAlert('data fetching sucees but No Data Found')
    //                     setLoading(false)
    //                 }
    //             }
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //             setLoading(false)
    //         }
    //
    //     }
    //     fetchData();
    // }, []);
    // // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await api.get('/');
    //             console.log(response.data)
    //             // setData(response.data);
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };
    //     fetchData();
    // }, []);


    const filteredItems = [{
        id: 1,
        img: "/img/add.png",
        description: "camera",
        price: 200,
    }, {
        id: 2,
        img: "/img/add2.png",
        description: "Phone",
        price: 100,
    }];

    const slideLeft = () => {
        let slider = document.getElementById("slider1");
        slider.scrollLeft = slider.scrollLeft - 235;
    };

    const slideRight = () => {
        let slider = document.getElementById("slider1");
        slider.scrollLeft = slider.scrollLeft + 235;
    };
    return (<>
        <div className="sm:my-10 my-0 sm:block hidden">
                <div className="sm:block hidden mx-auto text-center">
                    <p className='text-lg font-bold'>This week offers</p>
                </div>
                <div className="row-container" id="slider1">
                    {filteredItems.map((item) => (<div key={item.id} className="p-2">
                        <Link href={`/`} className="">
                            <div className=" w-96 h-56 relative">
                                <div
                                    className="Frame11338 w-full h-full   left-0  absolute bg-white rounded justify-center items-center  inline-flex">
                                    <img
                                        className=" h-full   rounded"
                                        src={item.img}
                                    />
                                </div>
                            </div>
                        </Link>
                    </div>))}

                </div>
                <div className="sm:flex hidden justify-center text-xl ">
                    <button className='text-indigo-400  p-2' title="scroll left" onClick={slideLeft}>
                        <AiOutlineArrowLeft/>
                    </button>
                    <button className='p-2 text-sky-600' title="scroll right"
                            onClick={slideRight}>
                        <AiOutlineArrowRight/>
                    </button>
                </div>
        </div>
    </>);
};
export default WeekOffer;