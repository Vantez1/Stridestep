// src/types/index.ts

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  text: string;
  initials: string;
  rating: number;
}

export interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  type: 'Full-Time' | 'Part-Time' | 'Contract';
  mode: 'On-site' | 'Hybrid' | 'Field';
  salary: string;
  experience: string;
}

export interface ShipmentEvent {
  time: string;
  event: string;
  location: string;
  status: 'completed' | 'current' | 'pending';
}

export interface Shipment {
  trackingNumber: string;
  status: 'pending' | 'picked_up' | 'in_transit' | 'at_warehouse' | 'out_for_delivery' | 'delivered';
  from: string;
  to: string;
  weight: string;
  type: string;
  mode: string;
  driver: string;
  pickupDate: string;
  estimatedDelivery: string;
  events: ShipmentEvent[];
}

export interface QuoteFormData {
  // Step 1
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  companyType: string;
  // Step 2
  cargoType: string;
  weight: string;
  packages: string;
  length: string;
  width: string;
  height: string;
  cargoValue: string;
  specialHandling: string;
  // Step 3
  pickupAddress: string;
  deliveryAddress: string;
  pickupDate: string;
  deliveryDate: string;
  serviceType: string[];
  freightType: string;
  notes: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Industry {
  icon: string;
  title: string;
  description: string;
}
