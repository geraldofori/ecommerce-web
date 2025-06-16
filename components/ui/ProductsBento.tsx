"use client";
import { useMediaQuery } from 'react-responsive';
import { Button } from '../common/button';


const ProductsBento = () => {
    const isDesktop = useMediaQuery({
        query: '(min-width: 800px)',
    });
    const isTablet = useMediaQuery({
        query: '(max-width: 799px) and (min-width: 376px)',
    });
    const isMobile = useMediaQuery({
        query: '(max-width: 375px)',
    });
    return (
        <section className="flex flex-col w-full pb-16 bg-pureWhite gap-y-8">
            <div className="flex flex-col w-full px-8 viewport gap-y-24">
                <div className="relative flex flex-col px-12 gap-y-16 bg-darkOrange lg:h-[560px] h-fit py-12 overflow-hidden md:flex md:flex-row md:items-end md:justify-end rounded-[8px]">
                    <img
                        src="/assets/home/desktop/pattern-circles.svg"
                        alt="pattern of circles"
                        className="absolute  left-0 -top-32 max-lg:h-[48rem] max-lg:scale-150 lg:-bottom-72 lg:right-64"
                    />
                    <div className="flex flex-col items-center justify-center w-full gap-y-12 lg:gap-x-12 lg:flex lg:flex-row lg:items-start">
                        <div className="relative flex-col items-center w-full ">
                            <img
                                src="/assets/home/desktop/image-speaker-zx9.png"
                                alt=""
                                width={350}
                                className="z-50 justify-self-center"
                            />
                        </div>
                        <div className="flex flex-col gap-y-[1rem] mx-auto lg:mx-0 px-8 max-w-[398px] text-start justify-items-center max-lg:items-center max-lg:text-center">
                            <div className="flex flex-col gap-y-[1.5rem]">
                                <h1 className="uppercase text-pureWhite text-h1">
                                    ZX9 SPEAKER
                                </h1>
                                <p className="text-pureWhite">
                                    Upgrade to premium speakers that are phenomenally built to
                                    deliver truly remarkable sound.
                                </p>
                            </div>
                            <Button
                                action="See Product"
                                link="/headphones"
                                variant="Outline"
                                className="mt-12 text-subtitle text-pureWhite bg-pureBlack w-fit"
                            ></Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full px-8 viewport">
                <div
                    className={`px-8 rounded-[8px] ${isDesktop && `bg-[url(/assets/home/desktop/image-speaker-zx7.jpg)]`} ${isTablet && `bg-[url(/assets/home/tablet/image-speaker-zx7.jpg)]`} ${isMobile && `bg-[url(/assets/home/mobile/image-speaker-zx7.jpg)]`} h-[320px] bg-no-repeat bg-fit bg-center flex flex-col justify-center`}
                >
                    <div className="flex flex-col gap-y-[.4rem] px-8 py-8 max-w-[398px] text-start  items-start ">
                        <div className="flex flex-col gap-y-[1.5rem]">
                            <h4 className="uppercase text-pureBlack text-h4">ZX7 SPEAKER</h4>
                        </div>
                        <Button
                            action="See Product"
                            link="/headphones"
                            variant="Outline"
                            className="mt-12 text-subtitle w-fit"
                        ></Button>
                    </div>
                </div>
            </div>
            <div className="w-full px-8 viewport">
                <div className="md:grid w-full md:grid-cols-2 gap-2.5 md:h-[320px] max-md:grid max-md:grid-rows-2">
                    <div className="bg-[url(/assets/home/desktop/image-earphones-yx1.jpg)] w-full bg-fit bg-center rounded-[8px] max-md:h-[320px] bg-no-repeat"></div>
                    <div className="w-full h-full bg-darkWhite max-md:h-[320px] rounded-[8px] flex flex-col justify-center px-6 md:px-16">
                        <div className="flex flex-col gap-y-[1.5rem]">
                            <h4 className="uppercase text-pureBlack text-h4">ZX7 SPEAKER</h4>
                        </div>
                        <Button
                            action="See Product"
                            link="/headphones"
                            variant="Outline"
                            className="mt-12 text-subtitle w-fit"
                        ></Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductsBento;
