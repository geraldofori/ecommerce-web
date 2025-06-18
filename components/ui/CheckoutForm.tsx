'use client';

import { useRouter } from 'next/navigation';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useCart } from '@/hooks/useCart';
import { useDisplay } from '@/hooks/useDisplay';
import { CheckoutSchema } from '@/utils';


export default function CheckoutForm() {
    const { cart, totalPrice, clearCart } = useCart();
    const display = useDisplay();
    const router = useRouter();

    const subtotal = totalPrice;
    const shipping = 50;
    const vat = Math.round(subtotal * 0.2);
    const grandTotal = subtotal + shipping + vat;

    const handleSubmitOrder = (values: unknown) => {
        console.log('Form values:', values);
        alert('Order placed successfully!');
        clearCart();
        router.push('/');
    };

    const initialValues = {
        name: '',
        email: '',
        phone: '',
        address: '',
        zip: '',
        city: '',
        country: '',
        paymentMethod: 'e-Money',
        eMoneyNumber: '',
        eMoneyPin: ''
    };

    return (
        <div className="flex flex-col lg:flex-row gap-x-4 viewport">
            <div className="w-full lg:w-2/3 p-6 lg:p-10 bg-pureWhite rounded-lg">
                <h1 className="text-h3 uppercase mb-8">Checkout</h1>

                <Formik
                    initialValues={initialValues}
                    validationSchema={CheckoutSchema}
                    onSubmit={handleSubmitOrder}
                >
                    {({ values, errors, touched, isValid, dirty }) => (
                        <Form>
                            <div className="mb-8">
                                <h2 className="text-subtitle text-darkOrange uppercase mb-4">Billing Details</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="flex flex-col">
                                        <label htmlFor="name" className="text-body mb-2">Name</label>
                                        <Field
                                            type="text"
                                            id="name"
                                            name="name"
                                            placeholder="Alexei Ward"
                                            className={`p-3 border rounded-md ${errors.name && touched.name ? 'border-red-500' : 'border-color'}`}
                                        />
                                        <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="email" className="text-body mb-2">Email Address</label>
                                        <Field
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="alexei@mail.com"
                                            className={`p-3 border rounded-md ${errors.email && touched.email ? 'border-red-500' : 'border-color'}`}
                                        />
                                        <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="phone" className="text-body mb-2">Phone Number</label>
                                        <Field
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            placeholder="+1 202-555-0136"
                                            className={`p-3 border rounded-md ${errors.phone && touched.phone ? 'border-red-500' : 'border-color'}`}
                                        />
                                        <ErrorMessage name="phone" component="div" className="text-red-500 text-sm mt-1" />
                                    </div>
                                </div>
                            </div>

                            <div className="mb-8">
                                <h2 className="text-subtitle text-darkOrange uppercase mb-4">Shipping Info</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="flex flex-col md:col-span-2">
                                        <label htmlFor="address" className="text-body mb-2">Address</label>
                                        <Field
                                            type="text"
                                            id="address"
                                            name="address"
                                            placeholder="1137 Williams Avenue"
                                            className={`p-3 border rounded-md ${errors.address && touched.address ? 'border-red-500' : 'border-color'}`}
                                        />
                                        <ErrorMessage name="address" component="div" className="text-red-500 text-sm mt-1" />
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="zip" className="text-body mb-2">ZIP Code</label>
                                        <Field
                                            type="text"
                                            id="zip"
                                            name="zip"
                                            placeholder="10001"
                                            className={`p-3 border rounded-md ${errors.zip && touched.zip ? 'border-red-500' : 'border-color'}`}
                                        />
                                        <ErrorMessage name="zip" component="div" className="text-red-500 text-sm mt-1" />
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="city" className="text-body mb-2">City</label>
                                        <Field
                                            type="text"
                                            id="city"
                                            name="city"
                                            placeholder="New York"
                                            className={`p-3 border rounded-md ${errors.city && touched.city ? 'border-red-500' : 'border-color'}`}
                                        />
                                        <ErrorMessage name="city" component="div" className="text-red-500 text-sm mt-1" />
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="country" className="text-body mb-2">Country</label>
                                        <Field
                                            type="text"
                                            id="country"
                                            name="country"
                                            placeholder="United States"
                                            className={`p-3 border rounded-md ${errors.country && touched.country ? 'border-red-500' : 'border-color'}`}
                                        />
                                        <ErrorMessage name="country" component="div" className="text-red-500 text-sm mt-1" />
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
                                                <Field
                                                    type="radio"
                                                    name="paymentMethod"
                                                    value="e-Money"
                                                    className="mr-4"
                                                />
                                                e-Money
                                            </label>
                                            <label className="flex items-center border rounded-md p-3 border-color">
                                                <Field
                                                    type="radio"
                                                    name="paymentMethod"
                                                    value="Cash on Delivery"
                                                    className="mr-4"
                                                />
                                                Cash on Delivery
                                            </label>
                                        </div>
                                    </div>

                                    {values.paymentMethod === 'e-Money' && (
                                        <>
                                            <div className="flex flex-col">
                                                <label htmlFor="eMoneyNumber" className="text-body mb-2">e-Money Number</label>
                                                <Field
                                                    type="text"
                                                    id="eMoneyNumber"
                                                    name="eMoneyNumber"
                                                    placeholder="238521993"
                                                    className={`p-3 border rounded-md ${errors.eMoneyNumber && touched.eMoneyNumber ? 'border-red-500' : 'border-color'}`}
                                                />
                                                <ErrorMessage name="eMoneyNumber" component="div" className="text-red-500 text-sm mt-1" />
                                            </div>
                                            <div className="flex flex-col">
                                                <label htmlFor="eMoneyPin" className="text-body mb-2">e-Money PIN</label>
                                                <Field
                                                    type="text"
                                                    id="eMoneyPin"
                                                    name="eMoneyPin"
                                                    placeholder="6891"
                                                    className={`p-3 border rounded-md ${errors.eMoneyPin && touched.eMoneyPin ? 'border-red-500' : 'border-color'}`}
                                                />
                                                <ErrorMessage name="eMoneyPin" component="div" className="text-red-500 text-sm mt-1" />
                                            </div>
                                        </>
                                    )}

                                    {values.paymentMethod === 'Cash on Delivery' && (
                                        <div className="md:col-span-2 flex flex-col md:flex-row items-center gap-4 bg-darkWhite/40 p-4 rounded-md">
                                            <div className="w-12 h-12 flex-shrink-0">
                                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M24 0C10.728 0 0 10.728 0 24C0 37.272 10.728 48 24 48C37.272 48 48 37.272 48 24C48 10.728 37.272 0 24 0ZM24 4.8C34.632 4.8 43.2 13.368 43.2 24C43.2 34.632 34.632 43.2 24 43.2C13.368 43.2 4.8 34.632 4.8 24C4.8 13.368 13.368 4.8 24 4.8Z" fill="#D87D4A" />
                                                </svg>
                                            </div>
                                            <p className="text-body text-pureBlack/70">
                                                {`The 'Cash on Delivery' option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.`}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="w-full lg:w-1/3 bg-pureWhite rounded-lg h-fit mt-8 lg:hidden">
                                <h2 className="text-h6 uppercase mb-6">Summary</h2>

                                {cart.length === 0 ? (
                                    <div className="text-center py-8">
                                        <p className="text-pureBlack/50">Your cart is empty</p>
                                    </div>
                                ) : (
                                    <>
                                        <div className="flex flex-col gap-y-4 mb-6">
                                            {cart.map((item) => (
                                                <div key={item.product.id} className="flex items-center justify-between">
                                                    <div className="flex items-center gap-x-4">
                                                        <div className="w-16 h-16 bg-darkWhite rounded-md relative overflow-hidden">
                                                            <img
                                                                src={item.product.categoryImage[display]}
                                                                alt={item.product.name}
                                                                className="w-full h-full object-cover"
                                                            />
                                                        </div>
                                                        <div>
                                                            <p className="font-bold">
                                                                {item.product.name.split(' ').slice(0, 2).join(' ')}
                                                            </p>
                                                            <p className="text-pureBlack/50">
                                                                ${item.product.price.toLocaleString()}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <p className="text-pureBlack/50">x{item.quantity}</p>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="flex flex-col gap-y-2 mb-6">
                                            <div className="flex justify-between">
                                                <p className="text-pureBlack/50 uppercase">Total</p>
                                                <p className="font-bold">${subtotal.toLocaleString()}</p>
                                            </div>
                                            <div className="flex justify-between">
                                                <p className="text-pureBlack/50 uppercase">Shipping</p>
                                                <p className="font-bold">${shipping}</p>
                                            </div>
                                            <div className="flex justify-between">
                                                <p className="text-pureBlack/50 uppercase">VAT (Included)</p>
                                                <p className="font-bold">${vat.toLocaleString()}</p>
                                            </div>
                                            <div className="flex justify-between mt-4">
                                                <p className="text-pureBlack/50 uppercase">Grand Total</p>
                                                <p className="font-bold text-darkOrange">${grandTotal.toLocaleString()}</p>
                                            </div>
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full bg-darkOrange hover:bg-fadedOrange duration-300 text-pureWhite py-3 uppercase font-bold"
                                            disabled={!isValid || !dirty || cart.length === 0}
                                        >
                                            Continue & Pay
                                        </button>
                                    </>
                                )}
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>

            <div className="w-full lg:w-1/3 bg-pureWhite p-6 lg:p-8 rounded-lg h-fit mt-8 lg:mt-0 hidden lg:block">
                <h2 className="text-h6 uppercase mb-6">Summary</h2>

                {cart.length === 0 ? (
                    <div className="text-center py-8">
                        <p className="text-pureBlack/50">Your cart is empty</p>
                    </div>
                ) : (
                    <>
                        <div className="flex flex-col gap-y-4 mb-6">
                            {cart.map((item) => (
                                <div key={item.product.id} className="flex items-center justify-between">
                                    <div className="flex items-center gap-x-4">
                                        <div className="w-16 h-16 bg-darkWhite rounded-md relative overflow-hidden">
                                            <img
                                                src={item.product.categoryImage[display]}
                                                alt={item.product.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <p className="font-bold">
                                                {item.product.name.split(' ').slice(0, 2).join(' ')}
                                            </p>
                                            <p className="text-pureBlack/50">
                                                ${item.product.price.toLocaleString()}
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-pureBlack/50">x{item.quantity}</p>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col gap-y-2 mb-6">
                            <div className="flex justify-between">
                                <p className="text-pureBlack/50 uppercase">Total</p>
                                <p className="font-bold">${subtotal.toLocaleString()}</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-pureBlack/50 uppercase">Shipping</p>
                                <p className="font-bold">${shipping}</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-pureBlack/50 uppercase">VAT (Included)</p>
                                <p className="font-bold">${vat.toLocaleString()}</p>
                            </div>
                            <div className="flex justify-between mt-4">
                                <p className="text-pureBlack/50 uppercase">Grand Total</p>
                                <p className="font-bold text-darkOrange">${grandTotal.toLocaleString()}</p>
                            </div>
                        </div>

                        <button
                            type="submit"
                            form="checkout-form"
                            className="w-full bg-darkOrange hover:bg-fadedOrange duration-300 text-pureWhite py-3 uppercase font-bold"
                            disabled={cart.length === 0}
                        >
                            Continue & Pay
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}