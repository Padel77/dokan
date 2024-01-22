import React from 'react';


function OfferSection(props) {
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

    return (<div className=''>
        {/*            <div className="bg-green-900  py-24 sm:py-32">*/}
        {/*            <div className="mx-auto max-w-7xl px-6 lg:px-8">*/}
        {/*            <div className="mx-auto max-w-2xl lg:mx-0 text-center">*/}
        {/*            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">From the blog</h2>*/}
        {/*            <p className="mt-2 text-lg leading-8 text-gray-600">*/}
        {/*            Learn how to grow your business with our expert advice.*/}
        {/*            </p>*/}
        {/*            </div>*/}
        {/*            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">*/}
        {/*        {posts.map((post) => (*/}
        {/*            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">*/}
        {/*            <div className="flex items-center gap-x-4 text-xs">*/}
        {/*                <time dateTime={post.datetime} className="text-gray-500">*/}
        {/*                    {post.date}*/}
        {/*                </time>*/}
        {/*                <a*/}
        {/*                    href={post.category.href}*/}
        {/*                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"*/}
        {/*                >*/}
        {/*                    {post.category.title}*/}
        {/*                </a>*/}
        {/*            </div>*/}
        {/*            <div className="group relative">*/}
        {/*                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">*/}
        {/*                    <a href={post.href}>*/}
        {/*                        <span className="absolute inset-0" />*/}
        {/*                        {post.title}*/}
        {/*                    </a>*/}
        {/*                </h3>*/}
        {/*                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>*/}
        {/*            </div>*/}
        {/*            <div className="relative mt-8 flex items-center gap-x-4">*/}
        {/*                <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />*/}
        {/*                <div className="text-sm leading-6">*/}
        {/*                    <p className="font-semibold text-gray-900">*/}
        {/*                        <a href={post.author.href}>*/}
        {/*                            <span className="absolute inset-0" />*/}
        {/*                            {post.author.name}*/}
        {/*                        </a>*/}
        {/*                    </p>*/}
        {/*                    <p className="text-gray-600">{post.author.role}</p>*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*        </article>*/}
        {/*    ))}*/}
        {/*</div>*/}
        {/*</div>*/}
        {/*</div>*/}
        <div className='OfferSection  py-20   text-white text-center  '>
            <div className='minutes flex justify-center align-middle  '>
                <div className='hours text-center'>
                    <div className='flex gap-1'>
                        <p className=' Offer-subdiv text-6xl p-2'>3</p>
                        <p className=' Offer-subdiv text-6xl p-2'>2</p>
                    </div>
                    <p className='text-sm'>hours</p>
                </div>
                <div className='font-bold  text-3xl   align-middle'>
                    :
                </div>
                <div className='hours text-center'>
                    <div className='flex gap-1'>
                        <p className=' Offer-subdiv text-6xl p-2'>3</p>
                        <p className=' Offer-subdiv text-6xl p-2'>2</p>
                    </div>
                    <p className='text-sm'>minutes</p>
                </div>

            </div>
            <div className='mb-4 text-sm leading-3'>
                <h2 className='text-3xl Offer-elColor font-bold pb-2'>
                    -40% on all Personal Care products
                </h2>
                <p>
                    *Some explanation small text if needed displayed here. Lorem ipsum dolor sit amet,
                </p>
                <p>
                    consectetur adipiscing elit. Donec lobortis egestas mi
                </p>
            </div>
            <button className='Offer-subdiv py-2 px-4 hover:bg-amber-800  rounded '>
                Shop Now
            </button>
        </div>


    </div>);
}

export default OfferSection;