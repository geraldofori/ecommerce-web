"use client";
import { useMediaQuery } from 'react-responsive';

const BestGear = () => {
	const isDesktop = useMediaQuery({
		query: '(min-width: 1024px)',
	});

	return (
		<section className="w-full bg-pureWhite">
			<div className="flex flex-col items-center w-full px-8 py-40 lg:flex-row-reverse lg:py-52 viewport lg:gap-x-16 gap-y-16">
				<div
					className={`w-full ${isDesktop && `bg-[url(/assets/shared/desktop/image-best-gear.jpg)]`} ${!isDesktop && `bg-[url(/assets/shared/tablet/image-best-gear.jpg)]`} h-[300px] lg:h-[573px] rounded-[8px] sm:bg-fit bg-no-repeat bg-center`}
				></div>
				<div className="flex flex-col gap-y-[1.5rem] w-full lg:text-start text-center max-w-[573px]">
					<h2 className="uppercase text-pureBlack text-h2">
						Bringing you the{' '}
						<span className="uppercase text-darkOrange">best</span> audio gear
					</h2>
					<p className="text-pureBlack">
						Located at the heart of New York City, Audiophile is the premier
						store for high end headphones, earphones, speakers, and audio
						accessories. We have a large showroom and luxury demonstration rooms
						available for you to browse and experience a wide range of our
						products. Stop by our store to meet some of the fantastic people who
						make Audiophile the best place to buy your portable audio equipment.
					</p>
				</div>
			</div>
		</section>
	);
};

export default BestGear;
