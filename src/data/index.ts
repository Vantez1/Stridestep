// src/data/index.ts
import type { Service, Stat, Testimonial, Job, Shipment, Industry, NavLink } from '../types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Shop', href: '/services' },
  { label: 'Track Order', href: '/tracking' },
  { label: 'About', href: '/about' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'mens',
    icon: '👞',
    title: "Men's Shoes",
    description: 'Smart casual, formal, and athletic pairs crafted for all-day comfort and confidence.',
    features: ['Leather loafers', 'Sneakers', 'Work shoes', 'Sandals', 'Size-inclusive fittings'],
  },
  {
    id: 'womens',
    icon: '👠',
    title: "Women's Shoes",
    description: 'Elevated everyday essentials, office-ready styles, and statement pieces for every plan.',
    features: ['Heels', 'Flats', 'Boots', 'Lifestyle sneakers', 'Comfort insoles'],
  },
  {
    id: 'kids',
    icon: '🧒',
    title: "Kids' Shoes",
    description: 'Durable, playful pairs designed for school, playtime, and growing feet.',
    features: ['School shoes', 'Sports shoes', 'Sandals', 'Rain boots', 'Easy fastenings'],
  },
  {
    id: 'sports',
    icon: '🏃',
    title: 'Sports & Running',
    description: 'Performance footwear with cushioning, grip, and support for training and everyday movement.',
    features: ['Running shoes', 'Training shoes', 'Court sneakers', 'Breathable mesh', 'Arch support'],
  },
  {
    id: 'formal',
    icon: '🎩',
    title: 'Formal Shoes',
    description: 'Polished options for work, events, and special occasions without sacrificing comfort.',
    features: ['Oxfords', 'Derbies', 'Heeled pumps', 'Ballerinas', 'Premium finishes'],
  },
  {
    id: 'casual',
    icon: '👟',
    title: 'Casual Shoes',
    description: 'Relaxed styles that feel good from the first step to the last mile of your day.',
    features: ['Slip-ons', 'Canvas sneakers', 'Slides', 'Everyday comfort', 'Easy styling'],
  },
  {
    id: 'boots',
    icon: '🥾',
    title: 'Boots & Sandals',
    description: 'Weather-ready picks for city walks, weekend escapes, and all-season dressing.',
    features: ['Ankle boots', 'Waterproof options', 'Open sandals', 'Durable soles', 'Seasonal colours'],
  },
  {
    id: 'care',
    icon: '🧴',
    title: 'Shoe Care',
    description: 'Keep every pair looking sharp with polish, protectors, and care essentials.',
    features: ['Cleaners', 'Polish', 'Protective sprays', 'Shoe bags', 'Care guides'],
  },
];

export const STATS: Stat[] = [
  { value: 15000, suffix: '+', label: 'Pairs Sold' },
  { value: 450, suffix: '+', label: 'Happy Shoppers' },
  { value: 6, suffix: '', label: 'Locations' },
  { value: 4, suffix: '.9', label: 'Average Rating' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Aisha Kamau',
    role: 'Designer',
    company: 'Studio A',
    initials: 'AK',
    rating: 5,
    text: 'StrideStep Shoes made my weekend shopping effortless. The fit advice was spot-on and my new sneakers are perfect for both work and travel.',
  },
  {
    id: 2,
    name: 'Daniel Oduor',
    role: 'Parent',
    company: 'Home & Family',
    initials: 'DO',
    rating: 5,
    text: 'We found durable school shoes and weekend trainers for both kids in one visit. The team was patient, friendly, and incredibly helpful.',
  },
  {
    id: 3,
    name: 'Miriam Achieng',
    role: 'Marketing Lead',
    company: 'Northstar Studio',
    initials: 'MA',
    rating: 5,
    text: 'Their online ordering and home delivery made it easy to refresh my wardrobe. I loved the quick updates and excellent packaging.',
  },
];

export const INDUSTRIES: Industry[] = [
  { icon: '👔', title: 'Workwear', description: 'Polished pairs that keep you sharp from office hours to evening plans.' },
  { icon: '🏃', title: 'Active Living', description: 'Supportive trainers and performance shoes for training, errands, and weekend runs.' },
  { icon: '👨‍👩‍👧‍👦', title: 'Family Style', description: 'Comfortable choices for parents, kids, and every growing step in between.' },
  { icon: '🌧️', title: 'All-Weather', description: 'Boots and waterproof options ready for Nairobi rain and beyond.' },
  { icon: '🎉', title: 'Special Events', description: 'Formal pairs and statement shoes for weddings, parties, and celebrations.' },
  { icon: '🛍️', title: 'Everyday Fashion', description: 'Trendy casual styles that blend comfort, colour, and confidence.' },
];

