import {Fragment} from 'react'
import {Disclosure} from '@headlessui/react'
import {Bars3Icon, BellIcon, HeartIcon, ShoppingCartIcon, UserIcon, XMarkIcon} from '@heroicons/react/24/outline'
import {CiBarcode} from "react-icons/ci";
import {FaWhatsapp} from "react-icons/fa";
import Link from "next/link";

const navigation = [{name: 'All categories', href: '#', current: true}, {
    name: 'Highest cashaback', href: '#', current: false
}, {name: 'Top Deals', href: '#', current: false}, {
    name: 'Fruits & Vegetables', href: '#', current: false
}, {name: 'Diary & Eggs', href: '#', current: false}, {
    name: 'Beverages & Drinks', href: '#', current: false
}, {name: 'Fresh Bakery', href: '#', current: false}, {
    name: 'Baby Products', href: '#', current: false
}, {name: 'Household', href: '#', current: false},]

function MainHeader(props) {
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
    return (<>
        <Disclosure as="nav" className="lg:block  hidden mb-2">
            {({open}) => (<>
                <div className="">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            {/* Mobile menu button*/}
                            <Disclosure.Button
                                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                <span className="absolute -inset-0.5"/>
                                <span className="sr-only">Open main menu</span>
                                {open ? (<XMarkIcon className="block h-6 w-6" aria-hidden="true"/>) : (
                                    <Bars3Icon className="block h-6 w-6" aria-hidden="true"/>)}
                            </Disclosure.Button>
                        </div>
                        <div
                            className="flex flex-1 md:gap-5 gap-3 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex gap-2 flex-shrink-0 items-center">
                                <img
                                    className="h-8 w-auto"
                                    src='/img/Vector.svg'
                                    alt="Your Company"
                                />
                                <div className='text-sm  leading-4'>
                                    <p className="text-l">Fast Delivery & </p>
                                    <p className=""> Free delivery</p>
                                </div>
                            </div>
                            <div className="flex text-wrapflex-shrink-0 items-center">
                                <img
                                    className="h-8 w-auto"
                                    src='/img/storefront.svg'
                                    alt="Your Company"
                                />
                                <div className='text-sm leading-4'>
                                    <p className="">+ 500 offline stores with</p>
                                    <p>high quality products </p>
                                </div>
                            </div>
                            <div className="flex flex-shrink-0 items-center">
                                <img
                                    className="h-8 w-auto"
                                    src='/img/Active.svg'
                                    alt="Your Company"
                                />
                                <div className='text-sm leading-4'>
                                    <p className="">Save more by returning </p>
                                    <p className="">cashback for each order</p>
                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                </div>

                            </div>
                        </div>
                        <div
                            className="absolute gap-8 inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <div className='flex gap-1.5'>
                                <button
                                    type="button"
                                    className="relative "
                                >
                                    AR
                                </button>
                                |
                                <button
                                    type="button"
                                    className="relative "
                                >
                                    EN
                                </button>
                            </div>

                            <div className='flex font-mono font-normal justify-center text-center '>
                                <FaWhatsapp className='h-6 w-8 text-green-800'/>
                                <span className=""> +966 55 80 2 88 55</span>
                            </div>
                        </div>
                    </div>
                </div>
                <Disclosure.Panel className="sm:hidden">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        {navigation.map((item) => (<Disclosure.Button
                            key={item.name}
                            as="a"
                            className={classNames(item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium')}
                            href={item.href}
                            aria-current={item.current ? 'page' : undefined}
                        >
                            {item.name}
                        </Disclosure.Button>))}
                    </div>
                </Disclosure.Panel>
            </>)}
        </Disclosure>
        <Disclosure as="nav" className='md:bg-white md:text-black HeadSec mb-2 lg:py-0 py-3  '>
            {({open}) => (<>
                <div >
                    <div className="relative flex  items-center justify-between">
                        <div
                            className="lg:flex block md:gap-8 gap-5  flex-1  lg:mx-2 mx-4  items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="  flex-shrink-0 items-center mb-3">
                                <div className="lg:hidden flex inset-y-0 justify-between     items-center ">
                                    <div className='flex '>
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button
                                        className="relative inline-flex items-center justify-center rounded-md p-2 text-white    focus:outline-none  focus:ring-inset focus:ring-white">
                                        <span className="absolute -inset-0.5"/>
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (<XMarkIcon className="block h-8 w-10" aria-hidden="true"/>) : (
                                            <Bars3Icon className="block h-8 w-10" aria-hidden="true"/>)}
                                    </Disclosure.Button>
                                    <img
                                        className="h-10 w-auto block md:hidden"
                                        src="/img/Group2.svg"
                                        alt="Your Company"
                                    />
                                    </div>
                                    <div className='flex '>
                                        <div className=" text-sm Bright-Orange block lg:hidden   ">
                                            SAR 124,00
                                        </div>

                                        <button
                                            type="button"
                                            className="relative rounded-full  p-1 text-gray-800 hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                        >
                                            <span className="absolute -inset-1.5"/>
                                            <span className="sr-only">View Shopping Cart</span>
                                            <ShoppingCartIcon color='white' className="h-6 w-6" aria-hidden="true"/>
                                        </button>
                                    </div>
                                </div>
                                <img
                                    className=" w-auto hidden md:block "
                                    src="/img/Group.svg"
                                    alt="Your Company"
                                />
                            </div>
                            <form className='lg:block  '>
                                <label htmlFor="default-search"
                                       className="mb-2  text-sm font-medium text-gray-900 sr-only white:text-dark">Search</label>
                                <div className="relative">
                                    <div
                                        className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                             aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                             viewBox="0 0 20 20">
                                            <path stroke="currentColor" stroke-linecap="round"
                                                  stroke-linejoin="round" stroke-width="2"
                                                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                        </svg>
                                    </div>
                                    <input type="search" id="default-search"
                                           className="block w-full p-3 rounded-e-3xl  ps-12 lg:pe-32 text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                           placeholder="Search Product..." required/>
                                    <button type="submit"
                                            className=" text-xl absolute end-1 bottom-1  focus:ring-4 focus:outline-none focus:ring-light-300  rounded-lg px-4 py-2 dark:bg-light-600 dark:hover:bg-light-700 dark:focus:ring-light-800">
                                        <CiBarcode className=''/>
                                    </button>

                                </div>
                            </form>

                            <div className=" hidden  md:flex gap-1 flex-shrink-0 items-center">
                                <img
                                    className="h-8 w-auto"
                                    src='/img/Location.svg'
                                    alt="Your Company"
                                />
                                <div>
                                    <div className='text-sm leading-3'>
                                        <span className=" text-gray-800">Delivery to:</span>
                                        <div className='font-bold leading-5'>
                                        <p className=""> Sulaimaniyah Dist, 455 Riyad Saud... </p>
                                            <p className="">(30-45 mins)</p>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className='text-red-600 text-sm underline font-bold'>
                                    Change
                                </button>
                            </div>
                            <div
                                className=" gap-1 border-b-2 xl:block hidden rounded-ee-2xl flex-shrink-0 items-center Bright-Orange justify-center px-2 ">
                                <div >
                                    <span className="text-sm  text-gray-600">Your Cashback</span>
                                </div>
                                <span
                                    className="text-sm flex font-bold justify-center align-middle text-center"><img src='/img/HeadIcon.svg'/>SAR 124,00</span>
                            </div>
                        </div>
                        <div
                            className="lg:flex hidden absolute inset-y-0  top-0 right-0  gap-3 items-center pr-2 sm:static sm:inset-auto ">
                            <Link href={`/login`}
                                type="button"
                                className="sm:block hidden  relative rounded-full  p-1 text-gray-800 hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                            >
                                <span className="absolute -inset-1.5"/>
                                <span className="sr-only">View notifications</span>
                                <BellIcon className="h-6 w-6" aria-hidden="true"/>
                            </Link>
                            <Link href={`/login`}
                                type="button"
                                className=" sm:block hidden relative rounded-full  p-1 text-gray-800 hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                            >
                                <span className="absolute -inset-1.5"/>
                                <span className="sr-only">View Profile</span>

                                <UserIcon className="h-6 w-6" aria-hidden="true"/>

                            </Link>
                            <Link href={`/login`}
                                type="button"
                                className="sm:block hidden relative rounded-full  p-1 text-gray-800 hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                            >
                                <span className="absolute -inset-1.5"/>
                                <span className="sr-only">View Favoirate</span>
                                <HeartIcon className="h-6 w-6" aria-hidden="true"/>
                            </Link>
                            <Link href={`/login`}
                                type="button"
                                className="sm:block hidden relative rounded-full  p-1 text-gray-800 hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                            >
                                <span className="absolute -inset-1.5"/>
                                <span className="sr-only">View Shopping Cart</span>
                                <ShoppingCartIcon className="h-6 w-6" aria-hidden="true"/>
                            </Link>
                        </div>
                    </div>
                </div>
                <Disclosure.Panel className="sm:hidden ">
                    <div className="space-y-1 px-2 pb-3 pt-2 ">
                        {navigation.map((item) => (<Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className={classNames(item.current ? 'bg-gray-900 text-white ' : 'text-gray-300  hover:bg-gray-700 hover:text-white ', 'block  rounded-md px-3 py-2 text-base font-medium')}
                            aria-current={item.current ? 'page' : undefined}
                        >
                            {item.name}
                        </Disclosure.Button>))}
                    </div>
                </Disclosure.Panel>
            </>)}
        </Disclosure>
        <Disclosure as="nav">
            <Disclosure.Panel className="lg:hidden block">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    {navigation.map((item) => (<Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className={classNames(item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium')}
                        aria-current={item.current ? 'page' : undefined}>
                        {item.name}
                    </Disclosure.Button>))}
                </div>
            </Disclosure.Panel>
            <div className="lg:block hidden sm:ml-6  border-b-2">
                <div className="flex sm:space-x-10 space-x-6">
                    {navigation.map((item) => (<a
                        key={item.name}
                        href={item.href}
                        className={classNames(item.current ? ' text-dark font-bold' : 'text-gray-600 font-medium   hover:text-black font-bold ', 'rounded-md px-3 py-2 text-sm  ')}
                        aria-current={item.current ? 'page' : undefined}
                    >
                        {item.name}
                    </a>))}
                </div>
            </div>
        </Disclosure>
        <div className="location-sec flex  justify-center  md:hidden gap-1  flex-shrink-0 sepia items-center">
            <img
                className="h-8 w-auto"
                src='/img/location-02.svg'
                alt="Your Company"
            />
            <div>
                <div className='text-sm leading-3 '>
                    <div className='font-bold text-balance text-wrap leading-3'>
                        <p className=""> Sulaimaniyah Dist, 455 Riyad Saud... (30-45 mins)</p>
                    </div>
                </div>
            </div>
            <button type="submit" className=' text-red-600 text-sm underline'>
                Change
            </button>
        </div>
    </>);
}

export default MainHeader


