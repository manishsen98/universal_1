import { motion, useInView, useAnimation, useIsPresent } from "framer-motion";
import { useEffect, useRef } from "react";
type Props = {
  children: JSX.Element;
  width?: "fit-content" | "100%";
};

const AnimateSlider = ({ children, width = "fit-content" }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const mainControl = useAnimation();
  const slideControl = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControl.start("visible");
      slideControl.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: 100,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        animate={mainControl}
        transition={{ duration: 1.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: {
            left: 0,
          },
          visible: {
            left: 500,
          },
        }}
        initial="hidden"
        animate={slideControl}
        transition={{ duration: 0.8, ease: "easeIn" }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: "red",
          zIndex: 20,
        }}
      ></motion.div>
    </div>
  );
};

export default AnimateSlider;
