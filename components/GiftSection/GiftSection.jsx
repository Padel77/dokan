import React from 'react';


function GiftSection(props) {
    const posts = [{
        id: 1,
        title: 'Boost your conversion rate',
        href: '#',
        description: 'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: {title: 'Marketing', href: '#'},
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    }, // More posts...
    ]
    return (
        <>
            <div className='lg:block hidden '>
        <div className='Giftsec flex justify-between align-middle items-center   '>
            <div className=' leading-3  px-16  '>
                <h2 className='text-3xl   font-bold pb-6  '>
                    Take care just like that with Dukan gift cards
                </h2>
                <button className='bg-green-900 text-white px-8 py-4 capitalize font-semibold rounded-md'>learn more
                </button>
                <p className='relative top-[100px] text-sm xl:block hidden '>
                    *Some explanation small text if needed displayed here.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis egestas mi
                </p>
            </div>
            <img src="/img/gift.png" alt='cashback.svg' className=""/>
        </div>

    </div>
    <div className='sm:hidden block '>
        <div className='Giftsec2 flex justify-between rounded-xl   m-3 px-3 py-0   text-white   '>
            <div className='mb-4 text-sm  leading-3  py-4'>
                <h2 className='text-2xl  font-bold pb-2  '>
                    Up to 50% discount
                </h2>
                <p className='text-gray-400 pb-2'>Household Essentials</p>
                <button className='bg-orange-600 text-white px-10 py-4 capitalize font-semibold rounded-md'>Shop Now
                </button>
            </div>
            <div>
                <img src="/img/discountSec.png" alt='cashback.svg'/>
            </div>
        </div>

    </div>
        </>
    )
}

export default GiftSection;