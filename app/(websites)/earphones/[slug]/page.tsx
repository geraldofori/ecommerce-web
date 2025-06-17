import ProductDetail from '@/components/ui/ProductDetail'
import { PageComponent } from '@/types'
import React from 'react'

const Page: PageComponent = async ({ params }) => {
    const resolvedParams = await params;
    const value = resolvedParams.slug;
    return (
        <ProductDetail slug={value} category="earphones" />
    )
}

export default Page