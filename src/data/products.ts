export interface Product {
  id: number;
  brand: string;
  name: string;
  price: number;
  category: string;
  rating: number;
  image: string;
  images: string[];
  description: string;
  stock: number;
}

export const products: Product[] = [
  {
    id: 1,
    brand: "Nike",
    name: "Air Max 270",
    price: 14999,
    category: "Running",
    rating: 4.8,
    image: "/images/nike-airmax.jpg",
    images: [
      "/images/nike-airmax.jpg",
      "/images/nike-airmax.jpg",
      "/images/nike-airmax.jpg",
      "/images/nike-airmax.jpg",
    ],
    description:
      "Premium running shoe with lightweight cushioning and breathable mesh upper.",
    stock: 24,
  },
  {
    id: 2,
    brand: "Adidas",
    name: "Ultraboost 5",
    price: 18499,
    category: "Running",
    rating: 4.9,
    image: "/images/adidas-ultraboost.jpg",
    images: [
      "/images/adidas-ultraboost.jpg",
      "/images/adidas-ultraboost.jpg",
      "/images/adidas-ultraboost.jpg",
      "/images/adidas-ultraboost.jpg",
    ],
    description:
      "Premium comfort with energy-returning foam for daily runs.",
    stock: 17,
  },
  {
    id: 3,
    brand: "Puma",
    name: "RS-X",
    price: 12999,
    category: "Lifestyle",
    rating: 4.6,
    image: "/images/puma-rsx.jpg",
    images: [
      "/images/puma-rsx.jpg",
      "/images/puma-rsx.jpg",
      "/images/puma-rsx.jpg",
      "/images/puma-rsx.jpg",
    ],
    description:
      "Stylish everyday sneaker built for comfort and durability.",
    stock: 6,
  },
  {
    id: 4,
    brand: "New Balance",
    name: "530",
    price: 15999,
    category: "Casual",
    rating: 4.7,
    image: "/images/newbalance530.jpg",
    images: [
      "/images/newbalance530.jpg",
      "/images/newbalance530.jpg",
      "/images/newbalance530.jpg",
      "/images/newbalance530.jpg",
    ],
    description:
      "Classic retro design with modern cushioning for all-day wear.",
    stock: 0,
  },
];