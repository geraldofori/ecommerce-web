export interface ResponsiveImage {
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface ProductInclude {
  quantity: number;
  item: string;
}

export interface ProductGallery {
  first: ResponsiveImage;
  second: ResponsiveImage;
  third: ResponsiveImage;
}

export interface RelatedProduct {
  slug: string;
  name: string;
  image: ResponsiveImage;
}

export interface Product {
  id: number;
  slug: string;
  name: string;
  image: ResponsiveImage;
  category: string;
  categoryImage: ResponsiveImage;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: ProductInclude[];
  gallery: ProductGallery;
  others: RelatedProduct[];
}

export type ProductCategory = "headphones" | "speakers" | "earphones";

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Order {
  items: CartItem[];
  totalAmount: number;
  shippingCost: number;
  tax: number;
  grandTotal: number;
}

export type Display = 'mobile' | 'tablet' | 'desktop';