export const JOBS: Job[] = [
  { id: 1, title: 'Store Manager — Nairobi', department: 'Retail', location: 'Nairobi', type: 'Full-Time', mode: 'On-site', salary: 'KES 90k–130k/mo', experience: '3+ years' },
  { id: 2, title: 'Sales Associate', department: 'Retail', location: 'Moi Avenue', type: 'Full-Time', mode: 'On-site', salary: 'KES 35k–55k/mo', experience: 'Entry–Mid level' },
  { id: 3, title: 'Visual Merchandiser', department: 'Creative', location: 'Nairobi', type: 'Full-Time', mode: 'Hybrid', salary: 'KES 60k–85k/mo', experience: '2+ years' },
  { id: 4, title: 'Inventory & Stock Specialist', department: 'Operations', location: 'Nairobi', type: 'Full-Time', mode: 'On-site', salary: 'KES 50k–70k/mo', experience: '1+ years' },
  { id: 5, title: 'Customer Experience Lead', department: 'Support', location: 'Nairobi', type: 'Full-Time', mode: 'On-site', salary: 'KES 55k–80k/mo', experience: '2+ years' },
  { id: 6, title: 'E-Commerce Assistant', department: 'Digital', location: 'Nairobi', type: 'Full-Time', mode: 'Hybrid', salary: 'KES 45k–65k/mo', experience: '1+ years' },
];

export const DEMO_SHIPMENTS: Record<string, Shipment> = {
  'SS-1048': {
    trackingNumber: 'SS-1048',
    status: 'in_transit',
    from: 'Moi Avenue, Nairobi CBD',
    to: 'Westlands, Nairobi',
    weight: '2 pairs',
    type: 'Home Delivery',
    mode: 'Same-Day Delivery',
    driver: 'Moses Kibet',
    pickupDate: 'Jun 30, 2026 — 10:15 AM',
    estimatedDelivery: 'Jun 30, 2026 — 2:00 PM',
    events: [
      { time: 'Jun 30, 2026 — 10:15 AM', event: 'Order Packed', location: 'StrideStep Shoes, Moi Avenue', status: 'completed' },
      { time: 'Jun 30, 2026 — 11:00 AM', event: 'Out for Delivery', location: 'Nairobi CBD', status: 'current' },
      { time: 'ETA: 2:00 PM', event: 'Arriving at your doorstep', location: 'Westlands', status: 'pending' },
    ],
  },
  'SS-2091': {
    trackingNumber: 'SS-2091',
    status: 'in_transit',
    from: 'Nairobi CBD',
    to: 'Kilimani, Nairobi',
    weight: '1 pair',
    type: 'Express Delivery',
    mode: 'Same-Day Delivery',
    driver: 'Caroline Wanjiku',
    pickupDate: 'Jun 29, 2026 — 4:30 PM',
    estimatedDelivery: 'Jun 30, 2026 — 9:30 AM',
    events: [
      { time: 'Jun 29, 2026 — 4:30 PM', event: 'Order Confirmed', location: 'Moi Avenue', status: 'completed' },
      { time: 'Jun 29, 2026 — 6:00 PM', event: 'Packed and Ready', location: 'StrideStep Shoes Warehouse', status: 'completed' },
      { time: 'Jun 30, 2026 — 7:15 AM', event: 'In Transit', location: 'Along Ngong Road', status: 'current' },
    ],
  },
  'SS-3157': {
    trackingNumber: 'SS-3157',
    status: 'delivered',
    from: 'Nairobi CBD',
    to: 'Karen, Nairobi',
    weight: '3 pairs',
    type: 'Home Delivery',
    mode: 'Delivery',
    driver: 'James Njeri',
    pickupDate: 'Jun 28, 2026 — 2:00 PM',
    estimatedDelivery: 'Jun 28, 2026 — 6:00 PM',
    events: [
      { time: 'Jun 28, 2026 — 2:00 PM', event: 'Order Collected', location: 'Moi Avenue', status: 'completed' },
      { time: 'Jun 28, 2026 — 4:00 PM', event: 'Delivered', location: 'Karen', status: 'completed' },
    ],
  },
};
