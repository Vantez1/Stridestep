import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import TrackingWidget from "./TrackingWidget";
import { BtnPrimary, BtnOutline } from "../ui";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at top right, rgba(245,158,11,0.18), transparent 30%), linear-gradient(135deg,#020617 0%,#0F172A 45%,#1E3A8A 100%)",
      }}
    >
      <div className="mx-auto flex min-h-screen max-w-7xl items-center px-6 py-20">
        <div className="grid w-full grid-cols-1 gap-16 lg:grid-cols-2">

          {/* Left Content */}
          <div>
          </div>

          {/* Right Content */}
          <div>
          </div>

        </div>
      </div>
    </section>
  );
}