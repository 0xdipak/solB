import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed top-0 right-0 w-full z-50 bg-black/10 backdrop-blur-sm py-4">
      <div className="">
        <div className="flex items-center justify-between mx-10">
          <Link
            href={"/"}
            className="flex items-center gap-4 text-white font-bold cursor-pointer"
          >
            <Image src={"/logo.png"} alt="logo" width={50} height={50} />
            <span className="text-4xl md:text-5xl">solB</span>
          </Link>
          <div className="text-white hidden md:block">
            <div className="flex items-center gap-6 text-xl py-4 sm:py-0">
              <Link href={"/"}>Home</Link>

              <Link
                href={
                  "https://0xdipak.medium.com/project-solb-future-of-decentralized-and-blockchain-billing-ef542f31d90f"
                }
              >
                Blog
              </Link>
            </div>
          </div>
          <div className="flex gap-8">
            <Link href="/invoicer">
              <button className="btn">Invoicer</button>
            </Link>
            <Link href="/expenser">
              <button className="btn">Expenser</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
