import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { MdCall, MdMessage } from "react-icons/md";
const Footer = () => {
  return (
    <div className="bg-gray-800 text-white px-5">
      <section className="max-w-[1200px] mx-auto text-white">
        <div className="grid md:grid-cols-3 py-5">
          <div className="py-8 px-4">
            <h1 className="text-xl sm:text-3xl font-bold sm:text-left text-justify mb-3">
              Be Ready To Grow
            </h1>
            <p>
              Get Exclusive <span className="font-bold">Updates</span> straight
              to your inbox
            </p>
            <br />
            <div className="flex h-10 space-x-2">
              <input
                type="text"
                className="py-1 px-3 w-full h-[100%] inline-block focus:outline-none
                focus:border-sky-500 focus:ring-2 focus:ring-sky-500 bg-gray-800 border-gray-200 border-2"
                placeholder="Email"
              />
              <button className="primary-button">Subscribe</button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold mb-3">Quick Links</h1>
                <ul className="flex flex-col gap-3">
                  <li>
                    <Link href={"/"}>Home</Link>
                  </li>
                  <li>
                    <Link
                      href={
                        "https://0xdipak.medium.com/project-solb-future-of-decentralized-and-blockchain-billing-ef542f31d90f"
                      }
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href={"/invoicer"}>Invoicer</Link>
                  </li>
                  <li>
                    <Link href={"/expenser"}>Expenser</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold">Contact Us</h1>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <HiLocationMarker />
                  <p>Pokhara, Nepal</p>
                </div>
                <div className="flex items-center gap-2">
                  <MdMessage />
                  <p>solb@gmail.com</p>
                </div>
                <div className="flex items-center gap-2">
                  <MdCall />
                  <p>+977 123456789</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* bottom section  */}
        <div className="hidden sm:block">
          <div className="flex justify-between items-center py-6 border-t-2 border-gray-400">
            <span className="text-sm text-gray-400">
              copyright &copy; 2024 solB
            </span>
            <div className="flex items-center justify-center gap-4 pb-4">
              <a href="#">
                <FaInstagram className="text-4xl" />
              </a>
              <a href="#">
                <FaFacebook className="text-4xl" />
              </a>
              <a href="#">
                <FaLinkedin className="text-4xl" />
              </a>
            </div>
            <span className="text-sm text-gray-400">
              <ul className="flex gap-3">
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
