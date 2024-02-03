import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="bg-black/20 h-full text-white relative z-50">
      <div className="h-full flex items-center justify-center p-4">
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-4 lg:pr-36">
            <h1 className="text-5xl font-bold uppercase">
              Decentralized Billing
            </h1>
            <p>
              Revolutionize Your Transactions! Introducing solB, the
              decentralized billing system where transparency meets efficiency.
              Seamlessly manage transactions, tokenize value, and redefine trust
              in billing. Welcome to the future of decentralized finance!
            </p>
            <Link href="/blog">
              <button className="primary-button mt-2">Learn More</button>
            </Link>
          </div>
          <div className=""></div>
        </div>
      </div>
      {/* <Image
        src="/2.gif"
        alt=""
        width={50}
        height={50}
        className="absolute right-0 bottom-0 w-full brightness-50 z-10"
      /> */}
      <div
        className="absolute bottom-0 w-full z-30 bg-gradient-to-b from-transparent from-10% to-black
      to-90% h-[20px] sm:h-[50px] md:h-[60px]"
      ></div>
    </div>
  );
};

export default Hero;
