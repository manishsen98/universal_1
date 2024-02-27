import { motion, useInView, useAnimation, useIsPresent } from "framer-motion";
import { useEffect, useRef } from "react";

type Props = {
  children: JSX.Element;
  width?: "fit-content" | "100%";
};

const AnimateFromRight = ({ children, width = "fit-content" }: Props) => {
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
    <div ref={ref} style={{ position: "relative", width:"100%",  }}>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            x: 1000,
          },
          visible: {
            opacity: 1,
            x: 0,
          },
        }}
        initial="hidden"
        animate={mainControl}
        transition={{ duration: 1.5, delay: 0.25 }}
        style={{width:"100%"}}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AnimateFromRight;
