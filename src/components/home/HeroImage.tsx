import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import TrackingWidget from "./TrackingWidget";

export default function HeroImage() {

const mouseX = useMotionValue(0);
const mouseY = useMotionValue(0);

const rotateX = useSpring(
  useTransform(mouseY, [-150, 150], [10, -10])
);

const rotateY = useSpring(
  useTransform(mouseX, [-150, 150], [-10, 10])
);

const handleMouseMove = (
  e: React.MouseEvent<HTMLDivElement>
) => {
  const rect = e.currentTarget.getBoundingClientRect();

  mouseX.set(e.clientX - rect.left - rect.width / 2);
  mouseY.set(e.clientY - rect.top - rect.height / 2);
};

const resetMouse = () => {
  mouseX.set(0);
  mouseY.set(0);
};

  return (
    <div
      className="relative flex items-center justify-center"
      onMouseMove={handleMouseMove}
      onMouseLeave={resetMouse}
     >
      {/* Animated Glow */}
      <motion.img
        style={{
          rotateX,
          rotateY,
          transformPerspective: 1200,
      }}
/>

      {/* Floating Shoe */}
      <motion.img
        src="/images/hero-shoe.png"
        alt="StrideStep Shoe"
        className="relative z-10 w-full max-w-xl drop-shadow-[0_40px_80px_rgba(0,0,0,0.45)]"
        animate={{
          y: [0, -18, 0],
          rotate: [0, -2, 2, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Tracking Widget */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.6,
          duration: 0.7,
        }}
        className="absolute -bottom-10 left-1/2 z-20 w-full max-w-sm -translate-x-1/2"
      >
        <TrackingWidget />
      </motion.div>

    </div>
  );
}