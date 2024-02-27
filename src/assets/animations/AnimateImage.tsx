import { motion, useInView, useAnimation, useIsPresent } from "framer-motion";
import { useEffect, useRef } from "react";
type Props = {
  children: JSX.Element;
  width?: "fit-content" | "100%";
};

const AnimateImage = ({ children, width = "fit-content" }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const mainControl = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControl.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            scale: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
          },
        }}
        initial="hidden"
        animate={mainControl}
        transition={{ duration: 1.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AnimateImage;
