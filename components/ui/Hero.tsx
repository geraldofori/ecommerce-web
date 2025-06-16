"use client";
import { useMediaQuery } from 'react-responsive';
import { Button } from '../common/button';


const Hero = () => {
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
		<section
			className={`bg-pureBlack ${isDesktop && `bg-[url(/assets/home/desktop/image-hero.jpg)]`} ${isTablet && `bg-[url(/assets/home/tablet/image-header.jpg)]`} ${isMobile && `bg-[url(/assets/home/mobile/image-header.jpg)]`} bg-cover bg-no-repeat bg-center`}
		>
			<div className="w-full py-40 lg:py-52 viewport">
				<div className="flex flex-col gap-y-[1rem] mx-auto lg:mx-0 px-8 max-w-[398px] text-center md:text-start items-center lg:items-start">
					<p className="uppercase text-overline text-pureWhite/40">
						New Product
					</p>
					<div className="flex flex-col gap-y-[1.5rem]">
						<h1 className="uppercase text-pureWhite text-h1">
							XX99 Mark II Headphones
						</h1>
						<p className="text-pureWhite">
							Experience natural, lifelike audio and exceptional build quality
							made for the passionate music enthusiast.
						</p>
					</div>
					{/* <Link to={'/headphones'} className='text-pureWhite mt-12 px-[1.97rem] py-[0.94rem] bg-darkOrange  hover:bg-fadedOrange subtitle duration-300'> See product</Link> */}
					<Button
						action="See Product"
						link="/headphones"
						variant="Solid"
						className="mt-12 text-subtitle text-pureWhite"
					></Button>
				</div>
			</div>
		</section>
	);
};

export default Hero;
