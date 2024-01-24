"use client"; // for nextjs 13.4 user
import Link from "next/link";
import React, {useEffect, useState} from "react";
import {AiFillAlert, AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai";
import {PlusCircleIcon} from "@heroicons/react/24/outline";
import Loading from "@/layout/loading";
// import api from '../../utils/api';

const TopDeals = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch('https://phpv8.aait-d.com/dukanv2/public/api/website/home');
                const result = await response.json();
                if (result.status === 'success' && result.data[6].content.length > 0) {
                        setData(result.data[6].content);
                        setLoading(false)
                        console.log("Hight",result)
                }  else {
                        AiFillAlert('data fetching sucees but No Data Found')
                        setLoading(false)
                    }
                }
             catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false)
            }

        }
        fetchData();
    }, []);
    // useEffect(() => {
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

    const slideLeft = () => {
        let slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 235;
    };

    const slideRight = () => {
        let slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 235;
    };
    return (<>
        <div className="md:my-5 mx-3 ">
            <div>
                <div className="title-btns">
                    <p className='text-lg font-bold'>Top Deals
                    </p>
                    <div className="flex gap-2">
                        <button className='h-8 border p-1' title="scroll left" onClick={slideLeft}>
                            <AiOutlineArrowLeft/>
                        </button>
                        <button className='h-8 border p-1 border-green-700' title="scroll right"
                                onClick={slideRight}>
                            <AiOutlineArrowRight/>
                        </button>
                    </div>
                </div>
                {loading ? <Loading/> : <div className="row-container" id="slider">
                    {data.map((item) => (<div key={item.id} className="p-2">
                        <Link href={`/`} className="">
                            <div className="ProductCard w-72 h-96 relative">
                                <div
                                    className="Frame11338 w-72 h-56 px-5 py-3 left-0 top-[40px] absolute bg-white rounded justify-center items-center gap-2.5 inline-flex">
                                    <img
                                        className="ImageFrame w-56 h-56 relative rounded"
                                        src="https://via.placeholder.com/220x220"
                                    />
                                </div>
                                <div
                                    className="Add w-10 h-10 p-2 left-0 top-[284px] absolute bg-emerald-700 rounded-tl rounded-tr-lg rounded-bl rounded-br-lg justify-center items-center inline-flex">
                                    <div
                                        className="AddLine12 w-6 h-6 relative flex-col justify-start items-start flex"/>
                                </div>
                                <PlusCircleIcon
                                    className="Add w-10 h-10 p-2 left-0 top-[284px] absolute bg-emerald-700 rounded-tl text-white rounded-tr-lg rounded-bl rounded-br-lg justify-center items-center inline-flex"/>
                                <div
                                    className="Tag px-2  left-0 top-[4px] absolute bg-orange-400 rounded-br-md flex-col justify-center items-start gap-2 inline-flex">
                                    {item.type_trans}
                                </div>
                                <div
                                    className="Frame23 left-0 top-[370px] absolute flex-col justify-start items-start gap-1 inline-flex">
                                    <div className="Frame22 w-32 justify-start items-center gap-2 inline-flex">
                                        <div className="00Sar w-20">
              <span className="text-zinc-950 text-xl font-bold  leading-relaxed">
                {item.price}
              </span>
                                            <span
                                                className="text-zinc-950 text-sm font-bold  leading-tight">
                {item.currency}
              </span>
                                        </div>
                                    </div>
                                    <div
                                        className="PastaReggiaPenneZiti500gMoreInformation w-72 text-black text-base font-normal  leading-tight">
                                        Pasta Reggia — Penne ziti, 500g
                                        <br/>
                                        More information
                                    </div>
                                </div>
                                <svg
                                    className="absolute top-0 right-0"
                                    width="32"
                                    height="32"
                                    viewBox="0 0 32 32"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M25.9504 5.32554C22.3749 3.1323 19.2542 4.01615 17.3795 5.42402L17.3795 5.42403C16.6108 6.00128 16.2265 6.28991 16.0003 6.28991C15.7742 6.28991 15.3899 6.00128 14.6212 5.42402C12.7465 4.01615 9.62577 3.1323 6.05024 5.32554C1.35775 8.20391 0.295953 17.6998 11.1197 25.7111C13.1813 27.237 14.2121 28 16.0003 28C17.7886 28 18.8194 27.237 20.881 25.7111C31.7047 17.6998 30.6429 8.20391 25.9504 5.32554Z"
                                        stroke="#007460"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />
                                </svg>
                                <div
                                    className="Group11579 w-72 left-0 top-[330px] absolute flex justify-between">
                                    <div className="flex items-center">
                                        <svg
                                            className="w-4 h-4 text-yellow-300 ms-1"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 22 20"
                                        >
                                            <path
                                                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                        </svg>
                                        <svg
                                            className="w-4 h-4 text-yellow-300 ms-1"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 22 20"
                                        >
                                            <path
                                                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                        </svg>
                                        <svg
                                            className="w-4 h-4 text-yellow-300 ms-1"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 22 20"
                                        >
                                            <path
                                                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                        </svg>
                                        <svg
                                            className="w-4 h-4 text-yellow-300 ms-1"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 22 20"
                                        >
                                            <path
                                                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                        </svg>
                                        <svg
                                            className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 22 20"
                                        >
                                            <path
                                                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                        </svg>
                                    </div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="32"
                                        height="32"
                                        viewBox="0 0 32 32"
                                        fill="none"
                                    >
                                        <path
                                            d="M4.33366 7.33333C3.86699 7.33333 3.47255 7.17222 3.15033 6.85C2.8281 6.52778 2.66699 6.13333 2.66699 5.66667C2.66699 5.2 2.8281 4.80556 3.15033 4.48333C3.47255 4.16111 3.86699 4 4.33366 4C4.80033 4 5.19477 4.16111 5.51699 4.48333C5.83921 4.80556 6.00033 5.2 6.00033 5.66667C6.00033 6.13333 5.83921 6.52778 5.51699 6.85C5.19477 7.17222 4.80033 7.33333 4.33366 7.33333ZM4.36699 15.6667C3.90033 15.6667 3.50033 15.5056 3.16699 15.1833C2.83366 14.8611 2.66699 14.4667 2.66699 14C2.66699 13.5333 2.83366 13.1389 3.16699 12.8167C3.50033 12.4944 3.90033 12.3333 4.36699 12.3333C4.81144 12.3333 5.19477 12.5 5.51699 12.8333C5.83921 13.1667 6.00033 13.5556 6.00033 14C6.00033 14.4444 5.83921 14.8333 5.51699 15.1667C5.19477 15.5 4.81144 15.6667 4.36699 15.6667ZM4.36699 24C3.90033 24 3.50033 23.8389 3.16699 23.5167C2.83366 23.1944 2.66699 22.8111 2.66699 22.3667C2.66699 21.9 2.83366 21.5 3.16699 21.1667C3.50033 20.8333 3.90033 20.6667 4.36699 20.6667C4.81144 20.6667 5.19477 20.8333 5.51699 21.1667C5.83921 21.5 6.00033 21.9 6.00033 22.3667C6.00033 22.8111 5.83921 23.1944 5.51699 23.5167C5.19477 23.8389 4.81144 24 4.36699 24ZM9.33366 6.66667V4.66667H26.667V6.66667H9.33366ZM9.33366 15V13H24.4337C23.4114 13 22.4448 13.1778 21.5337 13.5333C20.6225 13.8889 19.8114 14.3778 19.1003 15H9.33366ZM9.33366 23.3333V21.3333H16.167C16.167 21.6889 16.1892 22.0333 16.2337 22.3667C16.2781 22.7 16.3448 23.0222 16.4337 23.3333H9.33366ZM24.4337 27.5333C22.7003 27.5333 21.2225 26.9167 20.0003 25.6833C18.7781 24.45 18.167 22.9889 18.167 21.3C18.167 19.5667 18.7781 18.0833 20.0003 16.85C21.2225 15.6167 22.7003 15 24.4337 15C26.1448 15 27.617 15.6167 28.8503 16.85C30.0837 18.0833 30.7003 19.5667 30.7003 21.3C30.7003 22.9889 30.0837 24.45 28.8503 25.6833C27.617 26.9167 26.1448 27.5333 24.4337 27.5333ZM23.9337 25.5333H25.0337V21.8667H28.7003V20.7667H25.0337V17.1H23.9337V20.7667H20.267V21.8667H23.9337V25.5333Z"
                                            fill="#555555"
                                        />
                                    </svg>
                                    <div
                                        className="Tag w-24 h-7 px-2 py-1 left-[144px] top-[2px] absolute bg-amber-200 rounded-br-md justify-between items-center gap-1 inline-flex">
                                        <div
                                            className="AccountBalanceWalletFill0Wght400Grad0Opsz482 w-4 h-4 relative"/>
                                        <div
                                            className="Title text-center flex justify-between items-center gap-1">
              <span className="text-zinc-950 text-base font-semibold  leading-tight">
                +5.99{" "}
              </span>
                                            <span
                                                className="text-zinc-950 text-xs font-semibold  leading-none">
                SAR
              </span>
                                            <span
                                                className="text-zinc-950 text-base font-semibold  leading-tight">
                {" "}
              </span>
                                        </div>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="32"
                                            height="32"
                                            viewBox="0 0 32 32"
                                            fill="none"
                                        >
                                            <path
                                                d="M4.33366 7.33333C3.86699 7.33333 3.47255 7.17222 3.15033 6.85C2.8281 6.52778 2.66699 6.13333 2.66699 5.66667C2.66699 5.2 2.8281 4.80556 3.15033 4.48333C3.47255 4.16111 3.86699 4 4.33366 4C4.80033 4 5.19477 4.16111 5.51699 4.48333C5.83921 4.80556 6.00033 5.2 6.00033 5.66667C6.00033 6.13333 5.83921 6.52778 5.51699 6.85C5.19477 7.17222 4.80033 7.33333 4.33366 7.33333ZM4.36699 15.6667C3.90033 15.6667 3.50033 15.5056 3.16699 15.1833C2.83366 14.8611 2.66699 14.4667 2.66699 14C2.66699 13.5333 2.83366 13.1389 3.16699 12.8167C3.50033 12.4944 3.90033 12.3333 4.36699 12.3333C4.81144 12.3333 5.19477 12.5 5.51699 12.8333C5.83921 13.1667 6.00033 13.5556 6.00033 14C6.00033 14.4444 5.83921 14.8333 5.51699 15.1667C5.19477 15.5 4.81144 15.6667 4.36699 15.6667ZM4.36699 24C3.90033 24 3.50033 23.8389 3.16699 23.5167C2.83366 23.1944 2.66699 22.8111 2.66699 22.3667C2.66699 21.9 2.83366 21.5 3.16699 21.1667C3.50033 20.8333 3.90033 20.6667 4.36699 20.6667C4.81144 20.6667 5.19477 20.8333 5.51699 21.1667C5.83921 21.5 6.00033 21.9 6.00033 22.3667C6.00033 22.8111 5.83921 23.1944 5.51699 23.5167C5.19477 23.8389 4.81144 24 4.36699 24ZM9.33366 6.66667V4.66667H26.667V6.66667H9.33366ZM9.33366 15V13H24.4337C23.4114 13 22.4448 13.1778 21.5337 13.5333C20.6225 13.8889 19.8114 14.3778 19.1003 15H9.33366ZM9.33366 23.3333V21.3333H16.167C16.167 21.6889 16.1892 22.0333 16.2337 22.3667C16.2781 22.7 16.3448 23.0222 16.4337 23.3333H9.33366ZM24.4337 27.5333C22.7003 27.5333 21.2225 26.9167 20.0003 25.6833C18.7781 24.45 18.167 22.9889 18.167 21.3C18.167 19.5667 18.7781 18.0833 20.0003 16.85C21.2225 15.6167 22.7003 15 24.4337 15C26.1448 15 27.617 15.6167 28.8503 16.85C30.0837 18.0833 30.7003 19.5667 30.7003 21.3C30.7003 22.9889 30.0837 24.45 28.8503 25.6833C27.617 26.9167 26.1448 27.5333 24.4337 27.5333ZM23.9337 25.5333H25.0337V21.8667H28.7003V20.7667H25.0337V17.1H23.9337V20.7667H20.267V21.8667H23.9337V25.5333Z"
                                                fill="#555555"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>))}
                </div>}
            </div>
        </div>
    </>);
};
export default TopDeals;