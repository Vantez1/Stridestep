import TrackingWidget from "./TrackingWidget";

export default function HeroImage() {
  return (
    <div className="relative flex items-center justify-center">

      {/* Background Glow */}
      <div className="absolute h-[420px] w-[420px] rounded-full bg-amber-brand/20 blur-[120px]" />

      {/* Floating Shoe */}
      <img
        src="/images/hero-shoe.png"
        alt="StrideStep Shoe"
        className="relative z-10 w-full max-w-xl animate-float drop-shadow-[0_30px_60px_rgba(0,0,0,0.45)]"
      />

      {/* Tracking Card */}
      <div className="absolute -bottom-10 left-1/2 z-20 w-full max-w-sm -translate-x-1/2">
        <TrackingWidget />
      </div>

    </div>
  );
}