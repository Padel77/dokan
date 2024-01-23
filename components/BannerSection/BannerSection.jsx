import React from 'react';


function BannerSection(props) {
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
            <div className='sm:block hidden '>
        <div className='BannerSection flex justify-between  px-16 pt-6   text-white   '>
            <div className='mb-4 text-sm leading-3 py-3 w-[50%]'>
                <h2 className='text-3xl  font-bold pb-2  '>
                    Return up to 30% of the product cost by getting cashback on each order!
                </h2>
                <button className='bg-white text-red-600 px-8 py-4 capitalize font-semibold rounded-md'>learn more
                </button>
            </div>
            <img src="/img/cashback.svg" alt='cashback.svg' className=""/>
        </div>

    </div>
    <div className='sm:hidden block '>
        <div className='BannerSection flex justify-between  px-16 py-6 m-3   text-white   '>
            <div className='mb-4 text-sm leading-3 py-3 '>
                <h2 className='text-3xl  font-bold pb-2  '>
                    Back to school!
                </h2>
                <p>Sale on all stationery products</p>
            </div>
            <div className='flex gap-0'>
            <img src="/img/offersec.png" alt='cashback.svg'/>
            <img src="/img/offersec2.png" alt='cashback.svg'/>
            </div>
        </div>

    </div>
        </>
    )
}

export default BannerSection;