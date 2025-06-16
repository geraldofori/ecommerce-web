import { Popover, PopoverContent, PopoverTrigger } from "../common/popover";

interface CartProps {
	children: React.ReactNode;
}

export const CartPopover: React.FC<CartProps> = ({ children }) => {
	return (
		<Popover>
			<PopoverTrigger asChild>{children}</PopoverTrigger>
			<PopoverContent className="w-80">
				<div className="grid gap-4">
					<div className="flex flex-row justify-between">
						<div className="flex flex-row items-center uppercase outline-none gap-x-2 text-h6">
							<h4 className="leading-none ">Cart</h4>
							<span>(0)</span>
						</div>
						<button className="underline text-body text-pureBlack/50">
							Remove all
						</button>
					</div>
					<div className="grid grid-cols-1 gap-2"></div>
					<button className="px-8 py-3 uppercase duration-300 text-body text-pureWhite bg-darkOrange hover:bg-fadedOrange">
						Checkout
					</button>
				</div>
			</PopoverContent>
		</Popover>
	);
};
