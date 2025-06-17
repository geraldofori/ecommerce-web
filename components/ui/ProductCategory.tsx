"use client"
import React from 'react'
import { Button } from '../common/button'
import { Product } from '@/types';
import { useDisplay } from '@/hooks/useDisplay';

interface ProductCategoryProps {
    category: string;
    products: Product[];
}

const ProductCategory: React.FC<ProductCategoryProps> = ({ category, products }) => {
    const display = useDisplay();
    return (
        <>
            <header className="w-full bg-pureBlack">
                <div className="viewport">
                    <div className="w-full py-24 mx-auto text-center">
                        <h1 className="uppercase text-h2 text-pureWhite">{category}</h1>
                    </div>
                </div>
            </header>
            <section className="flex flex-col w-full py-12 bg-pureWhite lg:gap-y-24">
                {products.map((product, index) => (
                    <div
                        className={`flex ${index % 2 === 0 ? `lg:flex-row` : `lg:flex-row-reverse`} md:flex-row px-12 flex-col items-center justify-between w-full viewport gap-y-8 pb-16`}
                        key={product.name}
                    >
                        <div className="lg:w-[33.75rem] md:max-w-[680px] md:w-[80%] w-[90%]  bg-darkWhite rounded-[8px] overflow-hidden">
                            <img src={product.categoryImage[display]} />
                        </div>
                        <div
                            className={`flex flex-col gap-y-[1rem] mx-auto lg:mx-0 px-8 max-w-[398px] text-center md:text-start items-start lg:items-start md:items-center`}
                        >
                            {index === 0 && (
                                <p className="items-start uppercase text-overline text-darkOrange md:text-center text-start">
                                    New Product
                                </p>
                            )}
                            <div className="flex flex-col gap-y-[1.5rem]">
                                <h1 className="uppercase text-pureBlack text-h2 md:text-center text-start lg:text-start">
                                    {product.name}
                                </h1>
                                <p className="text-pureBlack/50 text-body md:text-center text-start lg:text-start">
                                    {product.description}
                                </p>
                            </div>
                            <Button
                                action="See Product"
                                link={`/${category}/${product.slug}`}
                                variant="Solid"
                                className="mt-12 text-subtitle text-pureWhite"
                            ></Button>
                        </div>
                    </div>
                ))}
            </section>
        </>
    )
}

export default ProductCategory