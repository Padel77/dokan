import React from 'react';
import {BellIcon} from "@heroicons/react/24/outline";
import Link from "next/link";
import {HomeIcon} from "@heroicons/react/24/solid";

function StickyFooter(props) {
    const navigation = [{id:1,icon:'/img/StickyFooter/user.svg', name: 'Home', href: '#', current: true},
        {id:2,icon:'/img/StickyFooter/Categories.svg', name: 'Categories', href: '#', current: false
    }, {id:3,icon:'/img/StickyFooter/Deals.svg',name: 'Deals', href: '#', current: false}, {
        id:4,icon:'/img/StickyFooter/cart.svg',name: 'Cart', href: '#', current: false
    }, {id:5,icon:'/img/StickyFooter/user.svg',name: 'Account', href: '#', current: false}, ]
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return (

        <div className="fixed bottom-0 bg-white h-20 text-indigo-50  justify-center text-center w-screen z-50">
            <div className="flex sm:space-x-10 space-x-6 gap-1 sm:gap-3 justify-center ">
                {navigation.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(item.current ? 'border-t-4  border-[#FF4300] text-[#FF4300]  font-bold' : 'text-gray-600  hover:text-black hover:font-bold ', ' text-sm text-center my-auto flex flex-col justify-center items-center py-2    ')}
                        aria-current={item.current ? 'page' : undefined}
                    >
                        <img
                            key={item.id}
                            src={item.icon}
                            alt="icon"
                            className='h-8 w-8 '
                        />
                        {item.name}
                    </Link>))}
            </div>
        </div>
    );
}

export default StickyFooter;