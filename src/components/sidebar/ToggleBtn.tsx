import React, { useEffect, useState } from "react";
import { TfiMenu } from "react-icons/tfi";
import { RxCross2 } from "react-icons/rx";

interface ToggleBtnProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
}

const ToggleBtn: React.FC<ToggleBtnProps> = ({ setOpen, open }) => {
  const [hidden, setHidden] = useState(true);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100 || window.innerWidth <= 784) {
        setHidden(false);
      } else {
        setHidden(true);
      }
    });
  }, []);

  return (
    <span className={`toggle ${hidden ? "" : ""}`}>
      <button onClick={() => setOpen((prev) => !prev)}>
        {open ? <RxCross2 /> : <TfiMenu />}
      </button>
    </span>
  );
};

export default ToggleBtn;
