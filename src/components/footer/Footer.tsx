import { Link } from "react-router-dom";
import Sicons from "../social-icons/Sicons";
import { animateScroll } from "react-scroll";
import "./Footer.scss";
import { IoLocationSharp } from "react-icons/io5";
import { FaFacebook, FaGoogle, FaInstagram, FaLinkedin, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import Logo from "../Logo";
import AnimateSlider from "../../assets/animations/AnimateSlider";
import AnimateImage from "../../assets/animations/AnimateImage";
import { motion } from "framer-motion";
const Footer = () => {
  const scrollToTop = () => {
    animateScroll.scrollToTop({ duration: 300, smooth: "easeInOutQuad" });
  };
  return (
    <section className="footer ">
       <motion.section
        className="flex justify-between p-4 text-white"
        style={{ backgroundColor: "#21D192" }}
        initial={{y:30,opacity:0,transitionDuration:1}}
        animate={{y:0,opacity:1}}
      >
        {/* Left */}
        {/* Right */}
        <div className="flex">
          <Link to="#" className="text-white me-4 text-3xl">
            <FaFacebook/>
          </Link>
          <Link to="#" className="text-white me-4 text-3xl">
            <FaTwitter/>
          </Link>
          <Link to="#" className="text-white me-4 text-3xl">
            <FaGoogle/>
          </Link>
          <Link to="#" className="text-white me-4 text-3xl">
            <FaInstagram/>
          </Link>
          <Link to="#" className="text-white me-4 text-3xl">
            <FaLinkedin/>
          </Link>
        </div>
        {/* Right */}
      </motion.section>
      <footer className=" dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <AnimateSlider>
            <div className="mb-6 md:mb-0">
              <Link to="/" className="flex items-center">
                {window.innerWidth >= 784 ? <Logo w={200} /> : <Logo w={300} />}
              </Link>
            </div>
          </AnimateSlider>
          <div className="md:flex md:justify-between">
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <AnimateImage>
                <div>
                  <h2 className="mb-6 text-5xl md:text-4xl font-semibold text-gray-900 uppercase dark:text-white">
                    Important links
                  </h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-4">
                      <Link
                        to="/"
                        className="hover:underline hover:text-red-600  transition-all ease-in-out duration-700 md:text-2xl text-4xl"
                      >
                        Shop
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="https://tailwindcss.com/"
                        className="hover:underline hover:text-red-600  transition-all ease-in-out duration-700 md:text-2xl text-4xl"
                      >
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="https://tailwindcss.com/"
                        className="hover:underline hover:text-red-600  transition-all ease-in-out duration-700 md:text-2xl text-4xl"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                  </ul>
                </div>
              </AnimateImage>
              <AnimateImage>
                <div>
                  <h2 className="mb-6 text-5xl md:text-4xl font-semibold text-gray-900 uppercase dark:text-white">
                    Useful Links
                  </h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-4">
                      <Link
                        to="https://github.com/themesberg/flowbite"
                        className="hover:underline hover:text-red-600  md: transition-all ease-in-out duration-700  md:text-2xl text-4xl "
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="https://discord.gg/4eeurUVvTy"
                        className="hover:underline hover:text-red-600  md: transition-all ease-in-out duration-700 md:text-2xl text-4xl"
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="https://discord.gg/4eeurUVvTy"
                        className="hover:underline hover:text-red-600  md: transition-all ease-in-out duration-700 md:text-2xl text-2xl"
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </AnimateImage>
              <AnimateImage>
                <div>
                  <h2 className="mb-6 text-5xl md:text-3xl font-semibold text-gray-900 uppercase dark:text-white">
                    Contact Info
                  </h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-4">
                      <Link
                        to="#"
                        className="hover:underline hover:text-red-600   transition-all ease-in-out duration-700 md:text-2xl text-2xl"
                      >
                        Attrium Business Center - Business Attrium Building -
                        2nd Street - Dubai - United Arab Emirates
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="hover:underline hover:text-red-600   transition-all ease-in-out duration-700 md:text-2xl text-2xl"
                      >
                        +971 50 103 7666
                        <br />
                        +971 56 199 0123
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="hover:underline hover:text-red-600   transition-all ease-in-out duration-700 md:text-2xl text-2xl"
                      >
                        info@universalchanakya.com
                      </Link>
                    </li>
                  </ul>
                </div>
              </AnimateImage>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2024 systos
        <a className="text-dark" href="https://mdbootstrap.com/">
        </a>
      </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
