import { motion } from "framer-motion";

export default function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, delay: 0.3 }}
      className="relative flex items-center justify-center"
    >
      {/* Background Glow */}
      <div className="absolute h-[420px] w-[420px] rounded-full bg-amber-brand/20 blur-[120px]" />

      {/* Decorative Circle */}
      <div className="absolute h-[520px] w-[520px] rounded-full border border-white/10" />

      {/* Floating Shoe */}
      <motion.img
        src="/images/hero-shoe.png"
        alt="StrideStep Premium Shoe"
        className="relative z-10 w-full max-w-lg drop-shadow-[0_35px_45px_rgba(0,0,0,0.45)]"
        animate={{
          y: [0, -15, 0],
          rotate: [0, -2, 0, 2, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating Badge */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
        className="absolute top-12 right-4 rounded-2xl bg-white px-5 py-3 shadow-2xl"
      >
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
          New Arrival
        </p>

        <h3 className="mt-1 text-lg font-bold text-slate-900">
          Air Max 270
        </h3>
      </motion.div>

      {/* Rating Card */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-12 left-2 rounded-2xl bg-white px-5 py-4 shadow-2xl"
      >
        <p className="text-2xl font-bold text-amber-500">
          ★ 4.9
        </p>

        <p className="text-sm text-slate-600">
          Customer Rating
        </p>
      </motion.div>
    </motion.div>
  );
}