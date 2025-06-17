'use client';

import React from 'react';
import { Minus, Plus, X } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from "../common/popover";
import { useCart } from '@/hooks/useCart';
import { useDisplay } from '@/hooks/useDisplay';

interface CartProps {
	children: React.ReactNode;
}

export const CartPopover: React.FC<CartProps> = ({ children }) => {
	const {
		cart,
		totalPrice,
		totalItems,
		uniqueItemsCount,
		clearCart,
		removeItem,
		increaseQuantity,
		decreaseQuantity,
	} = useCart();
	const display = useDisplay();

	return (
		<Popover>
			<PopoverTrigger asChild>{children}</PopoverTrigger>
			<PopoverContent className="w-80 bg-pureWhite border border-pureBlack/10 shadow-lg">
				<div className="grid gap-4">
					{/* Header */}
					<div className="flex flex-row justify-between items-center">
						<div className="flex flex-row items-center uppercase outline-none gap-x-2 text-h6">
							<h5 className="leading-none text-pureBlack">Cart ({uniqueItemsCount})</h5>
							<span className="text-pureBlack/50">({totalItems})</span>
						</div>
						{cart.length > 0 && (
							<button
								onClick={clearCart}
								className="underline text-body text-pureBlack/50 text-darkOrange transition-colors"
							>
								Remove all
							</button>
						)}
					</div>

					{/* Cart Items */}
					<div className="grid grid-cols-1 gap-4 max-h-64 overflow-y-auto">
						{cart.length === 0 ? (
							<div className="text-center py-8">
								<p className="text-pureBlack/50 text-body">Your cart is empty</p>
							</div>
						) : (
							cart.map((item) => (
								<div key={item.product.id} className="flex items-center gap-4 p-2">
									{/* Product Image */}
									<div className="w-16 h-16 bg-darkWhite rounded-lg overflow-hidden flex-shrink-0">
										<img
											src={item.product.categoryImage[display]}
											alt={item.product.name}
											className="w-full h-full object-cover"
										/>
									</div>

									{/* Product Info */}
									<div className="flex-1 min-w-0">
										<h6 className="text-sm font-bold text-pureBlack truncate">
											{item.product.name.replace(/\s+(headphones|speaker|earphones)$/i, '')}
										</h6>
										<p className="text-sm text-pureBlack/50">
											${item.product.price.toLocaleString()}
										</p>
									</div>

									{/* Quantity Controls */}
									<div className="flex items-center gap-2">
										<div className="flex items-center bg-darkWhite rounded">
											<button
												onClick={() => decreaseQuantity(item.product.id)}
												className="p-2 hover:bg-pureBlack/10 transition-colors"
											>
												<Minus className="w-3 h-3 text-gray-400" />
											</button>
											<span className="px-3 text-sm font-bold min-w-[2rem] text-center text-black">
												{item.quantity}
											</span>
											<button
												onClick={() => increaseQuantity(item.product.id)}
												className="p-2 hover:bg-pureBlack/10 transition-colors"
											>
												<Plus className="w-3 h-3 text-gray-400" />
											</button>
										</div>
										<button
											onClick={() => removeItem(item.product.id)}
											className="p-1 text-pureBlack/50 hover:text-red-500 transition-colors"
											title="Remove item"
										>
											<X className="w-4 h-4" />
										</button>
									</div>
								</div>
							))
						)}
					</div>

					{cart.length > 0 && (
						<>
							<div className="flex justify-between items-center pt-2 border-t border-pureBlack/10">
								<span className="text-body text-pureBlack/50 uppercase">Total</span>
								<span className="text-h6 text-pureBlack font-bold">
									${totalPrice.toLocaleString()}
								</span>
							</div>
							<button className="w-full px-8 py-3 uppercase duration-300 text-body text-pureWhite bg-darkOrange hover:bg-fadedOrange transition-colors">
								Checkout
							</button>
						</>
					)}
				</div>
			</PopoverContent>
		</Popover>
	);
};
