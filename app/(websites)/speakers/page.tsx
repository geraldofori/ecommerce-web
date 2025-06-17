import ProductCategory from '@/components/ui/ProductCategory'
import React from 'react'
import data from '@/data/data.json';

const Page = () => {
    const products = data.filter((product) => product.category === "speakers");
    return (
        <ProductCategory category='speakers' products={products} />
    )
}

export default Page