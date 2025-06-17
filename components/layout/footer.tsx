import Link from 'next/link';
const Footer = () => {
	return (
		<section className="w-full bg-pureBlack">
			<div className="viewport">
				<div className="relative flex flex-col items-center w-full p-6 lg:p-10 gap-y-8 md:items-start">
					<div className="absolute top-0 w-24 h-2 bg-darkOrange"></div>
					<div className="flex flex-col items-center w-full md:items-start lg:flex lg:flex-row lg:justify-between lg:items-center">
						<Link href="/">
							<img
								src="/audiophileLogo.svg"
								alt="Logo of Audiophile"
								className="pt-8 lg:pt-0"
							/>
						</Link>
						<nav className=" flex flex-col gap-y-[2.12rem] text-center md:flex md:flex-row gap-x-4 md:text-start">
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
					</div>
					<div className="text-center md:text-start">
						<p className="text-body text-pureWhite/50 lg:max-w-[540px]">
							{`Audiophile is an all in one stop to fulfill your audio needs.
							We&apos;re a small team of music lovers and sound specialists who are
							devoted to helping you get the most out of personal audio. Come
							and visit our demo facility - we&apos;re open 7 days a week.`}
						</p>
					</div>
					<div className="flex flex-col items-center w-full gap-y-8 md:flex md:flex-row md:justify-between">
						<p className="text-body text-pureWhite/50">
							Copyright {new Date().getFullYear()}. All Rights Reserved
						</p>
						<div className="flex flex-row w-fit gap-x-3">
							<img src="/assets/shared/desktop/icon-facebook.svg" alt="icon of facebook" />
							<img src="/assets/shared/desktop/icon-instagram.svg" alt="icon of instagram" />
							<img src="/assets/shared/desktop/icon-twitter.svg" alt="icon of twitter" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Footer;
