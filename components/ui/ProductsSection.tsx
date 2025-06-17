import { Button } from '../common/button';
const ProductsSection = () => {
	const Products = [
		{
			name: 'headphones',
			desktopimgSrc:
				'/assets/shared/desktop/image-category-thumbnail-headphones.png',
			link: '/headphones',
		},
		{
			name: 'speakers',
			desktopimgSrc:
				'/assets/shared/desktop/image-category-thumbnail-speakers.png',
			link: '/speakers',
		},
		{
			name: 'earphones',
			desktopimgSrc:
				'/assets/shared/desktop/image-category-thumbnail-earphones.png',
			link: '/earphones',
		},
	];

	return (
		<section className="bg-pureWhite">
			<div className="flex flex-col px-8 py-48 viewport gap-y-24 md:gap-x-5 md:flex md:flex-row">
				{Products.map((Product) => (
					<div
						key={Math.random()}
						className="bg-darkWhite rounded-[8px] w-full flex flex-col items-center gap-y-[24px] justify-between py-4"
					>
						<img
							src={Product.desktopimgSrc}
							alt=""
							className="w-48 -mt-[80px]"
						/>
						<div className="flex flex-col gap-y-[17px] items-center text-center">
							<h6 className="uppercase text-h6">{Product.name}</h6>
							<Button
								variant="Ghost"
								link={Product.link}
								className="flex flex-row items-center gap-x-2"
								action="shop"
							>
								<img
									src="/assets/shared/desktop/icon-arrow-right.svg"
									alt="icon of an arrow pointing right"
								/>{' '}
							</Button>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default ProductsSection;
