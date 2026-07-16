import { motion } from "framer-motion";

export default function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, delay: 0.3 }}
      className="relative flex min-h-[760px] items-center justify-center py-16"
    >
      {/* Background Glow */}
      <div className="absolute h-[420px] w-[420px] rounded-full bg-amber-brand/20 blur-[120px]" />

      {/* Decorative Circle */}
      <div className="absolute h-[520px] w-[520px] rounded-full border border-white/10" />

      {/* Rotating Ring */}
      <motion.div
        className="absolute h-[560px] w-[560px] rounded-full border border-amber-brand/30"
        animate={{ rotate: 360 }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Floating Shoe */}
      <motion.img
        src="/images/hero-shoe.png"
        alt="StrideStep Premium Shoe"
        className="relative z-20 w-full max-w-2xl object-contain drop-shadow-[0_50px_70px_rgba(0,0,0,0.45)]"
        animate={{
          y: [0, -18, 0],
          rotate: [0, -2, 0, 2, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* New Arrival Card */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.9 }}
        className="absolute top-20 right-0 rounded-2xl bg-white px-5 py-3 shadow-2xl"
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
        transition={{ delay: 1.1 }}
        className="absolute bottom-8 left-0 rounded-2xl bg-white px-5 py-4 shadow-2xl"
      >
        <p className="text-2xl font-bold text-amber-500">
          ★ 4.9
        </p>

        <p className="text-sm text-slate-600">
          Customer Rating
        </p>
      </motion.div>

      {/* Free Delivery Card */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.3 }}
        className="absolute top-1/2 -right-8 rounded-2xl bg-white px-5 py-4 shadow-2xl"
      >
        <p className="font-semibold text-green-600">
          🚚 Free Delivery
        </p>

        <p className="text-sm text-slate-500">
          Across Kenya
        </p>
      </motion.div>

      {/* Floating Particle */}
      <motion.div
        className="absolute left-12 top-16 h-4 w-4 rounded-full bg-amber-brand"
        animate={{
          y: [0, -20, 0],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      />

      {/* Floating Particle */}
      <motion.div
        className="absolute right-24 bottom-24 h-3 w-3 rounded-full bg-blue-400"
        animate={{
          y: [0, 15, 0],
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
      />
    </motion.div>
  );
}