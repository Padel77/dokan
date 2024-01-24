import React, { useState } from "react";
import { AiOutlineExpandAlt } from "react-icons/ai";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
const HeadCarousel = () => {
    const [open, setOpen] = useState(false);
    const [image, setImage] = useState("");

    const galleryTab = [
// you can add more image if you want
        {
            imageUrl: "/img/Grid1.png",
            type: "Nature",
            title: "Beautiful Work",
        },
        {
            imageUrl: "/img/Grid2.png",
            type: "Nature",
            title: "Beautiful Work",
        },
        {
            imageUrl: "/img/Grid3.png",
            type: "Nature",
            title: "Beautiful Work",
        },
        {
            imageUrl: "/img/Grid4.png",
            type: "Nature",
            title: "Beautiful Work",
        },
    ];



    const slides = galleryTab.map((item) => ({
        src: item.imageUrl,
        width: 300,
        height: 150,
        srcSet: [
            { src: item.imageUrl, width: 150, height: 150 },
            { src: item.imageUrl, width: 640, height: 426 },
            { src: item.imageUrl, width: 1200, height: 800 },
            { src: item.imageUrl, width: 2048, height: 1365 },
            { src: item.imageUrl, width: 3840, height: 2560 },
        ],
    }));

    return (
        <>
            <div className="sm:hidden block mb-6 ">
                <div className="h-full ">
                    <div className=" md:grid-cols-3 gap-0   md:mx-0">
                        {galleryTab.map((x, index) => {
                            return (
                                <div key={index} className="w-full   px-2 relative ">
                                    <div className="group ">
                                        <div
                                            className="bg-cover bg-center  h-40  bg-no-repeat"
                                            style={{ backgroundImage: `url("${x.imageUrl}")` }}
                                        >
                                            {/*<div className="text-3xl text-white absolute bottom-0 left-2 z-10">*/}
                                            {/*    /!*<div>{x.title}</div>*!/*/}
                                            {/*</div>*/}
                                        </div>
                                        <div
                                            className="bg-black opacity-0 group-hover:opacity-75 absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out"
                                            onClick={() => {
                                                setOpen(true);
                                                setImage(x.imageUrl);
                                            }}
                                        >
                                            <p className="text-white">
                                                <AiOutlineExpandAlt className="text-5xl border w-16 h-16 bg-neutral-500 hover:bg-white hover:text-black p-3 cursor-pointer rounded-full" />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <Lightbox
                    open={open}
                    close={() => setOpen(false)}
                    plugins={[Zoom]}
                    showPrevNext={false}
                    slides={slides}
                />
            </div>
            </>
    );
};
export default HeadCarousel;