import { Button } from 'react-bootstrap';
import { useCart } from '@/hooks/useCart';
import { useDisplay } from '@/hooks/useDisplay';
import { useState, useEffect } from 'react';
import CustomModal from './CustomModal';
import { CartItem } from '@/types';


interface OrderConfirmationModalProps {
    show: boolean;
    grandTotal: number;
    onClose: () => void;
}

export default function OrderConfirmationModal({ show, grandTotal, onClose }: OrderConfirmationModalProps) {
    const { cart, clearCart } = useCart();
    const display = useDisplay();
    const [firstItem, setFirstItem] = useState<CartItem | null>(null);
    const [otherItemsCount, setOtherItemsCount] = useState(0);

    useEffect(() => {
        if (cart.length > 0) {
            setFirstItem(cart[0]);
            setOtherItemsCount(cart.length - 1);
        }
    }, [cart]);

    const handleBackToHome = () => {
        clearCart();
        onClose();
        location.assign('/');
    };

    if (!firstItem) return null;

    return (
        <CustomModal show={show} onHide={onClose} className="max-w-3xl mx-auto z-30">
            <div className="bg-pureWhite p-6 lg:p-10 rounded-lg">
                <div className="mb-6">
                    <div className="w-16 h-16 bg-darkOrange rounded-full flex items-center justify-center mb-6">
                        <svg width="26" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.5 11L8.5 18L24.5 2" stroke="white" strokeWidth="3" />
                        </svg>
                    </div>
                    <h1 className="text-h3 uppercase mb-4">THANK YOU<br />FOR YOUR ORDER</h1>
                    <p className="text-pureBlack/50">You will receive an email confirmation shortly.</p>
                </div>

                <div className="flex flex-col md:flex-row mb-8 rounded-lg overflow-hidden">
                    <div className="bg-darkWhite p-6 flex-1">
                        <div className="flex flex-col gap-y-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-x-4">
                                    <div className="w-16 h-16 bg-darkWhite rounded-md relative overflow-hidden">
                                        <img
                                            src={firstItem.product.categoryImage[display]}
                                            alt={firstItem.product.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <p className="font-bold">
                                            {firstItem.product.name.split(' ').slice(0, 2).join(' ')}
                                        </p>
                                        <p className="text-pureBlack/50">
                                            ${firstItem.product.price.toLocaleString()}
                                        </p>
                                    </div>
                                </div>
                                <p className="text-pureBlack/50">x{firstItem.quantity}</p>
                            </div>

                            {otherItemsCount > 0 && (
                                <div className="border-t pt-3 text-center">
                                    <p className="text-pureBlack/50">and {otherItemsCount} other item(s)</p>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="bg-pureBlack p-6 flex flex-col justify-center items-start md:items-center md:w-1/3">
                        <p className="text-pureWhite/50 uppercase mb-2">GRAND TOTAL</p>
                        <p className="text-pureWhite font-bold">$ {grandTotal.toLocaleString()}</p>
                    </div>
                </div>

                <Button
                    onClick={handleBackToHome}
                    className="w-full bg-darkOrange hover:bg-fadedOrange border-0 text-pureWhite py-3 uppercase font-bold cursor-pointer"
                >
                    BACK TO HOME
                </Button>
            </div>
        </CustomModal>
    );
}