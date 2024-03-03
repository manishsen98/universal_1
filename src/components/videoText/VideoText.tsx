import { useEffect, useState } from "react";
import "./VideoText.scss";
import { AnimatePresence, motion } from "framer-motion";

const VideoText = () => {
  const [text, setText] = useState({
    id: 1,
    quote:
      "Vibration Is A Language. If You Understand This Language, The Universe Speaks To You",
    title: "Your Guide To Balance Energies Through Vastu And Numerology",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      if (text.id == 1) {
        setText({
          id: 2,
          quote: "The Official Vastu Advisor of Damac Hills2(Akoya Oxygen)",
          title: "We Help You, Build Your Dream",
        });
      } else {
        setText({
          id: 1,
          quote:
            "Vibration Is A Language. If You Understand This Language, The Universe Speaks To You",
          title: "Your Guide To Balance Energies Through Vastu And Numerology",
        });
      }
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [text]);

  return (
    <div className=" h-[100vh] text-animate">
      <video className="video" autoFocus autoPlay loop>
        <source
          src="/bgMain.mkv.mp4"
          type="video/mp4"
        />
      </video>

      <div className="content-text">
        <b>UNIVERSAL CHANAKYA</b>
        {text.id == 1 && (
          <motion.div
            initial={{ opacity: 0 }} // Initial opacity
            animate={{ opacity: 1 }} // Fade in animation
            exit={{ opacity: 0 }} // Fade out animation
            transition={{ duration: 0.5 }} // Animation duration
          >
            <div className="text">
              <motion.h5 className="quote">
                <q>{text.quote}</q>
              </motion.h5>
              <motion.p className="title">{text.title}</motion.p>
            </div>
          </motion.div>
        )}
        {text.id == 2 && (
          <motion.div
            initial={{ opacity: 0 }} // Initial opacity
            animate={{ opacity: 1 }} // Fade in animation
            exit={{ opacity: 0 }} // Fade out animation
            transition={{ duration: 1 }} // Animation duration
          >
            <div className="text">
              <motion.h5 className="quote">
                <q>{text.quote}</q>
              </motion.h5>
              <motion.p className="title">{text.title}</motion.p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default VideoText;
