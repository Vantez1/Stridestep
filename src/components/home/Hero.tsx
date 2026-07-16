import { motion } from "framer-motion";
import HeroContent from "./HeroContent";
import HeroStats from "./HeroStats";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at top right, rgba(245,158,11,0.15), transparent 30%), linear-gradient(135deg,#020617 0%,#0F172A 45%,#1E3A8A 100%)",
      }}
    >
      {/* Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-amber-brand/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-blue-500/20 blur-[140px]" />
      </div>

      <div className="relative mx-auto flex min-h-[100vh] max-w-7xl items-center px-6 py-28">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <HeroContent />
            <HeroStats />
          </motion.div>

          <HeroImage />

        </div>
      </div>
    </section>
  );
}