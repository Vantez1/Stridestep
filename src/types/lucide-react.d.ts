declare module 'lucide-react' {
  import * as React from 'react';

  export type LucideProps = React.SVGProps<SVGSVGElement> & {
    size?: number | string;
    color?: string;
    strokeWidth?: number | string;
    absoluteStrokeWidth?: boolean;
  };

  export const ArrowRight: React.ComponentType<LucideProps>;
  export const ArrowLeft: React.ComponentType<LucideProps>;
  export const Check: React.ComponentType<LucideProps>;
  export const Shield: React.ComponentType<LucideProps>;
  export const Clock: React.ComponentType<LucideProps>;
  export const MapPin: React.ComponentType<LucideProps>;
  export const Truck: React.ComponentType<LucideProps>;
  export const ChevronRight: React.ComponentType<LucideProps>;
  export const Menu: React.ComponentType<LucideProps>;
  export const X: React.ComponentType<LucideProps>;
  export const Phone: React.ComponentType<LucideProps>;
  export const Mail: React.ComponentType<LucideProps>;
  export const Briefcase: React.ComponentType<LucideProps>;
  export const Search: React.ComponentType<LucideProps>;
  export const Package: React.ComponentType<LucideProps>;
  export const CheckCircle: React.ComponentType<LucideProps>;
  export const Sparkles: React.ComponentType<LucideProps>;
  export const Globe: React.ComponentType<LucideProps>;
  export const TrendingUp: React.ComponentType<LucideProps>;
  export const LayoutDashboard: React.ComponentType<LucideProps>;
  export const Navigation: React.ComponentType<LucideProps>;
  export const FileText: React.ComponentType<LucideProps>;
  export const Receipt: React.ComponentType<LucideProps>;
  export const Bell: React.ComponentType<LucideProps>;
  export const HeadphonesIcon: React.ComponentType<LucideProps>;
  export const User: React.ComponentType<LucideProps>;
  export const LogOut: React.ComponentType<LucideProps>;
}
