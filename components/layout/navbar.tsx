"use client";
import { AlignJustify, ShoppingCart } from 'lucide-react';
import { useMediaQuery } from 'react-responsive';
import Link from 'next/link';
import { CartPopover } from '../ui/CartPopover';
const NavBar = () => {
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
		<header className="bg-oilBlack ">
			<section
				className={`viewport flex flex-row w-full justify-between py-[2.25rem] border-b-[0.0625rem] border-pureWhite/20 ${isTablet && `px-[2.48rem]`} ${isDesktop && `px-[2.48rem]`} ${isMobile && `px-[1.2rem]`}`}
			>
				{isMobile && <AlignJustify className="stroke-pureWhite" />}
				<div className="flex flex-row gap-x-[2.26rem]">
					{isTablet && <AlignJustify className="stroke-pureWhite" />}
					<Link href="/">
						<img src="/audiophileLogo.svg" alt="Logo of Audiophile" />
					</Link>
				</div>
				{isDesktop && (
					<nav className=" flex flex-row gap-x-[2.12rem]">
						<Link
							href="/"
							className="uppercase duration-300 text-subtitle text-pureWhite hover:text-darkOrange"
						>
							Home
						</Link>
						<Link
							href="/headphones"
							className="uppercase duration-300 text-subtitle text-pureWhite hover:text-darkOrange"
						>
							Headphones
						</Link>
						<Link
							href="/speakers"
							className="uppercase duration-300 text-subtitle text-pureWhite hover:text-darkOrange"
						>
							Speakers
						</Link>
						<Link
							href="/earphones"
							className="uppercase duration-300 text-subtitle text-pureWhite hover:text-darkOrange"
						>
							Earphones
						</Link>
					</nav>
				)}
				<div>
					<CartPopover>
						<ShoppingCart className="stroke-pureWhite" />
					</CartPopover>
				</div>
			</section>
		</header>
	);
};

export default NavBar;
