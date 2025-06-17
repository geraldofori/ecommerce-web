import ProductCategory from '@/components/ui/ProductCategory'
import React from 'react'
import data from '@/data/data.json';


const Page = () => {
  const products = data.filter((product) => product.category === "headphones");
  return (
    <ProductCategory category='headphones' products={products} />
  )
}

export default Page