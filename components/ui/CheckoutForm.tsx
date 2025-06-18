'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function CheckoutForm() {
    const [paymentMethod, setPaymentMethod] = useState('e-Money');

    const cartItems = [
        { id: 1, name: 'XX99 MKII', price: 2999, quantity: 1, image: '/images/cart/xx99-mkii.png' },
        { id: 2, name: 'XX59', price: 899, quantity: 2, image: '/images/cart/xx59.png' },
        { id: 3, name: 'YX1', price: 599, quantity: 1, image: '/images/cart/yx1.png' },
    ];

    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = 50;
    const vat = Math.round(subtotal * 0.2);
    const grandTotal = subtotal + shipping + vat;

    return (
        <div className="flex flex-col lg:flex-row gap-x-4 viewport">
            <div className="w-full lg:w-2/3 p-6 lg:p-10 bg-pureWhite rounded-lg">
                <h1 className="text-h3 uppercase mb-8">Checkout</h1>

                <div className="mb-8">
                    <h2 className="text-subtitle text-darkOrange uppercase mb-4">Billing Details</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col">
                            <label htmlFor="name" className="text-body mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Alexei Ward"
                                className="p-3 border rounded-md border-color"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="email" className="text-body mb-2">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="alexei@mail.com"
                                className="p-3 border rounded-md border-color"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="phone" className="text-body mb-2">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                placeholder="+1 202-555-0136"
                                className="p-3 border rounded-md border-color"
                            />
                        </div>
                    </div>
                </div>

                <div className="mb-8">
                    <h2 className="text-subtitle text-darkOrange uppercase mb-4">Shipping Info</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col md:col-span-2">
                            <label htmlFor="address" className="text-body mb-2">Address</label>
                            <input
                                type="text"
                                id="address"
                                placeholder="1137 Williams Avenue"
                                className="p-3 border rounded-md border-color"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="zip" className="text-body mb-2">ZIP Code</label>
                            <input
                                type="text"
                                id="zip"
                                placeholder="10001"
                                className="p-3 border rounded-md border-color"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="city" className="text-body mb-2">City</label>
                            <input
                                type="text"
                                id="city"
                                placeholder="New York"
                                className="p-3 border rounded-md border-color"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="country" className="text-body mb-2">Country</label>
                            <input
                                type="text"
                                id="country"
                                placeholder="United States"
                                className="p-3 border rounded-md border-color"
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="text-subtitle text-darkOrange uppercase mb-4">Payment Details</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col md:col-span-2 mb-4">
                            <p className="text-body mb-2">Payment Method</p>
                            <div className="flex flex-col gap-y-4">
                                <label className="flex items-center border rounded-md p-3 border-color">
                                    <input
                                        type="radio"
                                        name="paymentMethod"
                                        value="e-Money"
                                        checked={paymentMethod === 'e-Money'}
                                        onChange={() => setPaymentMethod('e-Money')}
                                        className="mr-4"
                                    />
                                    e-Money
                                </label>
                                <label className="flex items-center border rounded-md p-3 border-color">
                                    <input
                                        type="radio"
                                        name="paymentMethod"
                                        value="Cash on Delivery"
                                        checked={paymentMethod === 'Cash on Delivery'}
                                        onChange={() => setPaymentMethod('Cash on Delivery')}
                                        className="mr-4"
                                    />
                                    Cash on Delivery
                                </label>
                            </div>
                        </div>

                        {paymentMethod === 'e-Money' && (
                            <>
                                <div className="flex flex-col">
                                    <label htmlFor="eMoneyNumber" className="text-body mb-2">e-Money Number</label>
                                    <input
                                        type="text"
                                        id="eMoneyNumber"
                                        placeholder="238521993"
                                        className="p-3 border rounded-md border-color"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="eMoneyPin" className="text-body mb-2">e-Money PIN</label>
                                    <input
                                        type="text"
                                        id="eMoneyPin"
                                        placeholder="6891"
                                        className="p-3 border rounded-md border-color"
                                    />
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>

            <div className="w-full lg:w-1/3 bg-pureWhite p-6 lg:p-8 rounded-lg h-fit mt-8 lg:mt-0">
                <h2 className="text-h6 uppercase mb-6">Summary</h2>

                <div className="flex flex-col gap-y-4 mb-6">
                    {cartItems.map((item) => (
                        <div key={item.id} className="flex items-center justify-between">
                            <div className="flex items-center gap-x-4">
                                <div className="w-16 h-16 bg-darkWhite rounded-md relative overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        width={64}
                                        height={64}
                                        className="object-contain"
                                    />
                                </div>
                                <div>
                                    <p className="font-bold">{item.name}</p>
                                    <p className="text-muted-foreground">${item.price.toLocaleString()}</p>
                                </div>
                            </div>
                            <p className="text-muted-foreground">x{item.quantity}</p>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col gap-y-2 mb-6">
                    <div className="flex justify-between">
                        <p className="text-muted-foreground uppercase">Total</p>
                        <p className="font-bold">${subtotal.toLocaleString()}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-muted-foreground uppercase">Shipping</p>
                        <p className="font-bold">${shipping}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-muted-foreground uppercase">VAT (Included)</p>
                        <p className="font-bold">${vat.toLocaleString()}</p>
                    </div>
                    <div className="flex justify-between mt-4">
                        <p className="text-muted-foreground uppercase">Grand Total</p>
                        <p className="font-bold text-darkOrange">${grandTotal.toLocaleString()}</p>
                    </div>
                </div>

                <button className="w-full bg-darkOrange hover:bg-fadedOrange duration-300 text-pureWhite py-3 uppercase font-bold">
                    Continue & Pay
                </button>
            </div>
        </div>
    );
}