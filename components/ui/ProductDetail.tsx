'use client';

import React, { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import Link from 'next/link';
import { useDisplay } from '@/hooks/useDisplay';
import { useCart } from '@/hooks/useCart';
import { Button } from '../common/button';
import { Product, ProductInclude } from '@/types';
import data from '@/data/data.json';


interface ProductDetailProps {
  slug: string;
  category: string;
}
const ProductDetail: React.FC<ProductDetailProps> = ({ slug, category }) => {
  const display = useDisplay();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const product = data.find((product) => product.slug === slug) as Product | undefined;

  const handleAddToCart = () => {
    if (!product) return;

    addToCart({
      product: product,
      quantity: quantity,
    });

    // Reset quantity to 1 after adding to cart
    setQuantity(1);
  };

  const increaseQty = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQty = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <>
      <header className="w-full px-8 bg-pureWhite pt-7">
        <div className="flex flex-row items-start viewport">
          <Link href={`/${category}`} className="text-pureBlack/50">
            Go Back
          </Link>
        </div>
      </header>

      {product && (
        <>
          <section
            key={product?.id}
            className="flex flex-row w-full py-12 bg-pureWhite lg:gap-y-24"
          >
            <div className="flex flex-col items-center w-full px-8 lg:flex lg:flex-row lg:items-start gap-x-12 viewport">
              <div className="lg:w-[33.75rem] md:max-w-[680px] md:w-[80%] w-[90%] bg-darkWhite rounded-[8px] overflow-hidden">
                <img src={product.categoryImage[display]} />
              </div>
              <div className="flex flex-col px-8 gap-y-10">
                <div
                  className={`flex flex-col gap-y-8 mx-auto lg:mx-0 pt-6  max-w-[398px] text-center md:text-start items-start lg:items-start md:items-center`}
                >
                  {product.new && (
                    <p className="items-start uppercase text-overline text-darkOrange md:text-center text-start">
                      New Product
                    </p>
                  )}
                  <h2 className="uppercase text-h2 text-pureBlack text-start md:text-center lg:text-start">
                    {product.name}
                  </h2>
                  <p className=" text-body text-pureBlack/50 text-start md:text-center lg:text-start">
                    {product.description}
                  </p>
                  <p className="text-h6 text-pureBlack">
                    {`$ `}
                    {product.price}
                  </p>
                </div>
                <div className="flex flex-row items-start w-full gap-x-4 md:items-center lg:items-start">
                  <div className="flex flex-row items-center p-2 gap-x-4 bg-darkWhite w-fit">
                    <button onClick={decreaseQty}>
                      <Minus className="w-4 h-4 stroke-black" />
                    </button>
                    <div className="px-3 text-center ">
                      <div className="font-bold tracking-tighter text-md text-black">
                        {quantity}
                      </div>
                    </div>
                    <button onClick={increaseQty}>
                      <Plus className="w-4 h-4 stroke-black" />
                    </button>
                  </div>
                  <button
                    className="px-8 py-3 uppercase duration-300 text-body text-pureWhite bg-darkOrange hover:bg-fadedOrange cursor-pointer"
                    onClick={handleAddToCart}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section className="flex flex-col w-full bg-pureWhite lg:gap-y-24">
            <div className="flex flex-col w-full px-8 py-20 viewport gap-y-6">
              <h3 className="uppercase text-h3 text-pureBlack">Features</h3>
              <div className="text-body text-pureBlack/50">
                <p className="text-body text-pureBlack/50">{product.features}</p>
              </div>
            </div>
          </section>
          <section className="flex flex-col w-full bg-pureWhite lg:gap-y-24">
            <div className="flex flex-col justify-between w-full gap-3 px-8 py-20 lg:flex-row viewport ">
              <h3 className="w-full uppercase text-h3 text-pureBlack">
                in the box
              </h3>
              <div className="flex flex-col w-full gap-3">
                {product?.includes?.map((include: ProductInclude, index: number) => (
                  <div key={index} className="flex flex-row w-full gap-x-8 text-body text-pureBlack/50">
                    <p className="text-darkOrange text-body">{`${include.quantity}x`}</p>
                    <p className="text-pureBlack/50 text-body">
                      {include.item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="flex flex-col w-full bg-pureWhite lg:gap-y-24">
            <div className="flex flex-col w-full gap-4 px-8 py-20 lg:grid lg:grid-cols-2 lg:grid-rows-2 viewport ">
              <img
                src={product.gallery.first[display]}
                className="lg:col-span-1 rounded-[8px] w-full h-full"
              />
              <img
                src={product.gallery.second[display]}
                className="lg:col-span-1 lg:row-span-2 h-full w-full rounded-[8px]"
              />
              <img
                src={product.gallery.third[display]}
                className="lg:col-span-1 rounded-[8px] w-full h-full"
              />
            </div>
          </section>
          <section className="flex flex-col w-full bg-pureWhite lg:gap-y-24">
            <div className="flex flex-col items-center w-full px-8 py-20 gap-y-5 viewport">
              <h3 className="uppercase text-h3 text-pureBlack">{`You may Also like`}</h3>
              <div className="flex flex-col lg:flex lg:flex-row lg:gap-x-4 gap-y-5">
                <div className="flex flex-col lg:flex-row gap-x-[1.5rem]">
                  {product.others.map((otherItem) => (
                    <div
                      key={otherItem.slug}
                      className="flex flex-col items-center gap-y-[1.5rem]"
                    >
                      <div className="md:w-[80%] w-[90%]  bg-darkWhite rounded-[8px] overflow-hidden">
                        <img src={otherItem.image[display]} />
                      </div>
                      <h5 className="text-center uppercase text-pureBlack text-h5 ">
                        {otherItem.name}
                      </h5>
                      <Button
                        action="See Product"
                        link={`/${data.find(p => p.slug === otherItem.slug)?.category || category}/${otherItem.slug}`}
                        variant="Solid"
                        className="mt-12 text-subtitle text-pureWhite w-fit"
                      ></Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default ProductDetail;
